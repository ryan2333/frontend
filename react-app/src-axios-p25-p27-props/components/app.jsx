import React, {Component} from 'react';

import Search from './search'
import Main from './main'

class App extends Component {

  state = {
    searchName: ''
  }

  setSearchName = (searchName) => {
    this.setState({
      searchName
    })
  }

  render() {
    return (
        <div className="container">
          <Search setSearchName={this.setSearchName}></Search>
          <Main searchName={this.state.searchName}></Main>
        </div>
    );
  }
}

export default App;