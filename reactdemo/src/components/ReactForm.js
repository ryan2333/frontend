import React, { Component } from 'react'

export default class ReactForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      msg: 'react form',
      name:'',
      sex: "1",
      city: "北京",
      cities: ['北京','上海','天津','重庆'],
      hobby: [
        {
          'title': '吃饭',
          'checked': false
        },
        {
          'title': '睡觉',
          'checked': true
        },
        {
          'title': '打豆豆',
          'checked': false
        },
        {
          'title': '踢球',
          'checked': true
        },
      ],
      info: ''
    }
  }

  // 获到text表单值
  handleChangeName=(e)=> {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit=(e)=> {
    e.preventDefault()
    console.log(this.state.name, this.state.sex, this.state.city, this.state.hobby)
  }
  
  // 获取radio表单值
  handleChangeSex=(e)=>{
    this.setState({
      sex: e.target.value
    })
  }

  // 获取select表单值
  handleChangeCity=(e)=>{
    this.setState({
      city: e.target.value
    })
  }

  // 获取checkbox表单值
  handleChangeHobby=(key)=>{
    var hobby = this.state.hobby
    hobby[key].checked = !hobby[key].checked
    this.setState({
      hobby: hobby
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.msg}</h3>
        {/* Form操作 */}
        <form action="" onSubmit={this.handleSubmit}>
          name: <input type="text" onChange={this.handleChangeName}/><br/>
          {/* radio 表单 */}
          sex: 男<input type="radio" value="1" onChange={this.handleChangeSex} checked={this.state.sex === "1"} />
               女<input type="radio" value="2" onChange={this.handleChangeSex} checked={this.state.sex === "2"}/>
          <br/>
          {/* select 表单 */}
          city: <select name="" id="" value={this.state.city} onChange={this.handleChangeCity}>
            {this.state.cities.map(function(value,index){
              return <option key={index}>{value}</option>
            })}
          </select><br/>
          {/* checkbox表单 */}
          hobby:
          {
            this.state.hobby.map((value,key) => 
            <span key={key}>{value.title}
              <input type="checkbox" checked={value.checked} onChange={this.handleChangeHobby.bind(this,key)}/>
            </span>)
          }
         <br/>
          <input type="submit" defaultValue="提交"/>
        </form>
      </div>
    )
  }
}
