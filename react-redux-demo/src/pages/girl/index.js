import React, {Component} from 'react';
import girl from '../../assets/images/girl.jpg'

class Index extends Component {
  render() {
    return (
        <div className="girl">
          <img src={girl} alt="img" style={{width: '200px', height: '300px'}}/>
        </div>
    );
  }
}

export default Index;