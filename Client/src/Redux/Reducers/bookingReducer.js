import { BOOKING_FAILED, CREATE_BOOKING, GET_USERBOOKING, VERIFIER_DATE } from "../Actions/ActioType";


const initialState ={
booking:[],
loading: true,

errors:[],


}


const bookingReducer = (state=initialState,Action) => {
switch (Action.type) {

    case CREATE_BOOKING:
        return {
            ...state,
            booking:Action.payload,
            loading: false,
          };

    case GET_USERBOOKING:
        return{
            ...state,booking:Action.payload, 
          loading:false  }
 
     case BOOKING_FAILED:
         return{
         ...state,
         error:Action.payload
        };


      
    default:
return state
}
}

export default bookingReducer