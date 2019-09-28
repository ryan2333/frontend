import React from 'react';
import Record from './Record' // 导入组件

class Records extends React.Component {
  constructor() {
    super();
    this.state = {
      records: [
        {"id": 1, "date": "2019-09-25", "title": "发工资", "amount": 100},
        {"id": 2, "date": "2019-09-27", "title": "看视频", "amount": 200 }
      ]
    }
  }
  
  render() {
    return (
      <div>
        <h2>Records</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.state.records.map((record) => <Record record={record}></Record>)}{/*// 挂载组件 */}

          </tbody>
        </table>
      </div>
    );
  }
 
}

export default Records;
