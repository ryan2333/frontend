import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import { Modal } from 'antd';

import "./header.less"
import {formatDate} from "../../utils/dateUtils"
import memoryUtils from "../../utils/memoryUtils";
import storageUtils from "../../utils/storageUtils";
import {reqWether} from "../../api/index"
import menuList from "../../config/menuConfig";
import LinkButton from "../../components/link-button"

class Header extends Component {

  state = {
    currentTime: formatDate(Date.now()),
    dayPictureUrl: '',
    weather: ''
  }

  /*
  第一次render之后执行一次
  一般在此执行异步操作：发ajax请求/启动定时器
   */

  getTime = () => {
    // 每隔1S获取当前时间并更新状态数据
    this.intervalId = setInterval(()=>{
      const currentTime = formatDate(Date.now())
      this.setState({currentTime})
    },1000)
  }

  getWeather = async () =>{
    const {dayPictureUrl, weather} = await reqWether("北京")
    this.setState({
      dayPictureUrl,
      weather
    })
  }

  getTitle = () => {
    // 得到当前请求路径
    const path = this.props.location.pathname
    let title
    menuList.forEach(item => {
      if (item.key === path) { // 如果当前item对象的key与path匹配，item的title就是需要显示的title
        title = item.title
      } else if(item.children) {
        // 在所有的子item中查找
        const cItem = item.children.find(cItem => path.indexOf(cItem.key) ===0)
        // 如果有值才说明匹配
        if (cItem) {
          // 取出它的title
          title = cItem.title
        }
      }
    })
    return title
  }

  logOut=()=>{
    // 显示确认框
    Modal.confirm({
      title: '退出登陆',
      content: '确定退出登陆？',
      onOk: ()=> {
        // 退出，删除保存的user数据
        storageUtils.removeData('user_key')
        memoryUtils.user = {}

        // 跳转到Login
        this.props.history.replace('/login')
      }
    });
  }

  componentDidMount() {
    // 获取当前时间
    this.getTime()
    // 获取当前天气显示
    this.getWeather()
  }

  /*
  当前组件卸载之前，清除定时器
   */
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const {currentTime, dayPictureUrl, weather} = this.state
    const user = memoryUtils.user
    // 得到当前需要显示的title
    const title = this.getTitle()
    return (
        <div className="header">
          <div className="header-top">
            <span>欢迎, {user.username}</span>
            <LinkButton onClick={this.logOut}>退出</LinkButton>
          </div>
          <div className="header-bottom">
            <div className="header-bottom-left">{title}</div>
            <div className="header-bottom-right">
              <span>{currentTime}</span>
              <img src={dayPictureUrl} alt=""/>
              <span>{weather}</span>
            </div>
          </div>
        </div>
    );
  }
}

export default withRouter(Header);