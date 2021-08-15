import {GET_ALL,FAILED,GET_HOSTPOST,ADD_POST,SELECT_LOCATION, CLEAR_POSTS, GET_POST, ADD_COMMENT, REMOVE_COMMENT, SELECT_PERSONS, SELECT_TYPE} from '../Actions/ActioType'
const initialState ={
posts:[],
post:[],
loading: true,
error: {},

}

const houstingReducer = (state=initialState,Action) => {
switch (Action.type) {

    case ADD_POST:
        return {
            ...state,
            posts:Action.payload,
            loading: false,
          };
   
    case GET_HOSTPOST:
    case GET_ALL:
        return{
            ...state,posts:Action.payload, 
          loading:false  }
     case GET_POST:
        return{
           ...state,
           post:Action.payload, 
          loading:false  }
     case FAILED:
         return{
         ...state,
         error:Action.payload
        };
         case SELECT_LOCATION:
            return {
              ...state,
              posts: state.posts.filter(
                (posts) => posts.location === Action.payload
              ),
            };
            case SELECT_PERSONS:
              return {
                ...state,
                posts: state.posts.filter(
                  (posts) => posts.persons === Action.payload
                ),
              };
              case SELECT_TYPE:
                return {
                  ...state,
                  posts: state.posts.filter(
                    (posts) => posts.type === Action.payload
                  ),
                };
            case CLEAR_POSTS:
              return{
              ...state,
              error:Action.payload
             };
             case ADD_COMMENT:
              return {
                ...state,
                posts: state.posts.map((post) =>
                  post._id === Action.payload.id
                    ? { ...post, comments: Action.payload.comments }
                    : post
                ),
                loading: false,
              };
            case REMOVE_COMMENT:
              return {
                ...state,
                posts: state.posts.map((post) =>
                  post._id === Action.payload.houstingtId
                    ? {
                        ...post,
                        comments: post.comments.filter(
                          (comment) => comment._id !== Action.payload.commentId
                        ),
                      }
                    : post
                ),
        
                loading: false,
              };
      
    default:
return state
}
}

export default houstingReducer
