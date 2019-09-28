import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeLink: "initHome",
      homeMounted: true
    }
  }
  
  onChangeLinkHome(newName) {
    this.setState({
      homeLink: newName
    })
  }

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    })
  }

  onGreet(age) {
    alert(age)
  }

  render () {
    const user = {
      name: "Tony",
      hobbies: ["Sports", "Reading"]
    }
    let homeCmp = "";
    if (this.state.homeMounted) {
      homeCmp = (
        <Home name={"Max"} age={12} user={user}
          greet={this.onGreet}
          changeLink={this.onChangeLinkHome.bind(this)}
          initialName={this.state.homeLink}>
        </Home>
      )
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header hLink={this.state.homeLink}></Header>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Hello World</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            {homeCmp}
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <button className="btn btn-primary" onClick={this.onChangeHomeMounted.bind(this)}>(Un)Mount</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
