import React, { Component } from 'react'

export default class CourseAdd extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="body course-add">
          <ol class="breadcrumb">
            <li><a href="javascript:;">课程管理</a></li>
            <li class="active">课程添加</li>
          </ol>
          <div class="steps create">
            <div class="title">
              <h5>创建课程 <small>CREATE A COURSE</small></h5>
            </div>
            <form action="" class="form-horizontal  col-md-offset-3 col-md-6">
              <div class="form-group">
                <label for="" class="col-md-2 control-label">课程名称</label>
                <div class="col-md-9">
                  <input type="text" class="form-control input-sm" placeholder="请填写课程名称" />
                    <small class="text-danger">注意: 课程名称即对外展示的信息</small>
                            </div>
                </div>
                <div class="col-md-11">
                  <a href="course_add_one.html" class="btn btn-danger btn-sm pull-right">创建课程</a>
                </div>
                    </form>
                </div>
          </div>
        </div>
    )
  }
}
