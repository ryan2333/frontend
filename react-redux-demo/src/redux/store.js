import {createStore} from "redux";

import {counterReducer} from "./reducers";


/*
如果要改变一个Reducer的值，需要使用dispatch分发一个action
 */

const store = createStore(counterReducer)

export default store