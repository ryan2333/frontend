import React, {Component} from 'react';
import {Form, Card, Input, Button, message, Select} from "antd";
import {createApi, getById, putApi} from "../../../services/passwords";
import {getToken} from "../../../utils/auth";

const {Option} = Select

class Edit extends Component {
  state = {
    title: '添加密码',
    passwd: {},
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const info = getToken()
        const {id} = info
        values['passwd_type'] = parseInt(values['passwd_type'])

        if (this.props.match.params.id) {
          const pid = this.props.match.params.id
          values['update_user_id'] = id
          console.log("put commit", values)
          putApi(pid, values).then(res => {
            console.log("put: ", res)
            if (res.status === 0) {
              message.success("密码更新成功")
              this.props.history.push('/admin/passwords')
            }
          }).catch(err=> {
            message.error(err)
          })
        } else {
          values['create_user_id'] = id
          console.log("post commit", values)
        createApi(values).then(res => {

          if (res.status === 0) {
            message.success("密码添加成功")
            this.props.history.push("/admin/passwords")
          } else {
            message.error("密码添加失败, "+ res.err_msg)
          }
        })}
      } else {
        message.error(err)
      }
    })
  }


   ipVaild=(rule, value, callback)=> {
    var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
    return reg.test(value);
  }

  componentDidMount() {
    const pid  = this.props.match.params.id
    if (pid) {
      getById(pid).then(res => {
        const title = '编辑密码'
        if (res.status === 0) {
          this.setState({
            title: title,
            passwd: res.data
          },()=>{})
      }
  }).catch(err => {
  message.error(err)
})
}
  }

  render() {
    const {getFieldDecorator} = this.props.form
    const {account, current_password, old_password, host_ip, desc, passwd_type} = this.state.passwd
    return (
        <Card title={this.state.title}>
          <Form
              onSubmit={this.handleSubmit}
          >
            <Form.Item label="帐号">
              {
                getFieldDecorator('account', {
                  rules: [
                    {required: true, message: 'please input account'},
                    {min: 2, message: 'must greate 2'},
                    {pattern: /[A-Za-z_]+[A-Za-z0-9_]*/, message: '帐号必须以字母或小划线开始，只能包含字母数字和下划线'}
                  ],
                  initialValue: account
                })
                (account ? <Input placeholder="please input account" style={{width: '400px'}} disabled />:
                    <Input placeholder="please input account" style={{width: '400px'}}/>)
              }
            </Form.Item>
            <Form.Item label="新密码">
              {
                getFieldDecorator('current_password', {
                  rules: [
                    {required: true, message: 'please input new password'},
                    {min: 6, message: '密码长度为6-16个字符'},
                    {max: 16, message: '密码长度为6-16个字符'}
                  ],
                  initialValue: current_password
                })
                (<Input.Password placeholder="please input new password" style={{width: '400px'}}/>)
              }
            </Form.Item>
            <Form.Item label="历史密码">
              {
                getFieldDecorator('old_password', {
                  rules: [
                    {required: true, message: 'please input history password'},
                    {min: 6, message: '密码长度为6-16个字符'},
                    {max: 16, message: '密码长度为6-16个字符'}
                  ],
                  initialValue: old_password
                })
                (<Input.Password placeholder="please input history password" style={{width: '400px'}}/>)
              }
            </Form.Item>
            <Form.Item label="密码主机Ip">
              {
                getFieldDecorator('host_ip', {
                  rules: [
                    {required: true, message: 'please input host ip address'},
                    {validator: this.ipVaild, message: "ip地址格式不正确"}
                  ],
                  initialValue: host_ip
                })
                (<Input placeholder="please input host ip address" style={{width: '400px'}}/>)
              }
            </Form.Item>
            <Form.Item label="密码类型">
              {
                getFieldDecorator('passwd_type', {
                  rules: [
                    {required: true, message: 'please input history password'},
                  ],
                  initialValue: passwd_type  ? passwd_type : 100002
                })
                (<Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="请选择"
                >
                  <Option value="100001" selected>公用</Option>
                  <Option value="100002">个人</Option>
                </Select>)
              }
            </Form.Item>
            <Form.Item label="描述">
              {
                getFieldDecorator('desc', {
                  rules: [
                    {required: true, message: 'please input history password'},
                  ],
                  initialValue: desc
                })
                (<Input.TextArea placeholder="please input history password" rows={4} cols={4} style={{width: '400px'}}/>)
              }
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">提交</Button>
            </Form.Item>
          </Form>
        </Card>
    );
  }
}

export default Form.create({name: 'passwordEdit'})(Edit);