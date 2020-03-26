import React, {Component} from 'react';
import {Card, Form, message, Input, Cascader, Button, Icon} from 'antd'

import LinkButton from "../../components/link-button";
import {reqCategorys, reqAddOrUpdateProduct} from '../../api'
import PicturesWall from "./pictures-wall";
import RichTextEditor from "./rich-text-editor";

const {Item} = Form
const {TextArea} = Input
/*
Product 添加更新组件
 */
class ProductAddUpdate extends Component {
  state = {
    options: []
  }

  constructor (props) {
    super(props)

    // 创建用来保存ref标识的标签对象容器
    this.pw = React.createRef()
    this.editor = React.createRef()
  }
  //
  /*
  异步获取1级/2级分类列表
  async函数的返回值是一个新的promise对象，promise的结果和值由async的结果来决定
   */
  getCategorys = async (parentId) => {
    const result = await reqCategorys(parentId)
    if (result.status === 0) {
      const categorys = result.data
      // 如果是一级分类列表
      if (parentId === '0') {
        this.initOptions(categorys)
      } else { // 二级列表
        return categorys // 返回二级列表 ==》 当前async函数返回的promsize会成功，并且
      }
    }
  }

  initOptions = async (categorys) => {
    // 根据categorys生成options数组
    const options = categorys.map(c => ({
      value: c._id,
      label: c.name,
      isLeaf: false
    }))

    // 如果是一个二级分类商品的更新
    const {isUpdate, product} = this
    const {pCategoryId} = product
    if (isUpdate && pCategoryId !== '0') {
      // 获取对应的二级分类列表
      const subCategorys = await this.getCategorys(pCategoryId)
      // 生成二级下拉列表的options
      const childOptions = subCategorys.map(c=>({
        value: c._id,
        name: c.name,
        isLeaf: true
      }))
      // 找到当前商品对应的一级option对象
      const targetOption = options.find( option => option.value===pCategoryId)
      // 关联到对应的一级options
      targetOption.children = childOptions
    }

    // 更新options状态
    this.setState({
      options
    })
  }

  submit = () => {
    // 进行表单验证，如果通过了才发送请求
    this.props.form.validateFields(async (error, values)=>{
      if (!error) {
        // 收集数据, 并封装成product对象
        const {name, desc, price, categoryIds} = values
        let pCategoryId, categoryId
        if (categoryIds.length === 1) {
          pCategoryId = '0'
          categoryId = categoryIds[0]
        } else {
          pCategoryId = categoryIds[0]
          categoryId = categoryIds[1]
        }
        const imgs = this.pw.current.getImgs()
        const detail = this.editor.current.getDetail()

        const product = {
          name, desc, price, imgs, detail, pCategoryId, categoryId
        }
        console.log("addupdate:",product)
        // 如果是更新，需要添加_id
        if (this.isUpdate) {
          product._id = this.product._id
        }
        // 调用接口请求函数去添加或更新
        const result = await reqAddOrUpdateProduct(product)
        // 根据结果提示
        if (result.status === 0) {
          message.success(`${this.isUpdate ? '更新' : '添加'} 商品成功`)
          this.props.history.goBack()
        } else {
          message.error(`${this.isUpdate ? '更新' : '添加'} 商品失败`)
        }

      }
    })
  }

  /*
  验证价格的自定义函数
   */
  validataPrice = (rule, value, callback) => {
    if (value * 1 > 0) {
      callback() // 验证通过
    } else {
      callback('价格必须大于0')
    }
  }

  // 用于加载下一级菜单的回调函数
  loadData = async (selectedOptions) => {
    const targetOption = selectedOptions[0];
    // 显示loading效果
    targetOption.loading = true

    // 根据选中的分类获取下级菜单数据
    const subCategorys = await  this.getCategorys(targetOption.value)

    // 关掉loading效果
    targetOption.loading = false

    // 二级分类数组有数据
    if (subCategorys && subCategorys.length > 0) {
      // 生成一个二级列表的options
      const childOptions = subCategorys.map(c=>({
        value: c._id,
        label: c.name,
        isLeaf: true
      }))
      // 关联到当前options上
      targetOption.children = childOptions
    } else {
      targetOption.isLeaf = true
    }

    // 更新options状态
    this.setState({
      options: [...this.state.options]
    })
  }

  componentDidMount() {
    this.getCategorys('0')
  }

  UNSAFE_componentWillMount() {
    // 取出携带的state
    const product = this.props.location.state // 如果是添加，没有值，否则有值

    // 保存是否是更新的标识
    this.isUpdate = !!product
    // 保存商品，如果没有，保存的是空对象
    this.product = product || {}
  }

  render() {
    const {isUpdate, product} = this

    const title = (
        <span>
          <LinkButton onClick={()=>this.props.history.goBack()}>
            <Icon type='arrow-left'></Icon>
          </LinkButton>
          <span>{isUpdate ? '更新商品' : '添加商品'}</span>
        </span>
    )
    const {pCategoryId, categoryId, imgs, detail} = product

    // 用来接收级联分类ID的数组
    const categoryIds = []
    if (isUpdate) {
      // 商品是一级分类下的
      if (pCategoryId === '0') {
        categoryIds.push(pCategoryId)
      } else {
        // 商品是二级分类下的
        categoryIds.push(pCategoryId)
        categoryIds.push(categoryId)
      }
    }

    // 指定Item布局的配置对象
    const formItemLayout = {
      labelCol: {span: 2}, // 左侧label的宽度
      wrapperCol: {span: 8} // 指定右侧包裹的宽度
    }

    const { getFieldDecorator } = this.props.form

    return (
       <Card title={title}>
        <Form {...formItemLayout}>
          <Item label="商品名称">
            {
              getFieldDecorator('name',{
                initialValue: product.name,
                rules: [
                  {required: true, message: "商品名称不能为空"}
                ]
              })(
                  <Input placeholder="请输入商品名称"/>
              )
            }
          </Item>
          <Item label="商品描述">
            {
              getFieldDecorator('desc',{
                initialValue: product.desc,
                rules: [
                  {required: true, message: "商品描述不能为空"}
                ]
              })(
                  <TextArea placeholder="请输入商品描述" autoSize={{ minRows: 2, maxRows: 10}}/>
              )
            }
          </Item>
          <Item label="商品价格">
            {
              getFieldDecorator('price',{
                initialValue: product.price,
                rules: [
                  {required: true, message: "商品价格不能为空"},
                  {validator: this.validataPrice}
                ]
              })(
                  <Input placeholder="请输入商品价格" type="number" addonAfter="元"/>
              )
            }
          </Item>
          <Item label="商品分类">
            {
              getFieldDecorator('categoryIds',{
                initialValue: categoryIds,
                rules: [
                  {required: true, message: "商品分类不能为空"},
                ]
              })(
                  <Cascader
                      placeholder="请选择商品分类"
                      options={this.state.options}
                      loadData={this.loadData}
                  />
              )
            }
        </Item>
          <Item label="商品图片">
            <PicturesWall ref={this.pw} imgs={imgs}/>
          </Item>
          <Item label="商品详情" labelCol={{span: 2}} wrapperCol={{span: 20}}>
            <RichTextEditor ref={this.editor} detail={detail}/>
          </Item>
          <Item>
            <Button type="primary" onClick={this.submit}>提交</Button>
          </Item>
        </Form>
       </Card>
    );
  }
}

export default Form.create()(ProductAddUpdate);

/*
1. 子组件调用父组件的方法: 将父组件方法以函数属性形式传给子组件
2. 父组件调用子组件的方法: 在父组件中通过ref得到子组件标签对象(即组件对象)，调用其方法
 */