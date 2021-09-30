import {combineReducers} from "redux"
import {userReducer} from "./authReducer"

export const rootReducer=combineReducers({userReducer})