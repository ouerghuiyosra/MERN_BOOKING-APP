//package
import { Link} from 'react-router-dom';
//package

import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
//css
import "../userprofile/UserProfile.css"

//compoment
import EditUserProfile from '../../Components/profile/edit/EditUserProfile';
import Spinner from "../../../src/Components/Spinner"

//action

import { getUserBooking } from '../../Redux/Actions/bookingAction';
import BookingCard from '../Booking/BookingCard';
const UserProfile = () => {

  const currentUser = useSelector(state => state.authReducer.user)
const booking = useSelector(state => state.bookingReducer.booking)

const dispatch = useDispatch();

useEffect(() => {
  if (currentUser) {
    dispatch(getUserBooking(currentUser._id));
  }
}, [dispatch,currentUser]);


    return (
        <div>
        <div className="Page" >
        <div className=" d-flex justify-content-center align-items-center">
<div className="Form">

 <div >
 <div className="container bootstrap snippets bootdey">
   <div className="row">
     <div className="profilenav col-md-3">
       <div className="panel">
         <div className="userheading round">
           <a href="#">
             <img src={currentUser.profilePhoto} alt="myPhoto" />
           </a>
           <h1 className="email" >{currentUser.firstName } {currentUser.lastName}</h1>
           <h4 className="email">{currentUser.email}</h4>
         </div>
         <ul className='nav nav-pills nav-stacked '>
           <li className='nav-item d-block text-white active w-100 ' >
             <Link className='nav-link' to='/UserProfile'>
               <i className='fa fa-user'></i> Profile
             </Link>
           </li>
        
           <li className='nav-item d-block  text-white w-100 '>
           <a className='nav-link'>
           <EditUserProfile currentUser={currentUser}/>
         </a>
           </li>

           <li className='nav-item d-block  text-white w-100 '>
             <Link className='nav-link' to='/delete-profile'>
             <i class="fas fa-house-user"></i> Reservation
               <span className='label label-warning r-activity'></span>
             </Link>
           </li>
         </ul>
       </div>
     </div>
     <div className="profile-info col-md-9">

       <div className="panel">
         <div className="panel-body bio-graph-info">
         <div className="profileTitle">
         <h1 className="h1">My Profile</h1>
         </div>
           <div className="row">
             <div className="bio-row">
               <p><span className="text-uppercase info">First Name </span>: {currentUser.firstName}</p>
             </div>
             <div className="bio-row">
               <p><span className="text-uppercase info ">Last Name </span>: {currentUser.lastName}</p>
             </div>
             <div className="bio-row">
               <p><span className="text-uppercase info">Email</span>: {currentUser.email}</p>
             </div>
             <div className="bio-row">
               <p><span className="text-uppercase info">Phone</span>: {currentUser.phone}</p>
             </div>

          
               </div>

           <div>
           <div className="profileTitle">
          <h5> Address</h5>
           </div>
         
            <div className="bio-row ">
              <p><span className="text-uppercase info adress">Adresse </span>: {currentUser.adresse}</p>
            </div>
           </div>
         </div>
       </div>
       <div className="post" >
       {(booking) ? (

         booking.map((booking,key) => 
            <BookingCard booking={booking} key={booking._id}/>
       
         )
       ) : (
         <Spinner/>
       )}                    </div>
     </div>
   </div>
 </div>
</div>




          </div>
     </div>

              </div>
              <div className="infour">
              </div>




              
              </div>
    )
}

export default UserProfile
