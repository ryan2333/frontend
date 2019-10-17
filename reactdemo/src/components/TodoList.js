import React, { Component } from 'react'
import "../assets/css/index.css";
import storage from "../models/storage"

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state={
      username: "1111",
      list: [],
      title: ''
    }
  }
  
  handleInputChange=(e)=>{
    this.setState({
      title: e.target.value
    })
  }

  handleAddToList=(e)=>{
    this.setState({
      list: [...this.state.list, {title: this.refs.title.value, checked: false}]
    })
    this.refs.title.value = ""
    // localStorage.setItem("list", JSON.stringify(this.state.list))
    storage.set("todolist", this.state.list)
  }

  handleKeyUp=(e)=>{
    if (e.keyCode===13){
      this.setState({
        list: [...this.state.list, { title: this.refs.title.value }]
      })
      this.refs.title.value = ""
    }
    storage.set("todolist", this.state.list)
  }

  handleDelFromList(key){
    var tmplist = this.state.list
    tmplist.splice(key,1)
    this.setState({
      list: tmplist
    })
    storage.set("todolist", this.state.list)
  }

  handleChangeChecked=(key)=>{
    var d = this.state.list
    d[key].checked = !d[key].checked
    this.setState({
      list: d
    })
    storage.set("todolist", this.state.list)
  }

  componentDidMount() {
    var todolist = storage.get("todolist")
    if (todolist) {
      this.setState({
        list: todolist
      })
    }
  }
  render() {
    return (
      <div > 
        <header className="title">
          TodoList: <input type="text" ref="title" onKeyUp={this.handleKeyUp} /><button onClick={this.handleAddToList}>增加+</button>
        </header>
        <h2>待办事项</h2><hr/>
        <ul>
          {/* map里注意this指向 */}
          {
            this.state.list.map((value, key) => {
              if (!value.checked) {
                return (<li key={key}>
                  <input type="checkbox" checked={value.checked} onChange={this.handleChangeChecked.bind(this,key)}/>{value.title} 
                  <button onClick={this.handleDelFromList.bind(this, key)}>删除-</button>
                </li>)
              }
            })
          }
        </ul>
        <h2>已完成</h2><hr/>
        <ul>
          {/* map里注意this指向 */}
          {
            this.state.list.map((value,key)=>{
              if (value.checked) {
                return (<li key={key}>
                  <input type="checkbox" checked={value.checked} onChange={this.handleChangeChecked.bind(this, key)} />{value.title}
                  <button onClick={this.handleDelFromList.bind(this, key)}>删除-</button>
                </li>)
              }
            })
          }
        </ul>
      </div>
    )
  }
}
