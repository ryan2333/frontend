import React, {Component} from 'react';
import {Form, Input} from 'antd'
import PropTypes from 'prop-types'

const Item = Form.Item

class UpdateForm extends Component {
  static propTypes = {
    categoryName: PropTypes.string.isRequired,
    setForm: PropTypes.func.isRequired
  }


  UNSAFE_componentWillMount() {
    // 将form对象通过setForm方法传递给父组件
    this.props.setForm(this.props.form)
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { categoryName } = this.props

    return (
        <Form>
          <Item>
            {
              getFieldDecorator('categoryName', {
                initialValue: categoryName,
                rules: [
                  {required: true, message: "分类名称必须输入"},
                  {min: 2, message: "分类名称长度为2-6"},
                  {max: 6, message: "分类名称长度为2-6"}
                ]
              })(
                  <Input placeholder="请输入分类名称"></Input>
              )
            }
          </Item>
        </Form>
    );
  }
}

export default Form.create()(UpdateForm);