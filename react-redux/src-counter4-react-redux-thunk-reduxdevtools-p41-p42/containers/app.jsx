// import React from 'react';
import {connect} from "react-redux";

import {addCreator, subCreator, addAsyncCreator} from "../redux/actions";
import Counter from '../components/counter'

export default connect(
    // 跟counter声明的属性名一致
    state => ({count: state}),

    // Add，Sub与app声明的属性名一致 addCreator，subCreator 跟action方法一致
    // {Add: addCreator, Sub: subCreator}
    {addCreator, subCreator, addAsyncCreator}
)(Counter);
