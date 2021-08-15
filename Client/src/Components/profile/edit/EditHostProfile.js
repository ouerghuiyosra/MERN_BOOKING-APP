//package
import React,{useState,useEffect} from 'react'
import {Modal,Button,Form} from "react-bootstrap"
import {useDispatch,useSelector} from 'react-redux'
//css
import "../edit/EditUserProfile.css"
//action
import { updateUser } from '../../../Redux/Actions/userAction'
import { EditHosProfile, getHostCurrentProfile } from '../../../Redux/Actions/hostAction'

const EditHostProfile = ({currentUser:{email,firstName,lastName,adresse,phone,_id}}) => {
        
//modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  const HostProfileState = useSelector(store => store.hostReducer.profile)
 const [data, setdata] = useState({email,firstName,lastName,adresse,phone})

 const [newdata,setnewdata] = useState(HostProfileState.city,HostProfileState.street,HostProfileState.zipcode,HostProfileState.bio)

 const handlechange = (e)=>{
      setnewdata({...newdata,[e.target.name]:e.target.value})
      setdata({...data,[e.target.name]:e.target.value})
    }

 const dispatch = useDispatch()


 const handleEdit = () =>{
    dispatch(updateUser(_id,data))
    dispatch(EditHosProfile(HostProfileState._id,newdata))
    handleClose()
}

    return (
        <div>

        <span type="button"  onClick={handleShow}>
          <i className='fa fa-edit'></i> Edit profile
        </span>
<Modal show={show} onHide={handleClose}>

  <Modal.Body>
  <Form>

  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>First Name</Form.Label>
  <Form.Control type="text" name="firstName" placeholder={firstName} onChange={handlechange}   />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Last Name</Form.Label>
  <Form.Control type="text" name="lastName" placeholder={lastName} onChange={handlechange}   />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" name="email"  placeholder={email}  onChange={handlechange}  />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Phone</Form.Label>
  <Form.Control type="tel" name="phone" placeholder={phone}  onChange={handlechange} />
  </Form.Group> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Street</Form.Label>
  <Form.Control type="tel" name="street" placeholder={HostProfileState.street} onChange={handlechange} />
  </Form.Group> 

<div className="address">
<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>City</Form.Label>
<Form.Control type="tel" name="city" placeholder={HostProfileState.city} onChange={handlechange} className="addre" />
</Form.Group> 


<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>zipcode</Form.Label>
<Form.Control type="tel" name="zipcode" placeholder={HostProfileState.zipcode} onChange={handlechange} className="addre" />
</Form.Group>
</div> 

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Bio</Form.Label>
<Form.Control type="tel" name="bio" placeholder={HostProfileState.bio} onChange={handlechange}  />
</Form.Group> 

  </Form></Modal.Body>
  <Modal.Footer>
  <span className="btview" onClick={handleClose}>Close</span>

  <span className="bteditPost" onClick={e=>handleEdit(e)}>Save</span>


  </Modal.Footer>
</Modal>
</div>    

    )
}

export default EditHostProfile
