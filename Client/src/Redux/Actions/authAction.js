import axios from "axios";
import { REGISTER_USER,REGISTER_FAIL, LOGIN_USER, LOGIN_FAIL, LOAD_USER, CURRENT_USER,FAIL_USER,LOGOUT_USER } from '../Actions/ActioType'
import { setAlert } from "./alert";

export const register = (user) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("api/user/signup", user);
        //succees action
        dispatch({ type: REGISTER_USER, payload: result.data }); //{user,token}
              
        } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach((error) => {
            dispatch(setAlert({ msg: error.msg, alertType: "danger" }));
          });
        }
        dispatch({ type: REGISTER_FAIL });
    }
};

export const login = (user) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("api/auth/login", user);
        dispatch({ type: LOGIN_USER, payload: result.data }); //{msg,token}
     
    }catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach((error) => {
            dispatch(setAlert({ msg: error.msg, alertType: "danger" }));
          });
        }
        dispatch({ type: LOGIN_FAIL });
    }
};

export const current = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        let result = await axios.get("api/auth/current", config);
        dispatch({ type: CURRENT_USER, payload: result.data }); //{msg , user}
    } catch (error) {
        dispatch({ type: FAIL_USER, payload: error });
    }
};
// logout
export const logout = () => {
    return {
        type: LOGOUT_USER,
    };
};
