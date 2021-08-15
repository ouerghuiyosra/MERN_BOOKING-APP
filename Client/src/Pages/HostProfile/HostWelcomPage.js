//package
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//css
import "../HostProfile/HostWelcomPage.css"
//component
import Spinner from "../../../src/Components/Spinner"
import HostProfile from './HostProfile';
//action
import { getHostCurrentProfile } from '../../Redux/Actions/hostAction';





const HostWelcomPage = () => {

const currentUser = useSelector(state => state.authReducer.user)

const HostProfileState = useSelector(state => state.hostReducer)

const dispatch = useDispatch();
useEffect(() => {
  dispatch(getHostCurrentProfile());
  // load current host
}, []);


    return (
        <div>
        {HostProfileState.loading && !HostProfileState.profile ? (
            <Spinner />
          ) : !HostProfileState.profile ? (
            <div className="hostWelcom" >
            <div className=" d-flex justify-content-center align-items-center">
         
                 <div className=" marginForm">
                
                         <div className="container">
                         <div className="welcom">Welcome {currentUser.firstName}{currentUser.lastName}</div>
                         <div className="infotext text-uppercase">It's Nice To Meet You</div>
                         <div className="welcom"> You have not yet a profile, please add some information</div>
                         <div className="btprofile">
                         <Link  to='/CreateProfile' className='btcreate text-uppercase'>Tell Me More</Link>
                         </div>
                         </div>
                          </div>
         
                     
             </div>
         </div>
):(
    <div><HostProfile  /></div>
)

          }
        </div>


    )
}

export default HostWelcomPage
