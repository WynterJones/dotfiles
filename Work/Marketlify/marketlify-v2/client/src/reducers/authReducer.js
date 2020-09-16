import { 
    GET_CURRENT_USER,
    LOGOUT_USER
} from '../actions/types';

export default function( state = null, action ) {

    switch ( action.type ) {
        case GET_CURRENT_USER:
            return action.payload.user || null;
        case LOGOUT_USER:
            return action.payload || null;
        default:
            return state;
    }
}
