import React, {Component} from 'react';
import {Card, Table, Button, Icon, message, Modal} from 'antd'

import LinkButton from "../../components/link-button";
import {reqCategorys, reqAddCategory, reqUpdateCategory} from "../../api"
import AddForm from "./add-form";
import UpdateForm from "./update-form"

/*
商品分类路由
 */
class Category extends Component {

  state = {
    categorys: [],  // 一级分类列表
    loading: false,  // 是否正在获取数据中
    parentId: '0',  // 当前需要显示的分类列表的parentId
    parentName: '',   // 当前需要显示的分类列表的父分类名称
    subCategory: [], // 二级分类列表
    showModal: 0, // 标识添加/更新的确认框是否显示，0：都不显示，1：显示添加，2：显示更新
  }

  /*
  初始化table 所有列的数组
   */
  initColumns = () => {
    this.columns = [
      {
        title: '分类名称',
        dataIndex: 'name',  // 显示数据对应的属性名
      },
      {
        title: '操作',
        dataIndex: '',
        width: "40%",
        render: (category) => ( // 返回需要显示的界面标签
            <span>
            <LinkButton onClick={()=> this.showUpdate(category)}>编辑分类</LinkButton>
              {/* 如何向事件回调函数传递参数： 先定义一个匿名函数，在函数中调用处理的函数并传入数据*/}
              {
                this.state.parentId === '0' ?
                    <LinkButton onClick={() => this.showSubCategorys(category)}>查看子分类</LinkButton> : null
              }
          </span>
        )
      }
    ];
  }

  /*
  异步获取一/二级分类列表
   */
  getCategorys = async (parentId) => {
    // 发请求前，显示loading
    this.setState({loading: true})
    parentId = parentId || this.state.parentId
    // 发送异步ajax请求，获取数据
    const result = await reqCategorys(parentId)

    // 请求完成后，隐藏loading
    this.setState({loading: false})

    if (result.status === 0) {
      // 取出分类数组(可能是一级，也可能是二级)
      const categorys = result.data

      if (parentId === '0') {
        this.setState({categorys})
      } else {
        this.setState({
          subCategory: categorys
        })
      }

    } else {
      message.error('获取分类列表失败')
    }
  }

  // 显示指定一级分类对象的二级子列表
  showSubCategorys = (category) => {
    // 更新状态
    this.setState({  // setState()不能立即获得最新状态，因为setState()是异步更新状态
      parentId: category._id,
      parentName: category.name,
    }, () => { // 在状态更新后并且重新Render()后执行
      // 获取二级分类列表
      this.getCategorys()
    })

  }

  /*
  显示指定一级分类列表
   */
  showFirstCategory = () => {
    // 更新为显示一级列表的状态
    this.setState({
      parentId: '0',
      parentName: '',
      subCategory: []
    })
  }

  // 显示添加的对话框
  showAdd = () => {
    this.setState({
      showModal: 1
    })
  }

  // 显示更新的对话框
  showUpdate = (category) => {
    // 保存分类对象
    this.category = category

    this.setState({
      showModal: 2
    })
  }

  addCategory = () => {
    // 进行表单验证，成功后添加
    this.form.validateFields(async (err, values) => {
      if (!err) {
        // 隐藏确认框
        this.setState({
          showModal: 0
        })

        // 收集数据并提交添加分类请求
        const {parentId, categoryName} = values

        // 清除输入数据
        this.form.resetFields()

        const result = await reqAddCategory(categoryName, parentId)
        if (result.status === 0) {
          // 重新获取当前分类列表(添加的分类是当前分类列表下的分类)
          if (parentId === this.state.parentId) {
            this.getCategorys()
          } else if (parentId === '0') {
            this.getCategorys('0')
          }
        }
      }
    })
  }

  updateCategory = () => {
    // 进行表单验证，只能通过了才处理
    this.form.validateFields(async (err, values) => {
      if (!err) {
        // 隐藏确认框
        this.setState({
          showModal: 0
        })

        // 准备数据
        const categoryId = this.category._id
        const {categoryName} = values

        // 清除输入数据
        this.form.resetFields()

        // 发请求更新分类
        const result = await reqUpdateCategory({categoryId, categoryName})

        if (result.status === 0) {
          // 重新渲染表格
          this.getCategorys()
        }
      }
    })

  }

  // 响应点击取消，隐藏确定框
  handleCancel = () => {
    // 清除输入数据
    this.form.resetFields()

    // 隐藏模态框
    this.setState({
      showModal: 0
    })}

  /*
  为第一次render准备数据
   */
  UNSAFE_componentWillMount() {
    this.initColumns()
  }

  // 发异步ajajx请求，执行异步任务
  componentDidMount() {
    // 获取一级分类列表
    this.getCategorys()
  }

  render() {
    // 读取状态数据
    const {categorys, loading, parentId, parentName, subCategory} = this.state

    // 读取指定的分类
    const category = this.category  || {}  // 如果还没有，指定一个空对象

    // card的右侧标题
    const title = parentId === '0' ? '一级分类列表' :
        (
            <span>
              <LinkButton onClick={this.showFirstCategory}>一级分类列表</LinkButton>
              <Icon type='arrow-right' style={{marginRight: 4}}></Icon>
              <span>{parentName}</span>
            </span>
        )

    // card 右侧
    const extra = (
        <Button type="primary" onClick={this.showAdd}><Icon type="plus"></Icon>添加</Button>
    )

    return (
        <Card title={title} extra={extra}>
          <Table dataSource={parentId === '0' ? categorys : subCategory}
                 columns={this.columns}
                 bordered
                 rowKey="_id"
                 pagination={{defaultPageSize: 10, showQuickJumper: true}}
                 loading={loading}
          />
          <Modal
              title="添加分类"
              visible={this.state.showModal === 1}
              onOk={this.addCategory}
              onCancel={this.handleCancel}
          >
            <AddForm categorys={categorys}
                     parentId={parentId}
                     setForm={(form) => {this.form=form}}
            ></AddForm>
          </Modal>
          <Modal
              title="修改分类"
              visible={this.state.showModal === 2}
              onOk={this.updateCategory}
              onCancel={this.handleCancel}
          >
            <UpdateForm
                categoryName={category.name}
                setForm={(form) => {this.form=form}}
            ></UpdateForm>
          </Modal>
        </Card>
    );
  }
}

export default Category;