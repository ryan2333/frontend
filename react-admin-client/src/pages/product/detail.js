import React, {Component} from 'react';
import {Card, Icon, List} from 'antd'

import LinkButton from "../../components/link-button";
import {BASE_IMG_URL} from "../../utils/constans";
import {reqCategory} from "../../api";

/*
Product 详情页
 */
const Item = List.Item
class ProductDetail extends Component {
  state = {
    cName1: '',  // 一级分类名称
    cName2: ''  // 二级分类名称
  }
  async componentDidMount() {
    // 得到当前商品分类ID
    const {pCategoryId, categoryId}  = this.props.location.state.product
    if (pCategoryId === '0') { // 一级分类下的商品
      const result = await reqCategory(categoryId)
      console.log(categoryId)
      const cName1 = result.data.name
      this.setState({cName1})
    } else { // 二级分类下的商品
      // 通过多个await方式发多个请求： 后面一个请求是在前一个请求成功返回之后地发送
      // const result1 = await reqCategory(pCategoryId)
      // const cName1 = result1.data.name
      // const result2 = await reqCategory(categoryId)
      // const cName2 = result2.data.name

      // 一次性发送多个请求，只有都成功了，才正常处理
      const results = await Promise.all([reqCategory(pCategoryId), reqCategory(categoryId)])
      const cName1 = results[0].data.name
      const cName2 = results[1].data.name
      this.setState({
        cName1,
        cName2
      })
    }
  }

  render() {
    // 读取携带过来的state数据
    const {name,desc,price,detail, imgs} = this.props.location.state.product
    const {cName1, cName2} = this.state
    const title=(
        <span>
          <LinkButton>
            <Icon type="arrow-left"
                  style={{marginRight: "10px", fontSize: 15}}
                  onClick={() => this.props.history.goBack()}
            ></Icon>
          </LinkButton>
          <span>商品详情</span>
        </span>
    )
    return (
        <Card title={title} className="product-detail">
        <List>
          <Item>
            <span className="left">商品名称：</span>
            <span>{name}</span>
          </Item>
          <Item>
            <span className="left">商品描述：</span>
            <span>{desc}</span>
          </Item>
          <Item>
            <span className="left">商品价格：</span>
            <span>{price}元</span>
          </Item>
          <Item>
            <span className="left">所属分类：</span>
            <span>{cName1} {cName2 ? '-->' + cName2 : ''}</span>
          </Item>
          <Item>
            <span className="left">商品图片：</span>
            <span>
              {imgs.map((img,index) => (
                  <img src={BASE_IMG_URL + img} alt="img" key={index} className="product-img"/>
                  )
              )}
            </span>
          </Item>
          <Item>
            <span className="left">商品详情：</span>
            <span dangerouslySetInnerHTML={{__html: detail}}></span>
          </Item>
        </List>
        </Card>
    );
  }
}

export default ProductDetail;