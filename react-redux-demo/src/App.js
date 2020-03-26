import React from 'react';

// import ComA from './pages/comA'
// // // import ComB from './pages/comB'
import Boy from './pages/boy'
import Girl from './pages/girl'
import './app.less'


import store from "./redux/store";
import {Provider} from 'react-redux'

function App() {
  return (
      <Provider store={store}>
        <div className="app">
          <div className="boy"><Boy /></div>
          <div className="girl"><Girl /></div>

        </div>
      </Provider>
  );
}

export default App;
