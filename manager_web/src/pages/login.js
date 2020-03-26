import React, {Component} from 'react';

import {Form, Icon, Input, Button, Card, message} from 'antd';

import './login.less'
import {setToken} from "../utils/auth";
import {loginApi} from "../services/auth";


class Login extends Component {
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.form.validateFields((err, values)=> {
      if (!err) {
        const {username, password} = values
        loginApi({username, password}).then(res => {
          if (res.status === 0 ) {
            message.success("login succ")
            console.log("res.data: ",res.data)
            const {id,username,cn_name,email, role} = res.data.user
            setToken("userinfo",{id,username,cn_name,email, role})
            setToken("token", res.data.token)
            this.props.history.push("/admin")
          }
        }).catch(err => {
          message.error('用户名或密码不正确')
        })
      } else {
        message.error("commit failed")
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Card title="用户登陆" className="login-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名' }],
            })(
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"
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
                    placeholder="密码"
                />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              登陆
            </Button>
          </Form.Item>
        </Form>
        </Card>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'login' })(Login);
export default WrappedNormalLoginForm;
