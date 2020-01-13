import React, {Component} from 'react';
import PubSub from 'pubsub-js'

class Search extends Component {

  handleSearch=()=> {
    const searchName = this.input.value.trim()
    console.log(searchName)

    // 发布消息
    PubSub.publish('search', searchName)

  }

  render() {

    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="Please Enter User to search"
                 ref={input=>this.input=input}/>
          <button onClick={this.handleSearch}>search</button>
        </div>
      </section>
    );
  }
}

export default Search;