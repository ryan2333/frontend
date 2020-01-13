// 获取新的状态，重新渲染
import {createStore} from "redux";
import {counter} from "./reducers";

const store = createStore(counter) // 内部会第一次调用 reducer函数得到初始state


export default store;