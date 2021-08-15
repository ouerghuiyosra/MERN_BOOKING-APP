import axios from "axios";
import { ADD_COMMENT, ADD_POST, CLEAR_POSTS, FAILED, GET_ALL, GET_HOSTPOST,GET_POST,REMOVE_COMMENT,SELECT_LOCATION, SELECT_PERSONS, SELECT_TYPE} from "./ActioType";
import { setAlert } from "./alert";

//get post by host
export const getHostPost = (host) => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
          }

        let result = await axios.get(`/api/housing/byMe/${host}`,config);
        dispatch({ type: GET_HOSTPOST, payload: result.data.response }); 
    } catch (error) {
        dispatch({type:FAILED,payload:error})    }
};
//ADD post 
export const AddHousting = (newHousing,history) => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
          }

        let result = await axios.post(`/api/housing/Add`,newHousing,config);
        dispatch({ type: ADD_POST, payload: result.data.response }); 

        history.push('./HostProfile');
        dispatch(setAlert({ msg:"Post added", alertType: "success" }));


    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach((error) => {
            dispatch(setAlert({ msg: error.msg, alertType: "danger" }));
          });
        }
        dispatch({ type: FAILED });
    }   
};
//Delete Poste

export const DeletePost = (id) => async (dispatch) => {
  try {


    const config = {
      headers: {
          authorization: localStorage.getItem("token"),
      },
    }
 let result =   await axios.delete(`/api/housing/Delete/${id}`,config);
    dispatch(getHostPost);
    dispatch(setAlert({ msg:"Post  Deleted", alertType: "success" }));
    
  } catch (err) {
    dispatch({
      type: FAILED,
      payload: {  status: err.response.status },
    });
  }
};

  //Edit post 
  export const EditPost = (id,newdata) => async (dispatch) => {
    try {
      const config = {
        headers: {
            authorization: localStorage.getItem("token"),
        },
      }
      const result = await axios.put(`/api/housing/editpost/${id}`,newdata,config);
  
      dispatch(getHostPost());

      dispatch(setAlert({ msg:"Post updated", alertType: "success" }));

    } catch (err) {
      dispatch({
        type: FAILED,
        payload: {
          status: err.response.status,
        },
      });
    }
  };


// Filter profile
export const filterPost = ({ location,persons,type}) => async (
  dispatch
) => {
  try {
    const res = await axios.get(`/api/housing/all`);

    dispatch({
      type: GET_ALL,
      payload: res.data.response
    });


    if (location !== '') {
     await dispatch({
        type: SELECT_LOCATION,
        payload: location,
      });

    }

    if (persons !== '') {
      await dispatch({
         type: SELECT_PERSONS,
         payload: persons,
       });
 
     }
     if (type !== '') {
      await dispatch({
         type: SELECT_TYPE,
         payload: type,
       });
 
     }

  } catch (err) {
    dispatch({
      type: CLEAR_POSTS,
      payload: {
        status: err.response.status,
      },
    });
  }
};
// Get post by Id


export const getPost = (id) => async (dispatch) => {
  try {
      let result = await axios.get(`/api/housing/byId/${id}`);
      dispatch({ type:GET_POST,
         payload: result.data.response }); 
  } catch (error) {
      dispatch({type:FAILED,payload:error})    }
};
//add comment

export const addComment = ({ id, formData }) => async (dispatch) => {
  const config = {
    headers: {
        authorization: localStorage.getItem("token"),
    },
  }

  try {
    const res = await axios.post(
      `/api/housing/comment/${id}`,
      { text: formData },
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: { id: id, comments: res.data },
    });

    dispatch(setAlert({ msg:"Comment Added", alertType: "success" }));
  } catch (err) {
    dispatch({
      type: FAILED,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Delete Comment
export const deleteComment = ({ houstingId, commentId }) => async (dispatch) => {
  const config = {
    headers: {
        authorization: localStorage.getItem("token"),
    },
  }
  try {
    await axios.delete(`/api/housing/comment/${houstingId}/${commentId}`, config);
    dispatch({
      type: REMOVE_COMMENT,
      payload: {   houstingId, commentId },
    });
    dispatch(setAlert({ msg:"Comment  Deleted", alertType: "success" }));
  } catch (err) {
    dispatch({
      type: FAILED,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};