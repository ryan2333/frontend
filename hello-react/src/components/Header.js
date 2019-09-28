import React from 'react';

// 函数式组件，适用于无状态组件
const Header = (props) => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>{props.hLink}</h1>
          </div>
        </div>
      </div>
    );
  }



// class Header extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-xs-1 col-xs-offset-11">
//             <h1>Header</h1>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Header;