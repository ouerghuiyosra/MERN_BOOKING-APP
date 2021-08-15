import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
//action
import { getPost } from '../../Redux/Actions/HoustingAction';
//css
import "../Post/VisitedPost.css"
//Commpoment
import  Spinner from "../../Components/Spinner"
import Comment from '../../Components/Comment/Comment';
const VisitedPost = ({id}) => {
const housting = useSelector((state) => state.houstingReducer.post);

//handel dayes and price 
const [startDate , setstartDate] = useState(new Date ());
const [endDate, setendDate] = useState(new Date());
const [dayes, setdayes] = useState(0);
const [persons, setpersons] = useState(0);
const [totalPrice, settotalPrice] = useState(0);


// function to calculate the total Dayes Bookings
const  getNumberOfDays = () =>{
    var start = startDate; // yyyy-mm-dd format
    var end = endDate

    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);
setdayes(diffInDays)
}
const houstingPrice = housting.price
const price = (houstingPrice*dayes)* persons

const calculatePrice = () =>{  
    settotalPrice(price)
}

const totalPriceAndDayes = (e) =>{
    e.preventDefault()
    getNumberOfDays()
    calculatePrice()
}
//handel comment 

const dispatch = useDispatch();

let history = useHistory();
//handel booking
const User = useSelector(state => state.authReducer.isAuth)
//fn to add data in props
const handelBooking = () =>{
    if (User){
            
        history.push(`/Booking/?dayes=${dayes}&totalPrice=${totalPrice}&persons=${persons}&startDate=${startDate}&endDate=${endDate}&id=${id}`);

   }else{
    history.push('/Login')
   }
}

const handelBtnConfirme = () =>{
    if(dayes > 0 && totalPrice > 0){
        return  <span className='btDate d-flex mt-5'
              type='button'
              onClick={handelBooking} 
            >
            confirm Booking 
            </span>
    }
}
useEffect(() => {
      dispatch(getPost(id));
  }, []);
//fn to get date
  const today = (function() {
    const now = new Date();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${now.getFullYear()}-${month}-${day}`;
})();
    return (
        <div>

        {!housting ? (
            <Spinner/>
               ):(
                   <div className="details">
                   <div className="imgpost"  >
                   </div>
                <div className="cont">
                <div>
                   <div className="col-md-12 col-lg-9 bravo_content_info infoP">
                   <h1 className="name">{housting.type}</h1>
                   <div className="mt-1 mb-1 spec-1"><span><i className="fas fa-map-marker-alt mr-2"></i></span><span>{housting.location}<br /></span></div>
                   </div>
                           <div className="aboutPost">
                               <div className="g-tour-feature">
                                   <div className="about">
                                                                                                                                                       
                                           <div className="col-xs-4 col-lg-2 col-md-2">
                                           <div className="item">
                                               <div className="iconPost">
                                               <i className="fas fa-home name"></i>
                                               </div>
                                               <div className="infoPost">
                                                   <h5 className="name">Type</h5>
                                                   <p className="value">
                                                   {housting.type}
                                                   </p>
                                               </div>
                                           </div>
                                       </div>
       
                                       <div className="col-xs-4 col-lg-2 col-md-2">
                                           <div className="item">
                                               <div className="iconPost">
                                               <i class="fas fa-users mr-2 name"></i>
                                               </div>
                                               <div className="infoPost">
                                                   <h5 className="name">Personnes</h5>
                                                   <p className="value">
                                                   {housting.persons}
                                                   </p>
                                               </div>
                                           </div>
                                       </div>
       
                                   <div className="col-xs-4 col-lg-2 col-md-2">
                                       <div className="item">
                                           <div className="iconPost">
                                               <i class="fas fa-tag name"></i>
                                           </div>
                                           <div className="infoPost">
                                               <h5 className="name">Price</h5>
                                               <p className="value">
                                               {housting.price}DT
                                               </p>
                                           </div>
                                       </div>
                                   </div>
       
                           </div>
                    </div>
               </div>


           
                    <div className="g-attributes">
                        <h6 className="desc" >Description</h6>
                        <div className="description">
                        <div dir="auto" >{housting.description}</div>
                        </div>
                    </div>
             
                   <div className="g-attributes">
                   <h6 className="desc" >AVIS</h6>
                   <div className="description">
                   <div dir="auto" >
                   <Comment comments={housting.comments} id={housting._id}/>
                   </div>
                   </div>
               </div>
            </div>
                   
       
            <div className="verif">
            <div className="container">
            <form>
            <div className="form-head">
            <div className="pric">
            <span className="value">
            <span className="onsale" /> 
            <span className="text-lg">{housting.price} DT</span></span> 
            <span >
            /night
            </span>
            </div>
            </div>
            
            <div className="dateform"> 
            <div>
            <label className="ldate">Start Date</label>
            <input type="date"  id="party" name="startDate"  min={today} value={startDate} onChange={(e) => setstartDate(e.target.value)}/>
            </div>
            <hr/>  
            <div>
            <label className="ldate">End Date</label>
            <input type="date" id="fname" min={startDate}  name="endDate" value={endDate} onChange={(e) => setendDate(e.target.value)}  placeholder="Your name.." />
            </div>
            <hr/>  
           <div>
           <label className="ldate d-flex">Persons</label>
           <input type="number" id="fname" name="persons" className="persons" max={housting.persons} min="1"  onChange={(e) => setpersons(e.target.value)} placeholder={housting.persons} />

           </div>
            </div>
            
            
            <span
              className='btDate d-flex mt-5'
              type='button'
              onClick={totalPriceAndDayes}
            >
              Price And dayes
            </span>

            <div className="dateform"> 
            <div>
              <label className="ldate">Dayes</label>
              <input type="text"  name="dayes"  value={dayes} onChange={(e) => setdayes(e.target.value)}  placeholder="Your name.." />
              <hr/>
              <label className="ldate">Total Price</label>
              <input type="text"  name="totalPrice"  value={totalPrice} onChange={(e) => settotalPrice(e.target.value)}  placeholder="Your name.." />
        </div>
        </div>
        
              {handelBtnConfirme()}

            </form>
          </div>
            </div>   
       
       </div>
       
       
            </div>
            
       
               )
       
               }
       
        </div>
    )
}

export default VisitedPost
