import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import {Menu, Icon} from 'antd';
import {connect} from 'react-redux'

import "./left-nav.less"
import logo from '../../assets/images/logo.svg'
import menuList from '../../config/menuConfig'
import {setHeadTitle} from "../../redux/actions";


const {SubMenu} = Menu;

class LeftNav extends Component {
  /*
  根据menu的数据数组生成对应的标签数组
  使用map加递归调用
   */

  /*
  判断当前登陆用户对item是否有权限
   */
  hasAuth = (item) => {
    /*
    1. 如果当前用户是admin, 通过
    2. 如果当前item是公开的，直接返回true
    3. 判断当前用户有此item的权限，key有没有在menus中
    4. 如果当前用户有此item的某个子item的权限
     */
    const key = item.key
    const menus = this.props.user.role.menus
    const username = this.props.user.username
    if (username === 'admin' || item.isPublic || menus.indexof(key)!== -1) {
      return true
    } else if (item.children){
      return !!item.children.find(child => menus.indexOf(child.key)!==-1)
    }
    return false
  }
  getMenuNodes_map = (menuList) => {
    return menuList.map((item) =>  {
      if (!item.children) {
        return (
            <Menu.Item key={item.key}>
              <Link to={item.key}>
                <Icon type={item.icon}/>
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
        )
      } else {
        return (
            <SubMenu
                key={item.key}
                title={
                  <span>
                    <Icon type={item.icon}/>
                    <span>{item.title}</span>
                  </span>
                }
            >
              {
                this.getMenuNodes(item.children)
              }
            </SubMenu>
        )
      }
    })
  }

  /*
  根据menu的数据数组生成对应的标签数组
  使用reduce加递归调用
   */
  getMenuNodes = (menuList) => {
    const pathname = this.props.location.pathname
    return menuList.reduce((pre, item) => {
      // 如果当前用户有item对应的权限，才需要显示对应的菜单项
      if (this.hasAuth(item)) {
        // 向pre中添加<Menu.Item> 或者<SubMenu>
        if (!item.children) {
          // 判断item是否是当前对应的item
          if(item.key===pathname || pathname.indexOf(item.key)===0) {
            // 更新title
            this.props.setHeadTitle(item.title)
          }
          pre.push(
              <Menu.Item key={item.key}>
                <Link to={item.key} onClick={()=>this.props.setHeadTitle(item.title)}>
                  <Icon type={item.icon}/>
                  <span>{item.title}</span>
                </Link>
              </Menu.Item>
          )
        } else {
          // 查找一个与当前请求路径匹配的子Item
          const cItem = item.children.find(cItem => pathname.indexOf(cItem.key)===0)
          // 如果存在，说明当前item的子列表需要打开
          if (cItem) {
            this.openKey = item.key
          }

          pre.push (
              <SubMenu
                  key={item.key}
                  title={
                    <span>
                    <Icon type={item.icon}/>
                    <span>{item.title}</span>
                  </span>
                  }
              >
                {
                  this.getMenuNodes(item.children)
                }
              </SubMenu>
          )
        }
      }
      return pre
    },[])
  }

  /*
  在第一次render()之前执行一次
  为第一个render()准备数据
   */
  UNSAFE_componentWillMount() {
    this.memuNodes = this.getMenuNodes(menuList)
  }

  render() {
    // 得到当前请求的路由路径
    let pathname = this.props.location.pathname

    if (pathname.indexOf('/product')===0) { // 当前请求的是商品或其子路由
      pathname = '/product'
    }

    // 得到需要打开的菜单项的key
    const openKey = this.openKey

    return (
        <div className="left-nav">
          <Link to="/" className="left-nav-header">
            <img src={logo} alt=""/>
            <h1>硅谷后台</h1>
          </Link>
          <Menu
              selectedKeys={[pathname]}
              defaultOpenKeys={[openKey]}
              mode="inline"
              theme="dark"
          >
            {
              this.memuNodes
            }
          </Menu>
        </div>

    );
  }
}
/*history/location/match
withRouter高阶组件：
包装非路由组件，返回一个新的组件
新的组件向非路由组件传递三个属性，history/location/match
 */
export default connect(
    state => ({user: state.user}),
    {setHeadTitle}
)(withRouter(LeftNav));