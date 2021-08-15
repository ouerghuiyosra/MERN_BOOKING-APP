
//package
import { Link, Redirect } from 'react-router-dom';
import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
//css
import "../Register/Register.css"
//action
import { register } from '../../Redux/Actions/authAction';


const Register = () => {

//select the isAuth state to Redirect user
  const isAuth = useSelector(state => state.authReducer.isAuth)

  const role = useSelector((state) => {
      if (state.authReducer.isAuth) {
        return state.authReducer.user.role;
      }
      return '';
    });

  // initialState 
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [profilePhoto, setprofilePhoto] = useState('https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png')
  const [Role, setRole] = useState('user')
  const [adresse, setadresse] = useState('')
  const [phone, setphone] = useState('')

  const dispatch = useDispatch();

  //function to register  user using formadata //since all input haven't the same type we used formadata
  //formadata :accept a FormData object as a body. It’s encoded and sent out with Content-Type: multipart/form-data.
  const handleRegister = (e) => {
          e.preventDefault()
          const formData = new FormData();
          formData.append('email',email);
          formData.append('password',password);
          formData.append('firstName',firstName);
          formData.append('lastName',lastName);
          formData.append('profilePhoto',profilePhoto);
          formData.append('role',Role);
          formData.append('adresse',adresse);
          formData.append('phone',phone);
        dispatch(register(formData));
   };
// Redirect if Logged in
     if (isAuth) {
      if (role === 'host') {
        return <Redirect to='/HostProfile' />;
      }
      if (role === 'user') {
        return <Redirect to='/UserProfile' />;
      }
    }


    return (
<div className="registerPage" >
    <div className=" d-flex justify-content-center align-items-center">
         <div className=" registerForm">
         <div className="container register">
         <div className="row">
           <div className="col-md-3 register-left">
             <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
             <h3>Welcome</h3>
             <p>Hundreds of awesome places in reach of few clicks.</p>
             <Link to="/Login" className="btlogin">Login</Link><br />
           </div>
           <div className="col-md-9 register-right">
             <div className="tab-content" >
               <div className="tab-pane fade show active" >
                 <h3 className="register-heading">Apply Now</h3>
                 <div className="row register-form">
                   <div className="col-md-6">
                   <div className="form-group">
                       <input type="email" className="form-control registerinput" placeholder="Your Email *"  name="email" required  onChange={(e) => setemail(e.target.value)}  />
                     </div>
                   
                     <div className="form-group">
                       <input type="password" className="form-control registerinput" placeholder="Password *"  name="password" required  onChange={(e) => setpassword(e.target.value)} />
                     </div>
                     <div className="form-group">
                     <input type="text" className="form-control registerinput" placeholder="First Name *" name="firstName" required  onChange={(e) => setfirstName(e.target.value)} />
                   </div>
                   <div className="form-group">
                     <input type="text" className="form-control registerinput" placeholder="Last Name *" name="lastName" required  onChange={(e) => setlastName(e.target.value)} />
                   </div>
              
                   </div>
                   <div className="col-md-6">
                 
                     
                     <div className="form-group registerinput">
                       <input type="file"  className="form-control" placeholder="Profile Image" name="profilePhoto"     onChange={(e) => setprofilePhoto( e.target.files[0])} />

                       </div>


                     <div className="form-group">
                       <select className="form-control registerinput"  name="role"  onChange={(e) => setRole(e.target.value)} >
                       <option value='choose'> Select your role</option>
                       <option value='user'>user</option>
                       <option value='host'>host</option>
                       </select>
                     </div>
                     <div className="form-group">
                       <input type="text" className="form-control registerinput" placeholder="Enter Your Adresse *" name="adresse"   onChange={(e) => setadresse(e.target.value)} />
                     </div>
                     <div className="form-group">
                     <input type="text" className="form-control registerinput" placeholder="Enter Your phone number *" name="phone"   onChange={(e) => setphone(e.target.value)} />
                   </div>
                     <input type="submit" className="btnRegister"  onClick={e=>handleRegister(e)} defaultValue="Register" />
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
         
        </div>
     </div>
</div>
    )
}

export default Register
