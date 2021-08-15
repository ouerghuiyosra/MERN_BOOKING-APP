import React from 'react';
import {useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {Modal,Form,Button} from "react-bootstrap"
//css
import "../Post/PostCard.css"
//action
import { DeletePost, EditPost, getHostPost } from '../../Redux/Actions/HoustingAction';

const PostCard = ({posts:{type,location,imagePost,persons,_id,price,description}}) => {

  const dispatch = useDispatch();
  //fn Delete post
  


  const handelDelete = () =>{
    
      dispatch(DeletePost(_id))
      handleclose()
  }
  //fn Edit post 

  const [newdata, setnewdata] = useState({type,location,imagePost,persons,_id,price,description})
  const handlechange = (e)=>{
    setnewdata({...newdata,[e.target.name]:e.target.value})

}
const handleEdit = () =>{
  dispatch(EditPost(_id,newdata))
  handleClose()
}
const HostProfileState = useSelector(state => state.hostReducer.profile)

useEffect(() => {
  if (HostProfileState) {
    dispatch(getHostPost(HostProfileState._id));
  }
}, [dispatch,HostProfileState]);

// edit modal
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
// delete modal
const [showConfirmation, setShowConfirmation] = useState(false);

const handleclose = () => setShowConfirmation(false);
const handleShowConfirmation = () => setShowConfirmation(true);

    return (
        <div className="cardpost">
        <section className="product">
        <div className="product__photo">
          <div className="photo-container">
              <img src={imagePost}  alt="green apple slice" className="imagePost"  />
          </div>
        </div>
        <div className="product__info">
          <div className="titletype">
            <h4 >{type}</h4>
            <span  className="location"> <i class="fas fa-map-marker-alt mr-2 location"></i> {location}</span>
            
          </div>
          <div className="titletype">
          <span className="location" > <i class="fas fa-users mr-2"></i> {persons}</span>

          
        </div>
          <div className="price">
          <span>{price} /Dt</span>
          </div>
        
          <div className="description">
            <h4 className="decs">Description</h4>
            <span  className="descriptionPost"> {description}</span>
          </div>
          <div className="bts">

          <div className=" d-flex flex-row align-items-center">
          <span className="btedit" onClick={handleShow}><i class="far fa-edit"></i></span>
         <Modal show={show} onHide={handleClose}>
      
         <Modal.Body>
         <Form>
      
         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Housting Type</Form.Label>
         <Form.Control type="text" name="type" placeholder={type} onChange={handlechange}  />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Housting Location</Form.Label>
         <Form.Control type="text" name="location"  placeholder={location}  onChange={handlechange}  />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Housting price</Form.Label>
             <Form.Control type="text" name="price"  placeholder={price}  onChange={handlechange}  />
         </Form.Group>
      
         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Housting Persones</Form.Label>
         <Form.Control type="text" name="persons" placeholder={persons}  onChange={handlechange} />
      </Form.Group>  
      
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Housting description</Form.Label>
      <Form.Control type="text" name="description" placeholder={description}  onChange={handlechange}  />
      </Form.Group> 
      
         </Form></Modal.Body>
         <Modal.Footer>
      
           <span className="btview" onClick={handleClose}>Close</span>
      
           <span className="bteditPost" onClick={e=>handleEdit(e)}>Save</span>
      
      
         </Modal.Footer>
       </Modal>


      <div>
      
      <span className="btPost"  type="button" onClick={handleShowConfirmation}><i class="far fa-trash-alt"></i></span> 


      <Modal show={showConfirmation} onHide={handleclose} >
         <div className="confirm">
         <Modal.Body  >
         <div >
         <div className="modaldialog modalconfirm">
           <div className="modalcontent">
             <div className="modalheader">
               <div className="icon-box">
               <i class="fas fa-times x"></i>
               </div>				
               <h4 className="modaltitle">Are you sure?</h4>	
              
             </div>
             <div className="modalbody">
               <p>Do you really want to delete This Post? This process cannot be undone.</p>
             </div>
             <div className="modalfooter">
             <span type="button" className="btcancel" onClick={handleclose}>Cancel</span>
             <span type="button" className="btsave" onClick={handelDelete} >Delete</span>
           </div>
 
 
           </div>
         </div>
       </div>
 
 
 
 
         </Modal.Body>
       
         </div>
      
      </Modal>
      </div>
      
      
      
      
        </div>


          </div>
          </div>
         
      </section>
      </div>
    )
}

export default PostCard
