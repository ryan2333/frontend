import React, {Component} from 'react';
import {Form, Icon, Input, Button, message} from 'antd';
import {Redirect} from 'react-router-dom'

import './login.less'
import logo from '../../assets/images/logo.svg'
import {reqLogin} from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from "../../utils/storageUtils";

/*
登陆的路由组件
 */
class Login extends Component {

  handleSubmit = (event) => {

    // 禁用表单默认操作
    event.preventDefault()

    // 得到form对象
    // const form = this.props.form

    // 对所有表单字段进行校验
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const {username, password} = values
        const result = await reqLogin(username, password)

        if (result.status === 0) { // 登陆成功
          message.success("登陆成功")
          memoryUtils.user = result.data
          storageUtils.saveData('user_key', memoryUtils.user)

          // 跳转管理界面(不需要再回退到登陆界面)
          this.props.history.replace('/')

        } else { // 登陆失败
          message.error(result.msg)
        }

      } else {
        message.error("验证失败")
      }

    })
  }

  render() {
    // 判断用户是否登陆，如果已经登陆，自动跳转到管理界面
    const user = memoryUtils.user
    if (user && user._id) {
      return <Redirect to="/" />
    }

    // 具有强大功能的form对象
    const form = this.props.form
    const {getFieldDecorator} = form

    return (
        <div className="login">
          <header className="login-header">
            <img src={logo} alt=""/>
            <h1>后台管理系统</h1>
          </header>
          <section className="login-content">
            <h2>用户登陆</h2>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {
                  getFieldDecorator('username', {
                    // 声明式验证，直接使用别人定义好的规则进行验证
                    rules: [
                      {required: true, message: '用户名不能为空'},
                      {min: 4, message: '用户名至少为4位'},
                      {max: 12, message: '用户名最多为12位'},
                      {pattern: /^[a-zA-Z_]+[a-zA-Z0-9_]*$/, message: '用户名必须以字母下划线开头'}
                    ]
                  })(
                      <Input
                          prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                          placeholder="Username"
                      />
                  )
                }
              </Form.Item>
              <Form.Item>
                {
                  getFieldDecorator('password', {
                    rules: [
                      {required: true, message: '密码不能为空'},
                      {min: 4, message: '密码至少为6位'},
                      {max: 16, message: '密码最多为16位'},
                      {pattern: /^[a-zA-Z_0-9]+$/, message: '密码必须包含大小写字母，数字，下划线'}
                    ]
                  })(
                      <Input
                          prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                          type="password"
                          placeholder="Password"
                      />
                  )
                }
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登陆
                </Button>
              </Form.Item>
            </Form>
          </section>
        </div>
    );
  }
}

/*
高阶函数
 一类特别的函数
   接收函数类型的参数
   返回值是函数
 常见高阶函数
   定时器: setTimeout()/setInterval()
   Promise:  Promise(()=>{then(value=>{}, reason=>{}}
   数组遍历相关的方法：forEach(), filter(), map(), reduce(), find(),findIndex()
   函数对象的bind方法
 高阶函数更加动态，更加具有扩展性

高阶组件
  本质是一个函数
  接收一个组件，返回一个新的组件(包装组件)，新组件内部渲染被包装组件，包装组件会向被包装组件传入特定属性
  扩展组件的功能
  高阶组件也是高阶函数，接收一个组件函数，返回是一个新的组件函数
 */

/*
包装Form组件生成一个新的组件Form(login)
新组件会向Form传递一个强大的对象属性
 */

const WrapLogin = Form.create()(Login)

export default WrapLogin;

/*
async和await
1. 作用
  简化promise对象的使用：不用再使用.then()来指定成功/失败的回调函数
  以同步编码(没有回调函数)方式实现异步流程
2. 哪里用await
  在返回promise的表达式左侧写await: 不想要promise格式数据，想要promise异步执行成功的value数据
3. 哪里用async
  await所在函数(最近的)定义的左侧写async
 */