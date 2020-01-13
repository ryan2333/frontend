import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Search extends Component {

  static propTypes = {
    setSearchName: PropTypes.func.isRequired
  }

  handleSearch=()=> {
    const searchName = this.input.value
    this.props.setSearchName(searchName)
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