/*
应用根组件
 */


import React, {Component} from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.numRef = React.createRef()
  }
  state = {
    count: 0
  }

  add = () => {
    const number = this.numRef.current.value * 1
    console.log(number)
    this.setState(state => ({count: state.count + number}))
  }

  sub = () => {
    const number = this.numRef.current.value * 1
    this.setState(state => ({count: state.count - number}))
  }

  addIfOdd = () => {
    const number = this.numRef.current.value * 1
    if (this.state.count % 2 === 1){
      this.setState(state => ({count: state.count + number}))
    }
  }

  addAsync = () => {
    const number = this.numRef.current.value * 1
    console.log("number: ", number)
    setTimeout(()=>{
      this.setState(state => ({count: state.count + number}))
    },1000)
  }

  render() {
    const {count} = this.state
    console.log("count: ", count)
    return (
       <div>
         <p>click {count} times</p>
         <div>
           <select ref={this.numRef}>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
           </select>
         </div>
         <button onClick={this.add}>+</button>
         <button onClick={this.sub}>-</button>
         <button onClick={this.addIfOdd}>add if odd</button>
         <button onClick={this.addAsync}>add async</button>
       </div>
    );
  }
}

export default App;