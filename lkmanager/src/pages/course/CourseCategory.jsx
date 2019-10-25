import React, { Component } from 'react'

export default class CourseCategory extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="body course-category">
          {/* <!-- 面包屑 --> */}
                <ol class="breadcrumb">
            <li><a href="javascript:;">课程管理</a></li>
            <li class="active">课程分类</li>
          </ol>
          <div class="page-title">
            <a href="./course_category_add.html" class="btn btn-danger btn-sm pull-right">添加分类</a>
          </div>
          <div class="panel panel-default">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th width="18%">分类名称</th>
                  <th>课程数量</th>
                  <th>是否显示</th>
                  <th>排序</th>
                  <th width="10%">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr class="active">
                  <td class="text-left">Web大前端</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <a href="./course_category_add.html" class="btn btn-info btn-xs">编辑</a>
                  </td>
                </tr>
                <tr>
                  <td class="text-left">&nbsp;&nbsp;├ HTML/CSS</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <a href="./course_category_add.html" class="btn btn-info btn-xs">编辑</a>
                  </td>
                </tr>
                <tr>
                  <td class="text-left">&nbsp;&nbsp;├ Javascript</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <a href="./course_category_add.html" class="btn btn-info btn-xs">编辑</a>
                  </td>
                </tr>
                <tr>
                  <td class="text-left">&nbsp;&nbsp;├ Vue+项目实战</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <a href="./course_category_add.html" class="btn btn-info btn-xs">编辑</a>
                  </td>
                </tr>
                <tr class="active">
                  <td class="text-left">JavaEE+大数据</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <a href="./course_category_add.html" class="btn btn-info btn-xs">编辑</a>
                  </td>
                </tr>
                <tr>
                  <td class="text-left">&nbsp;&nbsp;├ Spring</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <a href="./course_category_add.html" class="btn btn-info btn-xs">编辑</a>
                  </td>
                </tr>
                <tr>
                  <td class="text-left">&nbsp;&nbsp;├ Oricon</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <a href="./course_category_add.html" class="btn btn-info btn-xs">编辑</a>
                  </td>
                </tr>
                <tr class="active">
                  <td class="text-left">数据库</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <a href="./course_category_add.html" class="btn btn-info btn-xs">编辑</a>
                  </td>
                </tr>
                <tr>
                  <td class="text-left">&nbsp;&nbsp;├ Mysql</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <a href="./course_category_add.html" class="btn btn-info btn-xs">编辑</a>
                  </td>
                </tr>
                <tr>
                  <td class="text-left">&nbsp;&nbsp;├  MongoDB</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <a href="./course_category_add.html" class="btn btn-info btn-xs">编辑</a>
                  </td>
                </tr>
                <tr>
                  <td class="text-left">&nbsp;&nbsp;├  Oracle</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <a href="./course_category_add.html" class="btn btn-info btn-xs">编辑</a>
                  </td>
                </tr>
                <tr class="active">
                  <td class="text-left">Python+人工智能</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <a href="./course_category_add.html" class="btn btn-info btn-xs">编辑</a>
                  </td>
                </tr>
                <tr>
                  <td class="text-left">&nbsp;&nbsp;├  大数据</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <a href="./course_category_add.html" class="btn btn-info btn-xs">编辑</a>
                  </td>
                </tr>
                <tr>
                  <td class="text-left">&nbsp;&nbsp;├  云计算</td>
                  <td>300</td>
                  <td>是</td>
                  <td>10</td>
                  <td>
                    <a href="./course_category_add.html" class="btn btn-info btn-xs">编辑</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
