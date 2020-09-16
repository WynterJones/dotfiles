// ----
// Dependencies
import { combineReducers } from 'redux';


// ----
// Reducers
import authReducer from './authReducer';


// ----
// Combining Reducers
export default combineReducers({
    auth: authReducer
});
