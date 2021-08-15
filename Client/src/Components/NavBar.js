//package
import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Dropdown} from "react-bootstrap"
import { Link } from 'react-router-dom';
//action
import { current, logout } from "../Redux/Actions/authAction";

const NavBar = () => {

    const authState = useSelector(state => state.authReducer);


    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(current());
        
    }, [])

const defaultImg = 'https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png'

    const guestLinks = (
        <Dropdown>
        <Dropdown.Toggle  className="rounded-pill   border ">
            <div>
                <span><i class="fas fa-bars fa-lg navIcon"></i></span>
                <img src="https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png" alt="profileImg" className="navImg"/>
            </div>
        </Dropdown.Toggle>
    
        <Dropdown.Menu>
            <Dropdown.Item ><Link to="/Register" > <i class="fas fa-user-plus"></i>  Sign Up </Link></Dropdown.Item>
            <Dropdown.Item ><Link to="/Login" > <i class="far fa-user"></i>  Log In</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item ><Link to="/" > <i class="fas fa-info"></i>  Help </Link></Dropdown.Item>
        </Dropdown.Menu>
</Dropdown>
    );
 
    

const authLinks = (
    <Dropdown>
<Dropdown.Toggle  className="rounded-pill   border ">
    <div>
        <span><i class="fas fa-bars fa-lg navIcon"></i></span>
        <img src={!!(authState && authState.user)
             ? authState.user.profilePhoto : defaultImg } alt="profileImg" className="navImg"/>
    </div>
</Dropdown.Toggle>

<Dropdown.Menu>
{authState.user && (authState.user.role === "user") ?
(
<Dropdown.Item ><Link to="/UserProfile" > <i class="fas fa-user"></i> View profile </Link></Dropdown.Item>

):(
<Dropdown.Item ><Link to="/HostProfile" > <i class="fas fa-user"></i> View profile  </Link></Dropdown.Item> 
) }
    <Dropdown.Item ><Link to="/Login" 
   
    onClick={() => dispatch(logout())}
>
    <i class="fas fa-power-off"></i> logout</Link></Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item ><Link to="/" > <i class="fas fa-info"></i>  Help </Link></Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
)  ;  






    return (
 <nav className="navbar fixed-top navbar-expand-lg navbar-dark ">
    <div className="container">
      <img src="https://ebenezersuites.com/wp-content/uploads/2016/06/airbnb-logo-266x300@2x.png" alt="logo" width="4%" height="1%" />       

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
                <div className="navLink">
                    <li className="nav-item active mr-5 ">
                        <Link to="/" className="nav-link" >Home</Link>
                    </li>
                    <li className="nav-item active ">
                         <Link className="nav-link">Become a host</Link>
                    </li>
                </div>
            </ul>


            <ul className="navbar-nav nav-flex-icons">
                <li className="nav-item">
                {!authState.load && (
                    <div>{authState.isAuth ? authLinks : guestLinks}</div>
                  )}
        
                 </li>
            </ul>
   
      </div>
    </div>
</nav>
    )
}

export default NavBar
