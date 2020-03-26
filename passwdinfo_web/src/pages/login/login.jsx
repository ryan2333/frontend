import React, {Component} from 'react';
import {Form, Icon, Input, Button, message} from "antd";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import './login.less'
import {login} from "../../redux/actions";
import storageUtils from "../../utils/storageUtils";


class Login extends Component {
  handleSubmit = (e) => {
    // 禁用表单默认操作
    e.preventDefault()

    // 得到表单对象
    const {form}  = this.props

    // 验证
    form.validateFields((err, values) => {
      if (!err) {
        const {username, password} = values

        // 发起登陆请求
        this.props.login(username, password)

      } else {
        message("输入信息不正确")
      }
    })

  }

  render() {
    const {getFieldDecorator} = this.props.form

    const user = this.props.user

    if (user && user.id) {
      return <Redirect to="/" />
    }
    const errorMsg = this.props.user.errorMsg

    return (
        <div className="login">

          <h1 className="login-header">Passwdinfo</h1>


        <Form onSubmit={this.handleSubmit} className="login-content">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [
                  { required: true, message: '请输入用户名' },
                  { pattern: /^[a-zA-z_]+[a-zA-Z0-9_.]+$/, message: '用户名必须以字母及下划线开头，用户名中不能包含其它特殊字符' },
                {max: 16, message: '用户名最长为16位'},
                {min: 2, message: '用户名最少为2位'}
              ],
            })(
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
                <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                />,
            )}
          </Form.Item>
          <Form.Item>
            <div className={user.errorMsg ? 'error-msg show' : 'error-msg'}>{errorMsg}</div>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
        </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Login);
export default connect(
    state =>({user: state.user}),
    {login}
)(WrappedNormalLoginForm);
