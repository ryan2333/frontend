import React, {Component} from 'react';

import boy from '../../assets/images/pp.jpg'
class Index extends Component {
  render() {
    return (
        <div className="boy">
          <img src={boy} alt="img" style={{width: '200px', height: '300px'}}/>
          <button>发射爱心</button>
        </div>
    );
  }
}

export default Index;