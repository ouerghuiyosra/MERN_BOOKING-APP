//package
import React,{useState} from 'react'
import {Modal,Button,Form} from "react-bootstrap"
import {useDispatch} from 'react-redux'
//css
import "../edit/EditUserProfile.css"
//action
import { updateUser } from '../../../Redux/Actions/userAction'


const EditUserProfile = ({currentUser:{email,firstName,lastName,adresse,phone,_id}}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 // initialState 
 const [data, setdata] = useState({email,firstName,lastName,adresse,phone})
 const handlechange = (e)=>{
     setdata({...data,[e.target.name]:e.target.value})
 
 }
 const dispatch = useDispatch()
 const handleEdit = () =>{
  dispatch(updateUser(_id,data))
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
    <Form.Label>Adresse</Form.Label>
    <Form.Control type="tel" name="addresse" placeholder={adresse}  onChange={handlechange}  />
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

export default EditUserProfile
