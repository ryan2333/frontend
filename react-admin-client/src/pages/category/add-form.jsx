import React, {Component} from 'react';
import {Form, Select, Input} from 'antd'
import PropTypes from 'prop-types'

const Item = Form.Item
const Option = Select.Option

class AddForm extends Component {

  static propTypes = {
    categorys: PropTypes.array.isRequired,
    parentId: PropTypes.string.isRequired,
    setForm: PropTypes.func.isRequired
  }

  UNSAFE_componentWillMount() {
    this.props.setForm(this.props.form)
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const {categorys,parentId} = this.props

    return (
        <Form>
          <Item>
            {
              getFieldDecorator('parentId', {
                initialValue: parentId
              })(
                  <Select>
                    <Option value='0'>一级分类</Option>
                    {
                      categorys.map((c, index) => <Option value={c._id} key={index}>{c.name}</Option>)
                    }
                  </Select>
              )
            }
          </Item>
          <Item>
            {
              getFieldDecorator('categoryName', {
                initialValue: '',
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

export default Form.create()(AddForm);