import React from 'react';

const allMessages = [
  {id: 4, title:'news004', content: '我爱你中国'},
  {id: 5, title:'news005', content: '我爱你北京'},
  {id: 6, title:'news006', content: '我爱你上海'},
]

function MessageDetail(props) {
  // 得到请求参数中的ID
  const {id} = props.match.params

  // 得到对应的message
  const message = allMessages.find((m) => m.id === id*1) // 返回第一个结果为true的数组元素


  return (
      <ul>
        <li>ID: {message.id}</li>
        <li>TITLE: {message.title}</li>
        <li>CONTENT: {message.content}</li>
      </ul>
  )

}

export default MessageDetail;