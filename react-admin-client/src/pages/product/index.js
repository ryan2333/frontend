import React, {Component} from 'react';
import {Card, Select, Input, Button, Icon, Table, message} from 'antd'

import LinkButton from "../../components/link-button";
import {reqProducts, reqUpdateStatus} from "../../api";
import {PAGE_SIZE} from "../../utils/constans";
import './product.less'
import memoryUtils from "../../utils/memoryUtils";
/*
Product Home组件
 */
const Option = Select.Option
const {Search} = Input

class ProductHome extends Component {

  state = {
    products: [], // 商品的数组
    total: 0, // 商品总数量
    loading: false,
    searchName: '',  // 搜索的关键字
    searchType: 'productName', // 根据哪个字段搜索
  }

  /*
  显示详情界面
  */
  showDetail = (product) => {
    this.props.history.push('/product/detail')
    memoryUtils.product = product
  }

  /*
  显示修改商品界面
  */
  showUpdate = (product) => {
    this.props.history.push('/product/addupdate')
    memoryUtils.product = product
  }

  initColumns = () => {
    this.columns = [
      {
        title: '商品名称',
        dataIndex: 'name',
      },
      {
        title: '商品描述',
        dataIndex: 'desc',
      },
      {
        title: '价格',
        dataIndex: 'price',
        render: (price) => '￥' + price  // 当前指定了dateIndex属性，传入的是对应的属性值
      },
      {
        title: '状态',
        width: 100,
        // dataIndex: 'status',
        render: (product) => {
          const {status, _id} = product
          return (
              <span>
               <Button type='primary'
                       onClick={() => this.updateStatus(_id, status===1 ? 2 : 1)}
               >
                 {status===1 ? '下架' : '上架'}
               </Button>
               <span>{status===1 ? '在售' : '已下架'}</span>
             </span>
          )
        }
      },
      {
        title: '操作',
        width: 100,
        render: (product) => {
          return (
              <span>
               <LinkButton
                   onClick={()=> this.showDetail(product)}
               >详情</LinkButton>
               <LinkButton onClick={() => this.showUpdate(product)}>修改</LinkButton>
             </span>
          )
        }
      },
    ];
  }

  // 获取指定页码的列表数据显示
  getProducts = async (pageNum) => {
    this.pageNum = pageNum // 保存pageNum, 让其它页面看得见
    this.setState({loading: true})  // 显示loading
    const result = await reqProducts(pageNum, PAGE_SIZE)
    this.setState({loading: false})  // 隐藏loading
    if (result.status === 0) {
      const {total, list} = result.data
      this.setState({
        total,
        products: list
      })
    }
  }

  // 更新指定商品的状态
  updateStatus =async (productId, status) => {
    const result = await reqUpdateStatus(productId, status)
    if (result === 0) {
      message.success('更新成功')
      this.getProducts(this.pageNum)
    }
  }

  UNSAFE_componentWillMount() {
    this.initColumns()
  }

  componentDidMount() {
    this.getProducts(1)
  }

  render() {
    const {products, total, loading, searchName, searchType} = this.state

    const title = (
        <span>
          <Select value={searchType}
                  style={{width: 150, marginRight: 15}}
                  onChange={value => this.setState({searchType: value})}>
            <Option value='productName'>按名称搜索</Option>
            <Option value='productDesc'>按描述搜索</Option>
          </Select>
          {/*<Input addonBefore={<Icon type="search" />} placeholder="关键字" style={{width: 200, margin: '0 15px'}}/>*/}
          <Search
              value={searchName}
              placeholder='请输入关键字'
              onSearch={value => console.log(value)}
              enterButton style={{width: 200}}
              onChange={(event) => this.setState({searchName: event.target.value})}
          />
          {/*<Button type="primary"><Icon type='search'></Icon>搜索</Button>*/}
        </span>
    )
    const extra = (
        <Button type='primary' onClick={() => this.props.history.push('/product/addupdate')}>
          <Icon type='plus'/>
          添加商品
        </Button>
    )

    return (
        <Card title={title} extra={extra}>
          <Table
              loading={loading}
              bordered
              rowKey='_id'
              dataSource={products}
              columns={this.columns}
              pagination={{
                current: this.pageNum,
                defaultPageSize: PAGE_SIZE,
                showQuickJumper: true,
                total: total,
                onChange:
                this.getProducts
                // 由此(pageNum) => {this.getProducts(pageNum)简写

              }}
          />
        </Card>
    );
  }
}

export default ProductHome;