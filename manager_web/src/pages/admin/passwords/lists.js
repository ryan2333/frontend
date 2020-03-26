import React, {Component} from 'react';

import {Card, Table, Button, Popconfirm, message} from "antd";
import {deleteApi, listApi} from "../../../services/passwords";
import {getToken} from "../../../utils/auth";
import PasswdDetail from "./passwdDetail";


class Lists extends Component {
  state = {
    passwords: [],
    total: 0
  }

  handleDelete = (record) => {
    const {id} = record
    deleteApi(id).then(res=>{
      if (res.status === 0) {
        message.success(`删除密码 ${record.account} 成功`)
        this.props.history.push("/admin/passwords")
      } else {
        message.error(`密码 ${record.account} 删除失败`)
      }
    })
  }


  componentDidMount() {
    const userinfo = getToken("userinfo")
    const uid = userinfo.id
    listApi({uid}).then(res=> {
      this.setState({
        passwords: res.data
      })
    }).catch(err=> {
      console.log(err)
    })
  }


  render() {

    const columns = [
        {
          title: 'Id',
          dataIndex: "id",
          key: 'id',
          width: 80,
          align: 'center'
        },
        {
          title: '帐号',
          dataIndex: "account",
          key: 'account'
        },
        {
          title: '主机ip',
          dataIndex: "host_ip",
          key: 'host_ip'
        },
        {
          title: '操作',
          render: (txt, record, index) => {
            return(<div>
              <Button size="small" type="primary" style={{margin: "0 1em"}} onClick={()=> {
                this.props.history.push("/admin/passwords/edit/"+record.id)
              }
              }>修改</Button>
              <Popconfirm
                  title="确定删除此项"
                  onCancel={() => {}}
                  onConfirm={()=> {this.handleDelete(record)}}
              >
                <Button size="small" type="danger">删除</Button>
              </Popconfirm>
            </div>)
          }
        }
    ]
    //
    return (
        <Card
            title="密码列表"
            extra={
              <Button
                  type="primary"
                  size="small"
                  onClick={()=>this.props.history.push("/admin/passwords/edit")}
              >
                新增
              </Button>}
        >
        <Table columns={columns}
               bordered
               dataSource={this.state.passwords}
               rowKey="id"
               pagination={{defaultPageSize: 10}}
               expandedRowRender={record => <PasswdDetail record={record}/>}
        >

        </Table>
        </Card>
    );
  }
}

export default Lists;