/*
容器组件
  通过connect包装UI组件产生的组件
  connect是一个高阶函数，connect返回的函数是一个高阶组件：接收一个ui组件，生成一个容器组件
  容器组件的责任：向UI组件传入特定的属性
 */


import React, {Component} from 'react';
import {connect} from 'react-redux'

import Counter from '../components/counter'
import {add, sub, addAsync} from '../redux/actions'

/*
用来将redex管理的state数据映射成UI组件的一般属性的函数
 */
// function mapStateToProps(state) {
//   return {
//     count: state
//   }
// }

/*
用来将包含dispatch代码的函数映射成UI组件的函数属性的函数
 */
// function mapDispatchToProps(dispatch) {
//   return {
//     add: (number) => dispatch(add(number)),
//     sub: (number) => dispatch(sub(number))
//   }
// }

// export default connect(
//     mapStateToProps,  // 指定一般属性 base版简化
//     mapDispatchToProps,  // 指定函数属性 base版简化
// )(Counter)

export default connect(
    state => ({count: state.count}),  // 指定一般属性 base版简化
    {add,sub, addAsync},  // 指定函数属性 base版简化
)(Counter)