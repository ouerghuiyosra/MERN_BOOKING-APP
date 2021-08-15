import axios from "axios";
import { FAIL_USER} from '../Actions/ActioType'
import { setAlert } from "./alert";
import { current } from "./authAction";
export const updateUser=(id,data)=>
    async(dispatch)=>{
        try{
            const config = {
                headers: {
                    authorization: localStorage.getItem("token"),
                },
            };
            const result=await axios.put(`api/user/edit/${id}`,data,config)
            dispatch(current()); 
            dispatch(setAlert({ msg:"Profile Updated", alertType: "success" }));

        }

    catch(error){
        dispatch({ type: FAIL_USER, payload: error });    }
}