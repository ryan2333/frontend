import React, {Component} from 'react';

class App extends Component {

  state = {
    count: 0
  }

  handleAdd = () => {
    // 得到选择的增加数量
    const number = this.select.value.trim() * 1

    // 得到原本的count的值，并计算新的值
    const count = this.state.count

    // 更新状态
    this.setState({count: count + number})
  }

  handleSub = () => {
    // 得到选择的增加数量
    const number = this.select.value.trim() * 1

    // 得到原本的count的值
    let count = this.state.count

    if (count >= number) {
      count = count - number
    }

    // 更新状态
    this.setState({count})
  }

  handleAddIfOdd = () => {
    // 得到选择的增加数量
    const number = this.select.value.trim() * 1


    let count = this.state.count
    if (count % 2 === 1) {
      this.setState({
        count: count + number
      })
    }
  }

  handleAddAsync = () => {
    // 得到选择的增加数量
    const number = this.select.value.trim() * 1

    // 得到原本的count的值
    let count = this.state.count


    // 异步更新状态
    setTimeout(()=>{
      this.setState({count: count + number})
    },2000)

  }


  render() {
    const {count} = this.state
    return (
        <div>
          <p>click {count} item</p>
          <div>
            <select name="" id="" ref={select => this.select = select}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>&nbsp;
            <button onClick={this.handleAdd}>+</button>
            &nbsp;
            <button onClick={this.handleSub}>-</button>
            &nbsp;
            <button onClick={this.handleAddIfOdd}>increment if odd</button>
            &nbsp;
            <button onClick={this.handleAddAsync}>increment async</button>
          </div>
        </div>
    );
  }
}

export default App;