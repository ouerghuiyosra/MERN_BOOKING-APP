import { combineReducers } from "redux";
import authReducer from './authReducer'
import alertReducer from './alertReducer'
import hostReducer from './hostReducer'
import houstingReducer  from "./HoustingReducer"
import bookingReducer from "./bookingReducer"

const rootReducer = combineReducers({authReducer,alertReducer,hostReducer,houstingReducer,bookingReducer});

export default rootReducer;