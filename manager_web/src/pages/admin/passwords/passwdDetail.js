import React, {Component} from 'react';

import {Descriptions} from 'antd'

class PasswdDetail extends Component {
  render() {

    const record = this.props.record
    return (
        <div>
          <Descriptions
              title="密码详情"
              bordered
              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
          >
            <Descriptions.Item label="Id">{record.id}</Descriptions.Item>
            <Descriptions.Item label="帐号名称">{record.account}</Descriptions.Item>
            <Descriptions.Item label="当前密码">{record.current_password}</Descriptions.Item>
            <Descriptions.Item label="历史密码">{record.old_password}</Descriptions.Item>
            <Descriptions.Item label="密码类型">{record.passwd_type === 100001 ? '公用' : '个人'}</Descriptions.Item>
            <Descriptions.Item label="创建人">{record.create_user_id.cn_name}</Descriptions.Item>
            <Descriptions.Item label="最后修改人">{record.update_user_id.cn_name}</Descriptions.Item>

            <Descriptions.Item label="创建时间">{record.create_time}</Descriptions.Item>
            <Descriptions.Item label="创建时间">{record.update_time}</Descriptions.Item>

            <Descriptions.Item label="密码描述">
              {record.desc}
            </Descriptions.Item>
          </Descriptions>

        </div>
    );
  }
}

export default PasswdDetail;