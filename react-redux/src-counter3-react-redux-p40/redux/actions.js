/*
包含所有action creator
 */

import {ADD, SUB} from "./action-typs";

// 用来返回action对象{type: actionType, data: state}

export const addCreator = (data) => (
    {type: ADD, data: data}
)

export const subCreator = (data) => (
    {type: SUB, data: data}
)

