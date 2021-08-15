const express =require("express");
const router =express.Router();
//controllers
const { createBooking, getUserBooking,verifierDate, cancelBooking } = require("../Controllers/booking.controllers");
//middleware
const isAuth = require("../Middlewmare/isAuth");
//validator
const { validation, createbooking } = require("../Middlewmare/validation/Validator");
/*
@method: POST
@ path:http:localhost:5000/api/booking/create
@ parameter: req.body  
//@desc     create booking
//@access   Private
*/
router.post('/create',createbooking(),validation,createBooking)
/*
@method: get
@ path:http:localhost:5000/api/booking/create
@ parameter: req.body  
//@desc     get booking
//@access   Private
*/

router.get('/byMe/:user',isAuth,getUserBooking)


/*
@method: get
@ path:http:localhost:5000/api/booking/verify
@ parameter: req.body  
//@desc     get booking date
//@access   Public
*/
router.post('/verify',verifierDate)


/*
@method: delete
@ path:http:localhost:5000/api/booking/cancel
@ parameter: req.body  
//@desc     cancel booking 
//@access   Private
*/
router.delete('/cancel/:id',isAuth,cancelBooking)

module.exports = router ;