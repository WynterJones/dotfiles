// ----
// Dependencies
import axios from 'axios';
import {
    GET_CURRENT_USER, 
    LOGOUT_USER
} from './types';


// ----
// Utility Functions
import history from '../utils/history';


// ----
// Actions


// Set Title
export const setTitle = ( title ) => async () => {
    document.title = `${ title} | Marketlify`;
}


// Register new user account
export const registerUser = ( values ) => async () => {
    const res = await axios.post( '/auth/register', values );
    return res.data;
}


// Login User
export const loginUser = ( values ) => async () => {
    const res = await axios.post( '/auth/login', values );
    return res.data;
}


// Logout User
export const logoutUser = () => async ( dispatch ) => {
    const res = await axios.get( '/auth/logout' );
    dispatch({ type: LOGOUT_USER, payload: null });
    history.push( '/' );
    return res.data;
}


// Get currently logged in user
export const getCurrentUser = () => async ( dispatch ) => {
    const res = await axios.get( '/auth/current' );
    dispatch({ type: GET_CURRENT_USER, payload: res.data });
}