import React, { Component } from 'react'

export default class CourseTopic extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="body course-topic">
          {/* <!-- 面包屑 --> */}
                <ol class="breadcrumb">
            <li><a href="javascript:;">课程管理</a></li>
            <li class="active">课程专题</li>
          </ol>
          <h3>版块拓展中...</h3>
        </div>
      </div>
    )
  }
}
