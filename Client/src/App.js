//package
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
//css
import './index.css';
//Page
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"
import UserProfile from "./Pages/userprofile/UserProfile"
import HostProfile from "./Pages/HostProfile/HostWelcomPage"
import AddPost from "./Pages/Post/AddPost";
import VisitedPost from "./Pages/Post/VisitedPost";
import Booking from "./Pages/Booking/Booking";

//Component
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import Error from "./Pages/Error/Errors"
import CreateProfile from "./Components/profile/create/CreateProfile";
import Alert from "./Components/alert";

//Route
import PrivateRoute from "./router/privateRoute";
//Actions
import { current } from "./Redux/Actions/authAction";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(current());
    // load current user
}, []);
const alerts = useSelector((state) => state.alertReducer);

const [search, setSearch] = useState(false);
const [location, setlocation] = useState("");
const [persons, setpersons] = useState("")
const [type, settype] = useState("")

  return (
  <div className="App">

     <NavBar/>
     {alerts !== null && alerts.length > 0 && (
      <div className='alertsContainer fixed-top'>
        <Alert className='alerts' alerts={alerts} />
      </div>
    )}
          <Switch>
              <Route exact path='/'>
                 <Home 
                 search={search}
                 setSearch={setSearch}
                 location={location}
                 setlocation={setlocation}
                 persons={persons}
                 setpersons={setpersons}
                 type={type}
                 settype={settype}
                 

                 />
              </Route>
              <Route path='/Login' component={Login}/>
              <Route path='/Register' component={Register}/>
              <PrivateRoute exact path='/UserProfile' component={UserProfile}/>
              <PrivateRoute exact path='/HostProfile' component={HostProfile}/>
              <PrivateRoute exact path='/CreateProfile' component={CreateProfile}/>
              <PrivateRoute exact path='/AddPost' component={AddPost}/>
              <PrivateRoute exact path='/Booking' component={Booking} />
              <Route
              path='/visitedPost/:id'
              render={(props) => (
                <VisitedPost id={props.match.params.id} />
              )}
            />    
            <Route path="/*" component={Error}/>
          </Switch>
      
<Footer/>
  </div>
  );
}

export default App;
