import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST  } from '../../Actions/Auth';

 initialstate = {
    isFetching: false,
    response: null,
}
export default (state= initialstate, action) =>{
    switch (action.type) {
        case LOGIN_REQUEST:
            return{...state, isFetching: true}
        case LOGIN_SUCCESS:
            return{...state, isFetching: false, response: action.payload}
        case LOGIN_FAILURE:
            return{...state, isFetching: false, response: action.payload}    
    
        default:
        return state;
    }
}