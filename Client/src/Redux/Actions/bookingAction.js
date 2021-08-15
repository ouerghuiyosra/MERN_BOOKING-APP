import axios from "axios";
import { BOOKING_FAILED, CREATE_BOOKING, GET_USERBOOKING,VERIFIER_DATE } from "./ActioType";
import { setAlert } from "./alert";
//create booking
export const createBooking = (booking) => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
          }

        let result = await axios.post(`/api/booking/create`,booking,config);
        dispatch({ type: CREATE_BOOKING, payload: result.data.response }); 

    
        dispatch(setAlert({ msg:"Booking Add successfully", alertType: "success" }));


    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) {
          errors.forEach((error) => {
            dispatch(setAlert({ msg: error.msg, alertType: "danger" }));
          });
        }
        dispatch({ type: BOOKING_FAILED });
    }   
};

//get booking by user
export const getUserBooking = (user) => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
          }

        let result = await axios.get(`/api/booking/byMe/${user}`,config);
        dispatch({ type: GET_USERBOOKING, payload: result.data.response }); 
    } catch (error) {
        dispatch({type:BOOKING_FAILED,payload:error})    }
};
//get post by host
/*export const verifirDate = (startDate, endDate) => async (dispatch) => {
  try {
    

      let result = await axios.post(`/api/booking/verify`,startDate, endDate);
      dispatch({ type: VERIFIER_DATE,payload: result.data});
   
  } catch (err) {
    
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert({ msg: error.msg, alertType: "danger" }));
      });
    }
    dispatch({ type: BOOKING_FAILED });
} 
}*/


//cancel booking
export const CancelBooking = (id) => async (dispatch) => {
  try {


    const config = {
      headers: {
          authorization: localStorage.getItem("token"),
      },
    }
 let result =   await axios.delete(`/api/booking/cancel/${id}`,config);
    dispatch(getUserBooking);
    dispatch(setAlert({ msg:"booking canceled", alertType: "success" }));
    
  } catch (err) {
    dispatch({
      type: BOOKING_FAILED,
      payload: {  status: err.response.status },
    });
  }
};
