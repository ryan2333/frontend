import React, { Component } from 'react'
// import cat from '../assets/images/cat.jpg';
// import Header from './Header';
// import Footer from './Footer';
import {
  Link
} from "react-router-dom";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '新闻组件',
      list: [
        {aid: 1, title: "新闻111"},
        {aid: 2, title: "新闻222" },
        {aid: 3, title: "新闻333" },
        {aid: 4, title: "新闻444" },
      ]
    }
  }

  // getNews=()=>{
  //   alert(this.props.comp.state.msg)
  // }

  // getFooter=()=>{
  //   this.refs.footer.run()
  // }

  render() {
    return (
      <div>
        <h3>新闻组件</h3>

        <ul>
          {this.state.list.map((value,key) => {
            return (
              <li key={key}>
                <Link to={`/newsDetail/${value.aid}`}>{value.title}</Link>
              </li>
            )
          })}
        </ul>

        {/* <Header title={this.state.title}></Header>
        {this.state.title} <br/>

        获取父组件的传值：{this.props.text} <br/>
        <button onClick={this.props.run}>执行父组件的run方法</button><br/>
        <button onClick={this.getNews}>获取整个父组件</button><br />
        <button onClick={this.props.comp.pGetData}>通过传组件的方式执行父组件的pGetData方法</button><br />
        <button onClick={this.props.comp.getChildData.bind(this,'我是子组件的数据')}>子组件给父组件传值</button><br />

        <button onClick={this.getFooter}>主动获取子组件的值</button><br />

        {/* 引入圖片三種方式 */}

        {/* 第一種，以模塊化方式引入引用 */}
        {/* <img src={cat} alt=""/> */}

        {/* 第二種：使用require引用 */}
        {/* <img src={require("../assets/images/cat1.jpg")} style={{"width": '200px'}} alt=""/> */}

        {/* 引用遠程圖片 */}
        {/* <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2350171032,3227234175&fm=26&gp=0.jpg" style={{ "width": '200px' }} alt=""/> */}
        {/* <hr/>
        <Footer title={this.state.title} ref="footer"></Footer>  */}
      </div>
    )
  }
}
