/*
包含所有action creator
 */

import {ADD, SUB} from "./action-typs";

export const addCreator = (data) => (
    {type: ADD, data: data}
)

export const subCreator = (data) => (
    {type: SUB, data: data}
)

