import Axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const userLogin  =  (userid, password) =>async dispatch=>{   
     try {
        dispatch({ type: LOGIN_REQUEST });
        const url='https://lcahgoa.in/index.php/app/userlogin?username='+userid+'&password='+password;
        const data = await Axios({
        method: 'GET',
        url,
        }) ;
        dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
        }); 

        }catch (error) {
        dispatch({
        type: LOGIN_FAILURE,
        payload: error,
        });
        }
}