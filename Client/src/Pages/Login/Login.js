
//package
import { Link, Redirect } from 'react-router-dom';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//css
import "../Login/login.css"
//action
import { login } from '../../Redux/Actions/authAction';

const Login = () => {
    const [user, setuser] = useState({email:'',password:''})

    const isAuth = useSelector(state => state.authReducer.isAuth)

    const role = useSelector((state) => {
        if (state.authReducer.isAuth) {
          return state.authReducer.user.role;
        }
        return '';
      });
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(user));
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
     <div className="loginPage" >
        <div className=" d-flex justify-content-center align-items-center">
             <div className=" marginForm">
                 <div className="container">
                     <div className="d-flex justify-content-center h-100">
                        <div className="card">
                            <div className="card-header">
                                <h3>Sign In</h3>
                      
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user" /></span>
                                        </div>
                                        <input type="email" className="form-control" placeholder="username"  name="email"   onChange={handleChange} />
                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key" /></span>
                                        </div>
                                        <input type="password" className="form-control" placeholder="password"  name="password" onChange={handleChange} />
                                    </div>
                                    <div className="row align-items-center remember">
                                        <input type="checkbox" />Remember Me
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" defaultValue="Login" className=" float-right loginbtn" onClick={e=>handleLogin(e)} />
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                    <div className="d-flex justify-content-center links">
                                        Don't have an account?<Link to="/Register" className="signupLink">Sign Up</Link>
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

export default Login
