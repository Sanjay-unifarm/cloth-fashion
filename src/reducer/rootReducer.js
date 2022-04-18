import { combineReducers } from "redux"
import {userReducer} from './user-reducer/userReducer'
export const RootReducer = combineReducers(
    {
        userReducer,
    }
);