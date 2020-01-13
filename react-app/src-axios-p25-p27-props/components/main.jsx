import React, {Component} from 'react';
import PropTypes from 'prop-types'
import axios from 'axios'

class Main extends Component {

  state = {
    initView: true,
    loading: false,
    users: [],
    errMsg: ''
  }

  static propTypes = {
    searchName: PropTypes.string.isRequired
  }


  componentWillReceiveProps(newProps) {
    // 获取新的searchName值
    const {searchName} = newProps
    const url = `https://api.github.com/search/users?q=${searchName}`

    // 更新状态
    this.setState({
      initView: false,
      loading: true
    })

    // 获取结果
    axios.get(url).then(response=>{
      const result = response.data
      const users = result.items.map(item => {
        return {name: item.login, url: item.html_url, avatar_url: item.avatar_url}
      })

      // 更新状态
      this.setState({
        loading: false,
        users
      })
    }).catch(error=>{
      this.setState({
        loading: false,
        errMsg: error.message
      })
    })

  }


  render() {
    const {initView, loading, users, errMsg} = this.state
    console.log(this.state.users)
    if (initView) {
      return <h2>请输入关键字搜索:</h2>
    } else if (loading) {
      return <h2>Loading</h2>
    } else if (errMsg) {
      return <h3>{errMsg}</h3>
    }

    return (
        <div className="row">
          {
            users.map((user,index) => (
                <div className="card" key={index}>
                  <a href={user.url} target="_blank">
                    <img src={user.avatar_url}
                         alt="" style={{width: 100}}/>
                  </a>
                  <p className="card-text">{user.name}</p>
                </div>
            ))
          }
        </div>
    );
  }
}

export default Main;