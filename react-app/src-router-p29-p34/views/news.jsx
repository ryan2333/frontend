import React, {Component} from 'react';

class News extends Component {

  state = {
    news: [
        'news001',
        'news002',
        'news003'
    ]
  }

  render() {
    return (
        <div>
          <ul>
            {
              this.state.news.map((value,key)=><li key={key}>{value}</li>)
            }
          </ul>
        </div>
    );
  }
}

export default News;