import  { GET_PROFILE , PROFILE_ERROR }  from '../Actions/ActioType'
const initialState ={
  profile: [],
  loading: true,
  error: {}
}
const hostReducer = (state = initialState,{type,payload}/*distc lil action*/) => {
    switch (type) {

      case GET_PROFILE:
        return {
          ...state,
          profile: payload,
          loading: false,
        };
        case PROFILE_ERROR:
          return {
            ...state,
            error: payload,
            loading: false,
            profile: null,
          };

          default:
            return state;
    }
 
}

export default hostReducer;