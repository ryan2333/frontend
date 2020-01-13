import React, {Component} from 'react';
import {Input, Tree, Form} from 'antd'
import PropTypes from 'prop-types'

import menuList from "../../config/menuConfig";

const {Item} = Form
const {TreeNode} = Tree

/*
设置角色权限组件
 */
class AuthForm extends Component {
  static propTypes = {
    role: PropTypes.object.isRequired
  }

  // 根据传入的角色的menus生成初始状态
  constructor (props) {
    super(props)
    const {menus} = this.props.role
    this.state = {
      checkedKeys: menus
    }
  }

  // 选中某个node时的回调函数
  onCheck = checkedKeys => {
    this.setState({ checkedKeys });
  };

  getTreeNodes = (menuList) => {
    return menuList.reduce((pre, item) => {
      pre.push(
          <TreeNode title={item.title} key={item.key}>
            {item.children ? this.getTreeNodes(item.children) : null}
          </TreeNode>
      )
      return pre
    }, [])
  }

  // 为父组件提供获取最新menus数据的方法
  getMenus = () => this.state.checkedKeys

  // 根据新传入的role来更新checkKeys状态
  // 当组件接收到新的属性，自动调用，在render之前执行
  UNSAFE_componentWillReceiveProps(nextProps) {
    const {menus} = nextProps.role
    this.setState({
      checkedKeys: menus
    })
  }

  UNSAFE_componentWillMount() {
    this.treeNodes = this.getTreeNodes(menuList)
  }


  render() {
    const formItemLayout = {
      labelCol: {span: 4},
      wrapperCol: {span: 15}
    }
    const {role} = this.props
    const {checkedKeys} = this.state

    return (
        <div>
            <Item label='角色名称' {...formItemLayout}>
              <Input value={role.name} disabled></Input>
            </Item>
          <Tree
              checkable
              defaultExpandAll
              checkedKeys={checkedKeys}
              onCheck={this.onCheck}
          >
            <TreeNode title='平台权限' key="all">{this.treeNodes}</TreeNode>
          </Tree>
        </div>

    );
  }
}

export default AuthForm;