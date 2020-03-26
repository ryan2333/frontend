import React, {Component} from 'react';
import {Form, Input} from 'antd'
import PropTypes from 'prop-types'

const Item = Form.Item


class AddForm extends Component {

  static propTypes = {
    setForm: PropTypes.func.isRequired
  }

  UNSAFE_componentWillMount() {
    this.props.setForm(this.props.form)
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 4}, // 左侧label的宽度
      wrapperCol: { span: 12} // 右侧input的宽度
    }
    return (
        <Form>
          <Item label='角色名称' {...formItemLayout}>
            {
              getFieldDecorator('roleName', {
                initialValue: '',
                rules: [
                  {required: true, message: "角色名称必须输入"},
                  {min: 2, message: "角色名称长度为2-6"},
                  {max: 6, message: "角色名称长度为2-6"}
                ]
              })(
                  <Input placeholder="请输入角色名称"></Input>
              )
            }
          </Item>
        </Form>
    );
  }
}

export default Form.create()(AddForm);