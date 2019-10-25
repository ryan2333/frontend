import React, { Component } from 'react'
import course_1 from '../../common/uploads/course_1.png'
import course_2 from '../../common/uploads/course_2.png'
import course_3 from '../../common/uploads/course_3.png'
import course_4 from '../../common/uploads/course_4.png'

export default class CourseList extends Component {
  render() {
    return (
      <div class="container-fluid">
        {/* <!-- 客户列表 --> */}
            <div class="body course-list">
          {/* <!-- 面包屑 --> */}
                <ol class="breadcrumb">
            <li><a href="javascript:;">课程管理</a></li>
            <li class="active">课程列表</li>
          </ol>
          <div class="courses">
            {/* <!-- 搜索 --> */}
                    <div class="search">
              <form action="" class="form-inline">
                <select name="" class="form-control input-sm">
                  <option value="">按学科</option>
                </select>
                <select name="" class="form-control input-sm">
                  <option value="">按类型</option>
                </select>
                <select name="" class="form-control input-sm">
                  <option value="">按价格</option>
                </select>
                <select name="" class="form-control input-sm">
                  <option value="">按热度</option>
                </select>
                <button class="btn btn-danger btn-sm">过滤</button>
                <div class="input-group pull-right">
                  <input type="text" class="form-control input-sm" />
                    <span class="input-group-btn">
                      <button class="btn btn-danger btn-sm">搜索</button>
                    </span>
                            </div>
                        </form>
                    </div>
              <div class="course">
                <div class="pic">
                <img src={course_1} alt="" />
                        </div>
                  <div class="info">
                    <a href="javascript:;">撩课大前端—Vue项目实战—撩多多商城</a>
                    <ul class="list-unstyled">
                      <li>
                        <span>讲师：叶建华</span>
                        <span>类别：web大前端</span>
                      </li>
                      <li>
                        <span>课时：123</span>
                        <span>学员：111111</span>
                      </li>
                      <li>
                        <span>浏览：123333</span>
                        <span></span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="course">
                  <div class="pic">
                <img src={course_2} alt="" />
                        </div>
                    <div class="info">
                      <a href="javascript:;">撩课大前端—Vue项目实战—撩多多商城</a>
                      <ul class="list-unstyled">
                        <li>
                          <span>讲师：叶建华</span>
                          <span>类别：web大前端</span>
                        </li>
                        <li>
                          <span>课时：123</span>
                          <span>学员：111111</span>
                        </li>
                        <li>
                          <span>浏览：123333</span>
                          <span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="course">
                    <div class="pic">
                <img src={course_3} alt="" />
                        </div>
                      <div class="info">
                        <a href="javascript:;">撩课大前端—Vue项目实战—撩多多商城</a>
                        <ul class="list-unstyled">
                          <li>
                            <span>讲师：叶建华</span>
                            <span>类别：web大前端</span>
                          </li>
                          <li>
                            <span>课时：123</span>
                            <span>学员：111111</span>
                          </li>
                          <li>
                            <span>浏览：123333</span>
                            <span></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="course">
                      <div class="pic">
                <img src={course_4} alt="" />
                        </div>
                        <div class="info">
                          <a href="javascript:;">撩课大前端—Vue项目实战—撩多多商城</a>
                          <ul class="list-unstyled">
                            <li>
                              <span>讲师：叶建华</span>
                              <span>类别：web大前端</span>
                            </li>
                            <li>
                              <span>课时：123</span>
                              <span>学员：111111</span>
                            </li>
                            <li>
                              <span>浏览：123333</span>
                              <span></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="course">
                        <div class="pic">
                <img src={course_1} alt="" />
                        </div>
                          <div class="info">
                            <a href="javascript:;">撩课大前端—Vue项目实战—撩多多商城</a>
                            <ul class="list-unstyled">
                              <li>
                                <span>讲师：叶建华</span>
                                <span>类别：web大前端</span>
                              </li>
                              <li>
                                <span>课时：123</span>
                                <span>学员：111111</span>
                              </li>
                              <li>
                                <span>浏览：123333</span>
                                <span></span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* 分页 */}
                <ul class="pagination pull-right">
                        <li><a href="#">上一页</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">下一页</a></li>
                      </ul>
                    </div>
                  </div>
    )
  }
}
