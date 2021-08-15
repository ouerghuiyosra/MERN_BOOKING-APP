//package
import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
//css
import "../create/create.css"
//action
import { createHostProfile } from '../../../Redux/Actions/hostAction'
const CreateProfile = ({history}) => {
//Select the to verifier if it is host
const useRole = useSelector(state => state.authReducer.user)
const dispatch = useDispatch();

const [city, setCity] = useState('');
const [street, setStreet] = useState('');
const [zipcode, setZipcode] = useState('');
const [bio, setBio] = useState('');


    return (
     <div className="createProfile" >
        <div className=" d-flex justify-content-center align-items-center">
             <div className="createForm">
             <div className="container">
                 <div className="card-body bg-light">
                   <div className="container">
                     <form id="contact-form" role="form">
                       <div className="controls">
                         <div className="row">
                           <div className="col-md-6">
                             <div className="form-group">
                              <label htmlFor="form_name">City *</label>
                              <input id="form_name" type="text" name='city'
                              value={city}
                              onChange={(e) => setCity(e.target.value)} className="form-control" placeholder="Please enter your street *" required="required" data-error="Firstname is required." /> </div>
                           </div>
                           <div className="col-md-6">
                             <div className="form-group">
                              <label htmlFor="form_name">City*</label>
                              <input id="form_name" type="text" name="street"      
                              value={street}
                              onChange={(e) => setStreet(e.target.value)} className="form-control" placeholder="Please enter your city *" required="required" data-error="Firstname is required." /> </div>
                           </div>
                           <div className="col-md-6">
                             <div className="form-group">
                              <label htmlFor="form_name">Zipcode *</label>
                              <input id="form_name" type="text" name="zipcode"   value={zipcode}
                              onChange={(e) => setZipcode(e.target.value)} className="form-control" placeholder="Please enter your zibcode*" required="required" data-error="Firstname is required." /> </div>
                           </div>
                   
                         </div>
                
                         <div className="row">
                           <div className="col-md-12">
                             <div className="form-group"> <label htmlFor="form_message">Bio</label> 
                             <textarea id="form_message" name="bio"     value={bio}
                             onChange={(e) => setBio(e.target.value)} className="form-control"   placeholder='A short bio of yourself' rows={4} required="required" data-error="Please, leave us a message." defaultValue={""} /> </div>
                           </div>
                           <div className="col-md-12"> <input type="submit"   onClick={(e) => {

                            e.preventDefault()
                            dispatch(
                              createHostProfile(
                                { 
                                  user:useRole,
                                  city, street, zipcode, bio },history
                            
                              )
                            );
        
                       ;
                          }} className="btn btn-send pt-2 btn-block " defaultValue="Send Message" /> </div>
                         </div>
                       </div>
                     </form>
                   </div>
                 </div>
               </div>

             </div>
        </div>
     </div>     
             
             
             )
}

export default CreateProfile
