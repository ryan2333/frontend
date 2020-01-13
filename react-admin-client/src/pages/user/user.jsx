import React, {Component} from 'react';
import {Card, Button, Table, message, Modal} from 'antd'

import {formatDate} from "../../utils/dateUtils";
import LinkButton from "../../components/link-button";
import {PAGE_SIZE} from "../../utils/constans";
import {reqUsers, reqDeleteUser, reqAddUser} from "../../api";
import UserForm from './user-form'

/*
用户路由
 */
class User extends Component {

  state = {
    users: [],
    roles: [],
    isShow: false
  }

  /*
  显示更新界面
   */
  showUpdate=(user) => {
    this.user = user
    this.setState({
      isShow: true
    })
  }

  /*
  显示添加界面
   */
  showAdd = () => {
    this.user = null
    this.setState({
      isShow: true
    })
  }

  deleteUser = (user) => {
    console.log("deleteUser()")
    Modal.confirm({
      title: `确认删除${user.username}吗？`,
      onOk: async ()=> {
        const result = await reqDeleteUser(user._id)
        if (result.status===0) {
          message.success('用户删除成功')
          this.getUsers()
        }
      }
    })
  }

  addOrUpdateUser = async () => {
    console.log("addOrUpdate()")
    // 收集数据
    const user = this.form.getFieldsValue()
    this.form.resetFields()

    if (this.user && this.user._id) {
      user._id = this.user._id
    }

    this.setState({isShow: false})

    // 提交请求
    const result = await reqAddUser(user)

    // 更新列表
    if (result.status===0) {
      message.success(`${this.user ? 'update': 'add'} user succ`)
      this.getUsers()
    }
  }

  getUsers = async () => {
    const result = await reqUsers()
    if (result.status === 0) {
      const {users, roles} = result.data
      this.initRoleNames(roles)
      this.setState({
        users,
        roles
      })
    }
  }

  /*
  根据roles的数组，生成包含所有角色名的对象（属性名用角色的id值）
   */
  initRoleNames = (roles) => {
     const roleName = roles.reduce((pre, role) => {
       pre[role._id] = role.name
       return pre
     },{})
    this.roleNames = roleName
  }

  initColumns = () => {
    this.columns = [
      {
        title: '用户名',
        dataIndex: 'username'
      },
      {
        title: '邮箱',
        dataIndex: 'email'
      },
      {
        title: '电话',
        dataIndex: 'phone'
      },
      {
        title: '注册时间',
        dataIndex: 'create_time',
        render: formatDate
      },
      {
        title: '所属角色',
        dataIndex: 'role_id',
        render: (role_id) => this.roleNames[role_id]
      },
      {
        title: '操作',
        render: (user) => (<span>
          <LinkButton onClick={()=>this.showUpdate(user)}>修改</LinkButton>
          <LinkButton onClick={()=> this.deleteUser(user)}>删除</LinkButton>
        </span>)
      },
    ]
  }

  UNSAFE_componentWillMount() {
    this.initColumns()
  }

  componentDidMount() {
    this.getUsers()
  }

  render() {
    const user = this.user || {}
    const title = <Button type='primary' onClick={this.showAdd}>创建用户</Button>
    const {users, isShow, roles} = this.state
    return (
        <Card title={title}>
          <Table
              bordered
              rowKey='_id'
              dataSource={users}
              columns={this.columns}
              pagination={{defaultPageSize: PAGE_SIZE, showQuickJumper: true}}
          >
          </Table>
          <Modal
          title={user._id ? '修改用户' : '添加用户'}
          visible={isShow}
          onOk={this.addOrUpdateUser}
          onCancel={()=>{
            this.form.resetFields()
            this.setState({isShow: false})
          }}
          >
            <UserForm setForm={form=>this.form=form}
                      roles={roles}
                      user = {user}
            />
          </Modal>
        </Card>
    );
  }
}

export default User;