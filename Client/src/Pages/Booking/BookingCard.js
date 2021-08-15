import React,{useEffect,useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import {Modal,Form,Button} from "react-bootstrap"

import DayJS from 'react-dayjs';

//css
import "../Booking/BookingCard.css"
//action
import { CancelBooking } from '../../Redux/Actions/bookingAction';
import { getPost } from '../../Redux/Actions/HoustingAction';
const BookingCard = ({booking:{persons,startDate,endDate,dayes,date,totalPrice,_id,housting}}) => {

  const dispatch = useDispatch();

  //fn cancel Booking 
  const handelCancellation = () =>{
      dispatch(CancelBooking(_id))
      handleclose()
  }
  useEffect(() => {
    dispatch(getPost(housting));
  }, []);
  const Housting = useSelector((state) => state.houstingReducer.post);
  // delete modal
const [showConfirmation, setShowConfirmation] = useState(false);

const handleclose = () => setShowConfirmation(false);
const handleShowConfirmation = () => setShowConfirmation(true);

    return (
        <div className="cardbooking">
        <div className="servicewishlist " >
        <div>
      
        <span type="button" onClick={handleShowConfirmation}><i class="far fa-trash-alt"></i></span>
  
  
        <Modal show={showConfirmation} onHide={handleclose} >
           <div className="confirm">
           <Modal.Body  >
           <div >
           <div className="modaldialog modalconfirm">
             <div className="modalcontent">
               <div className="modalheader">
                 <div className="icon-box">
                 <i class="fas fa-times x"></i>
                 </div>				
                 <h4 className="modaltitle">Are you sure?</h4>	
                
               </div>
               <div className="modalbody">
                 <p>Do you really want to cancel ? This process cannot be undone.</p>
               </div>
               <div className="modalfooter">
               <span type="button" className="btcancel" onClick={handleclose}>Cancel</span>
               <span type="button" className="btsave" onClick={ handelCancellation} >Delete</span>
             </div>
   
   
             </div>
           </div>
         </div>
   
   
   
   
           </Modal.Body>
         
           </div>
        
        </Modal>
        </div>
        </div>
        <div className="d-flex align-items-center ">
          <div className="ml-3 w-100">
         
           <div>
     
           <div  className="bkInfo" >
            <div><h5 className="text-uppercase mr-2  "> Start Date: </h5></div>
            <div><DayJS format="MM-DD-YYYY">{startDate}</DayJS></div>
           </div>
           <div  className="bkInfo" >
           <h5 className="text-uppercase mr-2 "> End Date: </h5>
           <DayJS format="MM-DD-YYYY">{endDate}</DayJS>
           </div>
           <div  className="bkInfo"  >
           <h5 className="text-uppercase mr-2 "> Booked : </h5>
           <DayJS format="MM-DD-YYYY">{date}</DayJS>
           </div>
            </div>
                 <div className="bookingIfo">
                 <div  className="HoustingDate">
                 <div>
                 <div> <p className="text-uppercase mr-2 mb-2 "> persons</p>
                 </div>
                 <div><span > <i class="fas fa-users mr-2"></i> {persons}</span></div>
                 </div>
                 </div>
                 <div  className="HoustingDate">
                    <div>
                    <div> <p className="text-uppercase mr-2 "> Price: </p></div>
                     <div><span > {totalPrice}  DT</span></div>
                    </div>
                 </div>
           
                  <div  className="HoustingDate">
                    <div>
                    <div><p className="text-uppercase mr-2 ">Dayes:  </p></div>
                    <div><span > {dayes}</span></div>
                    </div>
                  </div>
                    </div>

         

           

          </div>
        </div>
      </div>
    )
}

export default BookingCard
