import React, {Component} from 'react';
import {Card, Button, message, Table, Modal} from 'antd'
import {connect} from 'react-redux'

import {PAGE_SIZE} from "../../utils/constans";
import { reqRoles, reqAddRole, reqUpdateRole} from "../../api";
import AddForm from './add-form'
import AuthForm from "./auth-form";
import {formatDate} from "../../utils/dateUtils";
import {logout} from "../../redux/actions";

/*
角色路由
 */
class Role extends Component {
  state = {
    roles: [], // 所有角色列表
    role: {}, // 选中的role
    isShowAdd: false, // 是否显示添加模态框
    isShowAuth: false, // 是否显示设置权限模态框
  }

  constructor (props) {
    super(props)

    this.auth = React.createRef()
  }

  initColums = () => {
    this.colums = [
      {
        title: '角色名称',
        dataIndex: 'name'
      },
      {
        title: '创建时间',
        dataIndex: 'create_time',
        render: (create_time) => formatDate(create_time)
      },{
        title: '授权时间',
        dataIndex: 'auth_time',
        render: formatDate
      },
      {
        title: '授权人',
        dataIndex: 'auth_name'
      }
    ]
  }

  onRow = (role) => {
    return {
      onClick: event => { // 点击行
        this.setState({role})
      }
    }
  }

  getRoles = async () => {
    const result = await reqRoles()
    if (result.status === 0) {
      const roles = result.data
      this.setState({roles})
    }
  }

  addRole = () => {
    // 表单验证
    this.form.validateFields(async (error, values) => {
      if (!error) {
        // 收集数据
        const {roleName} =  values
        this.form.resetFields()
        this.setState({isShowAdd: false})

        // 发送请求
        const result = await reqAddRole(roleName)
        if (result.status===0) {
          message.success('角色添加成功')
          // // this.getRoles()
          const role = result.data
          // 更新roles状态
          this.setState(state=>({
            roles: [...state.roles, role]
          }))
        } else {
          message.error('角色添加失败')
        }
      }
    })
  }
  updateRole = async() => {
    // 隐藏确认框
    this.setState({isShowAuth: false})

    const role = this.state.role
    // 得到最新的menus
    const menus =  this.auth.current.getMenus()
    role.menus = menus
    role.auth_name = this.props.user.username
    role.auth_time = Date.now()

    const result = await reqUpdateRole(role)
    if (result.status === 0) {
      message.success('当前用户角色已更新,请重新登陆')
      // 如果当前更新的是自己角色的权限，强制退出
      if (role._id === this.props.user.role._id) {
        this.props.logout()
      } else {
        message.success('角色更新成功')
        this.setState({
          roles: [...this.state.roles]
        })
      }
    } else {
      message.error('更新角色失败')
    }
  }

  handleCancel = () => {
    this.setState({isShowAdd: false})
    this.form.resetFields()
  }

  UNSAFE_componentWillMount() {
    this.initColums()
  }

  componentDidMount() {
    this.getRoles()
  }

  render() {
    const {roles, role,isShowAdd, isShowAuth} = this.state
    const title = (
        <span>
          <Button type='primary' style={{margin: 10}} onClick={() => {
            this.setState({isShowAdd: true})
          }}>创建角色</Button>
          <Button type='primary' disabled={!role._id} onClick={() => {
            this.setState({isShowAuth: true})
          }} >设置角色权限</Button>
        </span>
    )
    return (
        <Card title={title}>
          <Table
              bordered
              rowKey='_id'
              rowSelection={{
                type: "radio",
                selectedRowKeys: [role._id],
                onSelect: (role) => {  // 选中某个回调radio时回调
                  this.setState({
                    role
                  })
                }

              }}
              dataSource={roles}
              columns={this.colums}
              pagination={{defaultPageSize: PAGE_SIZE}}
              onRow={this.onRow}
          >
          </Table>
          <Modal
            title="添加角色"
            visible={isShowAdd}
            onOk={this.addRole}
            onCancel={this.handleCancel}
        >
          <AddForm setForm={(form) => this.form = form}>
          </AddForm>
        </Modal>
          <Modal
              title="设置角色权限"
              visible={isShowAuth}
              onOk={this.updateRole}
              onCancel={() => {
                this.setState({isShowAuth: false})
              }}
          >
            <AuthForm role={role} ref={this.auth}></AuthForm>
          </Modal>
        </Card>
    );
  }
}

export default connect(
    state => ({user: state.user}),
    {logout}
)(Role);