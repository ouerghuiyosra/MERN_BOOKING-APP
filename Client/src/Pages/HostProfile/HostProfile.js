//package
import { Link} from 'react-router-dom';

import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
//css
import "../HostProfile/HostProfile.css"


//Compoment
import EditHostProfile from '../../Components/profile/edit/EditHostProfile';
import PostCard from '../../Components/Post/PostCard';
import Spinner from "../../Components/Spinner"
//action
import { getHostPost } from '../../Redux/Actions/HoustingAction';
import { getHostCurrentProfile } from '../../Redux/Actions/hostAction';
const HostProfile = () => {
    const HostProfileState = useSelector(state => state.hostReducer.profile)
    const currentUser = useSelector(state => state.authReducer.user)
    const posts = useSelector((state) => state.houstingReducer.posts);
    console.log(posts)
  //  const currentHost = useSelector(state => state.hostReducer.profile.user)
//console.log(currentHost)
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getHostCurrentProfile());
}, []);

useEffect(() => {
  if (HostProfileState) {
    dispatch(getHostPost(HostProfileState._id));
  }
}, [dispatch,HostProfileState]);
    return (
      <div>
      <div className="Page" >
      <div className=" d-flex justify-content-center align-items-center">
<div className="Form">

<div >
<div className="container bootstrap snippets bootdey">
 <div className="row">
   <div className="profile-nav col-md-3">
     <div className="panel">
       <div className="user-heading round">
         <a href="#">
           <img src={currentUser.profilePhoto} alt="myPhoto" />
         </a>
         <h1 className="email " >{currentUser.firstName } {currentUser.lastName}</h1>

         <h4 className="email">{currentUser.email}</h4>
         <h5 className="email">{HostProfileState.bio}</h5>
       </div>
       <ul className='nav nav-pills nav-stacked '>
         <li className='nav-item d-block text-white active w-100 ' >
           <Link className='nav-link' to='/HostProfile'>
             <i className='fa fa-user'></i> Profile
           </Link>
         </li>
      
         <li className='nav-item d-block  text-white w-100 '>
         <a className='nav-link'>
         <EditHostProfile currentUser={currentUser} HostProfileState={HostProfileState}/>
         </a>
         </li>

         <li className='nav-item d-block  text-white w-100 '>
         <Link className='nav-link' to='/AddPost'>
         <i class="fas fa-folder-plus"></i> Add Poste
           <span className='label label-warning r-activity'></span>
         </Link>
       </li>
         <li className='nav-item d-block  text-white w-100 '>
         <Link className='nav-link' to='/HostProfile'>
         <i class="fas fa-house-user"></i> My Poste
           <span className='label label-warning r-activity'></span>
         </Link>
         </li>
       </ul>
     </div>
   </div>
   <div className="profile-info col-md-9">

     <div className="panel">
       <div className="panel-body bio-graph-info">
       <div className="profileTitl">
       <h1 className="h1">My Profile</h1>
       </div>
         <div className="row ">
           <div className="bio-row mb-3">
           <span><span className="text-uppercase info ">First Name </span>: {currentUser.firstName}</span>
           </div>
           <div className="bio-row">
           <span><span className="text-uppercase info ">Last Name </span>: {currentUser.lastName}</span>
           </div>
           <div className="bio-row">
             <p><span className="text-uppercase info">Email</span>: {currentUser.email}</p>
           </div>
           <div className="bio-row">
             <p><span className="text-uppercase info">Phone</span>: {currentUser.phone}</p>
           </div>

        
             </div>

         <div>
         <div className="profileTitl">
        <h5> Address</h5>
         </div>
       
          <div className="bio-row ">
          <span><span className="text-uppercase info">Adresse </span>: {HostProfileState.city} {HostProfileState.street} {HostProfileState.zipcode} </span>
          </div>
         </div>
       </div>
     </div>
     <div className="post" >
     {(posts) ? (

      posts.map((posts,key) => 
         <PostCard posts={posts} key={posts._id}/>
    
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

export default HostProfile
