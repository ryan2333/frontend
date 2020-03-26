/*
redux库的主模块
 */

// 根据指定reducer函数创建一个store对象并返回
export function createStore(reducer) {
  // 用来存储内部状态数据的变量, 初始值为调用reducer函数返回的结果(外部指定的默认值)
  let state = reducer(undefined, {type: '@@redux/INIT'})

  // 用来存储监听state更新回调函数的容器
  const listeners = []

  // 返回当前内部的state数据
  function getState() {
    return state
  }

  // 分发action触发reducer调用，从而产生新的state
  /*
  分发Action
  1. 触发reducer调用，得到新的state
  2. 保存新的state
  3. 调用所有已存在的监视回调函数
   */
  function dispatch(action) {
    const newState = reducer(state, action)
    state = newState
    listeners.forEach(listener => listener())
  }

  // 绑定内部state改变的监听回调
  // 可以给一个store绑定多个监听
  function subscribe(listener) {
    // 保存到缓存listeners的容器数组中
    listeners.push(listener)
  }

  // 返回store对象
  return {getState,dispatch, subscribe}
}

// 整合传入参数对象中的多个Reducer函数， 返回一个新的reducer
// 新的reducer管理的总状态：{reducer1: state1, reducer2: state2}
/*
reducers 的结构
{
  count: (state=2,action) => 3,
  user: (state={}, action) => {}
}

得到总状态的结构
{
  count: count(state.count, action),
  user: user(state.user, action)
}
 */
export function combineReducers(reducers) {
  // 返回一个新的总reducer函数
  // state: 总状态
  return (state={}, action) => {
    // 执行reducers中每个reducer函数，得到一个新的子状态，并添加到到总对象容器中
    // const totalState = {}
    // Object.keys(reducers).forEach(key=>{
    //   totalState[key] = reducers[key](state[key], action)
    // })

    const newState = Object.keys(reducers).reduce((preState, key) => {
      preState[key] = reducers[key](state[key], action)
      return preState
    },{})
    // 返回总状态
    return newState
  }
}