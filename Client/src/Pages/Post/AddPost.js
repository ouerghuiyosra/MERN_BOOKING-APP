//package
import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



//css
import "../Post/Add.css"
//action
import { AddHousting } from "../../Redux/Actions/HoustingAction";
import { getHostCurrentProfile } from "../../Redux/Actions/hostAction";

const AddPost = ({history}) => {




//multiple step form 
    const MAX_STEPS = 7
  const [formStep, setFormStep] = React.useState(0)

  // next step function
  const handleNextStep = () => {
 setFormStep(cur => cur + 1)
  }
  // perv step function
  const handlePervStep = () => {
    setFormStep(cur => cur - 1)
     }
     // to handel button function 
  const handleButton = () => {
  if (formStep === 0){
   return(
    <span className="BtStart"  type="button" onClick={handleNextStep}>Start</span>
    )
   }else if (formStep === 6){
    return(
     <span className="BtStart"  type="button" onClick={handleAdd}>ADD Housting </span>
     )
    }else{
       return(
        <span className="BtStart"  type="button" onClick={handleNextStep}>Next</span>
       )
   }
  }

// initialState 
const [type, settype] = useState('')
const [persons, setpersons] = useState('')
const [price, setprice] = useState('')
const [location, setlocation] = useState('')
const [description, setdescription] = useState('')
const [imagePost, setimagePost] = useState('')

const dispatch = useDispatch();

//function to register  user using formadata //since all input haven't the same type we used formadata
//formadata :accept a FormData object as a body. It’s encoded and sent out with Content-Type: multipart/form-data.

const handleAdd = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('type',type);
        formData.append('persons',persons);
        formData.append('price',price);
        formData.append('location',location);
        formData.append('description',description);
        formData.append('imagePost',imagePost);
        formData.append('host',host);

      dispatch(AddHousting(formData,history));
 };

 // to display the current host state
 const host = useSelector(state => state.hostReducer.profile._id)
 useEffect(() => {
  dispatch(getHostCurrentProfile());
}, []);

  return (
<div className="AddPage" >
    <div className=" d-flex justify-content-center align-items-center">

    
        <div className="guidePage">  
        {(formStep > 0)  && (formStep < MAX_STEPS) &&  (
            <div className='btl'>
              {formStep > 0 && (
                <span
                  onClick={handlePervStep}
                  type="button"
                  className="BtPrev"
                >
                <i class="fas fa-angle-double-left"></i>
                </span>
              )}
              Step {formStep} of {MAX_STEPS}

            </div>
          )}
     
<form>

        {formStep === 0 && (
            <section>
            <span  className="text-uppercase txt">Become a Host in 8 easy steps</span>
            <div className="txtGuide">Join us. We'll help you every step of the way.</div>
      
            </section>
                    )}



        {formStep === 1 && (
                        <section>
                        
                        <h2> What kind of place will you host?</h2>
                        <select className="houtingtype" name="type" onChange={(e) => settype(e.target.value)}  >
                        <option value="" readonly="true" hidden="true" selected></option>
                        <option value="hostel">hostel</option>
                        <option value="camping center ">camping center </option>
                        <option value="guestroom">guestroom</option>
                        <option value="guest house">guest house</option>
                        <option value="Mountain refuge">Mountain refuge</option>
                        </select>

                 
                        </section>
                        
                    )}

                  
            {formStep === 2 && (
              <section>
                <h2>How many guests would you like to welcome?
                </h2>
                <input
                  type="text"
                  name="persons"
                  className="textinput"
                  placeholder="persones Number"
                  onChange={(e) => setpersons(e.target.value)}
                />
             </section>
            )}

            {formStep === 3 && (
              <section>
                <h2>Now for the fun part set your price</h2>
                <input
                  type="text"
                  placeholder="per night"
                  name="price"
                  className="textinput"
                  onChange={(e) => setprice(e.target.value)}
          
                />
      
              </section>
            )}


            {formStep === 4 && (
              <section>
                <h2> Where's your place located?</h2>
                <input
                  type="text"
                        placeholder="Exact Adresse please....."  
                    name="location"
                  className="textinput"
                  onChange={(e) => setlocation(e.target.value)}
                />
      
              </section>
            )}



            {formStep === 5 && (
              <section>
                <h2>  Now, let's describe your place</h2>
                <textarea
                  type="text"
                        placeholder="describe your place....."  
                    name="description"
                  className="descinput"
                  onChange={(e) => setdescription(e.target.value)}
                />
      
              </section>
            )}
            
            {formStep === 6 && (
              <section>
                <h2> Next, let's add some photos of your place</h2>
                <input
                  type="file"
                    name="imagePost"
                    onChange={(e) => setimagePost( e.target.files[0])}
                />
      
              </section>
            )}

      <span>{handleButton()}
      </span>
      </form>
           </div>
     </div>
</div>
  )
}

export default AddPost