import { REGISTER_USER,REGISTER_FAIL, LOGIN_USER, LOGIN_FAIL, LOAD_USER, CURRENT_USER,FAIL_USER,LOGOUT_USER }  from '../Actions/ActioType'
const initialState ={
    user:[],
    isAuth:false,
    load:false,
}
const authReducer = (state = initialState,{type,payload}/*distc lil action*/) => {
    switch (type) {
        case LOAD_USER:
            return { ...state, load: true };
        //   payload:{token  , user }
        case REGISTER_USER:
            localStorage.setItem("token", payload.token);
            return { ...state, user: payload.user, load: false, isAuth: true };
        //   payload: {token  , user}
        case LOGIN_USER:
            localStorage.setItem("token", payload.token);

            return { ...state, user: payload.user, load: false, isAuth: true };
        case CURRENT_USER:
            return { ...state, user: payload.user, isAuth: true };
         case REGISTER_FAIL:
         case LOGIN_FAIL:    
         case FAIL_USER:            
         case LOGOUT_USER:
            localStorage.removeItem("token");
            return { ...state, user: {}, isAuth: false };

          default:
            return state;
    }
 
}

export default authReducer;