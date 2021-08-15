import axios from 'axios';
import { setAlert } from './alert';
import  { GET_PROFILE , PROFILE_ERROR }  from '../Actions/ActioType'
//GET current host profile
export const getHostCurrentProfile = () => async (dispatch) => {
    try {
      const config = {
        headers: {
            authorization: localStorage.getItem("token"),
        },
      }
      const res = await axios.get(`/api/host/me`,config);
  
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      });
    }
  };
  //create profile
  export const createHostProfile = (newHost,history) => async (dispatch) => {
    try {
      const config = {
        headers: {
            authorization: localStorage.getItem("token"),
        },
      }
      
      const result = await axios.post("/api/host/", newHost,config);
      dispatch(getHostCurrentProfile());
        history.push('./HostProfile');
    } catch (err) {
      const errors = err.response.data.errors;
  
  
      if (errors) {
        errors.forEach((error) => {
          dispatch(setAlert({ msg: error.msg, alertType: 'danger' }));
        });
      }
  
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      });
    }
  };
  //Edit host profile
export const EditHosProfile = (id,newdata) => async (dispatch) => {
  try {
    const config = {
      headers: {
          authorization: localStorage.getItem("token"),
      },
    }
    const res = await axios.put(`/api/host/editProfile/${id}`,newdata,config);

    dispatch(getHostCurrentProfile());
    dispatch(setAlert({ msg:"Profile Updated", alertType: "success" }));

  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};