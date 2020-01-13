import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom'

import MessageDetail from './message-detail'

class Message extends Component {

  state = {
    message: []
  }

  componentDidMount() {
    setTimeout(()=>{
      const message = [
        {id: 4, title: 'news004'},
        {id: 5, title: 'news005'},
        {id: 6, title: 'news006'},
      ]
      this.setState({
        message
      })
    },1000)
  }


  render() {
    return (
        <div>
          <ul>
            {
              this.state.message.map((value, key) =>
                (
                  <li key={key}>
                    <NavLink to={"/home/message/messagedetail/" + value.id}>{value.title}</NavLink>
                  </li>
                )
              )
            }
          </ul>
          <Route path="/home/message/messagedetail/:id" component={MessageDetail}></Route>
        </div>
    );
  }
}

export default Message;