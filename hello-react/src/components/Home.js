import React from 'react';
import PropTypes from 'prop-types'

class Home extends React.Component {
  constructor(props) {
    // 初始化函数
    super(props);
    this.state = {
      age: props.age,
      homeLink: props.initialName
    }
  }

  onMakeOlder () {
    this.setState ({
      age: this.state.age + 3
    })
  }
  handleGreet() {
    // 子组件向父组件传值
    this.props.greet(this.state.age)
  }
  onChangeLink() {
    this.props.changeLink(this.state.homeLink)
  }
  
  // 双向数据绑定
  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    })
  }

  componentWillMount() {
    console.log("挂载之前")
  }

  componentDidMount() {
    console.log("挂载完成");
  }

  componentWillReceiveProps(nextProps) {
    console.log("接收新的传值", nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 判断DOM会不会被更新
    console.log("component should Update", nextProps, nextState)
    return true
  }

  componentWillUpdate(nextProps, nextState){
    console.log("更新之前，更新后的值", nextProps, nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("更新之后，更新之前的值", prevProps, prevState)
  }

  componentWillUnmount() {
    console.log("卸载")
  }
  
  

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>{this.state.homeLink}</h1>
            <div>
              <ol>name: {this.props.name}</ol>
              <ol>age: {this.state.age}</ol>
            </div>
            <div>
              <h4>user: {this.props.user.name}</h4>
              <ul>
                {this.props.user.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
                <button onClick={() => {this.onMakeOlder()}} className="btn btn-primary">Make me older</button>
              </ul>
              <br />
              <button onClick={this.handleGreet.bind(this)} className="btn btn-primary">Greet</button>
              <br />
              <input type="text" 
              defaultValue={this.props.initialName}
              value={this.state.initialName} 
              onChange={(event) => {this.onHandleChange(event)}}></input>
              <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">changeLinkName</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object
}