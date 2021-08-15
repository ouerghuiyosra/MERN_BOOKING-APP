//package
import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
//css
import "../Booking/Booking.css"
//action
import { getPost } from '../../Redux/Actions/HoustingAction';
import { createBooking } from '../../Redux/Actions/bookingAction';





const Booking = (props) => {

    //used to get data from parames
  const query = new URLSearchParams(props.location.search);
  const dayes = query.get('dayes')
  const totalPrice = query.get('totalPrice')
  const persons = query.get('persons')
  const startDate = query.get('startDate')
  const endDate = query.get('endDate')
  const id =query.get('id')

  const dispatch = useDispatch();

const User = useSelector(state => state.authReducer.user)
const userId = User._id
useEffect(() => {
    dispatch(getPost(id));
}, []);
const housting = useSelector((state) => state.houstingReducer.post);


//fn to confirm Booking
const handelConfirm = (e) => {
    e.preventDefault()
    dispatch(createBooking({
        user:userId,
        housting:id,
        endDate,startDate,dayes,persons,totalPrice
    
    }
    
    ))
    
}

    return (
      <div className="BookingPage">
      <div className=" BookingForm">
      <div className="container">
       <div className="Booking">
           <div className='userInfo'>
                <h3 className="formtitle">Booking Submission</h3>
                <div className="Infr">
                    <div className="frgroup">
                    <div className="card-body ">
                    <form >
                      <h5 className="heading-small text-muted mb-4">Your  information</h5>
                      <div className="pl-lg-4">
                      <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" htmlFor="input-first-name">First name</label>
                          <input type="text" id="input-first-name" className="form-control form-control-alternative inputInfo" value={User.firstName} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label" htmlFor="input-last-name">Last name</label>
                          <input type="text" id="input-last-name" className="form-control form-control-alternative inputInfo" value={User.lastName}  />
                        </div>
                      </div>
                    </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group focused">
                              <label className="form-control-label" htmlFor="input-username">Phone</label>
                              <input type="text" id="input-username" className="form-control form-control-alternative inputInfo"  value={User.phone}  />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-control-label" htmlFor="input-email">Email address</label>
                              <input type="email" id="input-email" className="form-control form-control-alternative inputInfo" value={User.email} />
                            </div>
                          </div>
                        </div>
                   
                      </div>
                      <hr className="my-4" />
                      {/* Address */}
                      <h5 className="heading-small text-muted mb-4">Contact information</h5>
                      <div className="pl-lg-4">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group focused">
                              <label className="form-control-label" htmlFor="input-address">Address</label>
                              <input id="input-address" className="form-control form-control-alternative inputInfo" type="text"  value={User.adresse}/>
                            </div>
                          </div>
                        </div>
                    
                      </div>

                   
                    </form>
                  </div>
                  <span
                  className='btconfirm d-flex mt-5' onClick={handelConfirm}
                  type='button' >
                Submit
                </span>
                    </div>
                </div>
           </div>
           <div >
               <h4 className="booking-review-title">Your Booking</h4>
               <div  className="bookingInfo">
                 <div className="houtingInfo">
                    <h5>{housting.type}</h5>
                    <div className="mt-1 mb-3"><span><i class="fas fa-map-marker-alt mr-2"></i></span><span>{housting.location}<br /></span></div>
                 </div>
                 <div className="reservationInfo">
                 <ul className="review-list">
                 <li>
                 <div className="label">Start Date:</div>
                  <div className="val">
                 {startDate}
                 </div></li> 
                 
                 <li>
                 <div className="label">End Date:</div> 
                 <div className="val">
                 {endDate}
               </div></li> <li><div className="label">Dayes:</div> <div className="val">
                 {dayes}
               </div></li> <li><div className="label">Persons:</div> <div className="val">
                 {persons}
               </div></li></ul>
                 </div>



              <div class="review-section total-review">
              <ul class="review-list">
              <li class="final-total">
              <div class="label">Total:</div>
               <div class="valPrice">{totalPrice}DT</div></li></ul></div>
               </div>
           </div>
       </div>
       </div>
       </div>
      </div>
      
      
      
    )
}

export default Booking
