//package
const express = require('express');
const router = express.Router();

//middleware
const isAuth = require('../Middlewmare/isAuth')
//controller
const { addInfo, myProfile, EditHostProfile } = require('../Controllers/host.controllers')


//validator
const {validation ,addInformation}
 = require ("../Middlewmare/validation/Validator")
 /*
@method: GET
@ path:http:localhost:5000/api/host/me
@ parameter: req.header 
//@desc     load host profile 
//@access   Private
*/

router.get('/me' ,isAuth,myProfile)

 /*
@method: Post
@ path:http:localhost:5000/api/host/
@ parameter: req.body 
//@desc     create host profile 
//@access   Private
*/


  router.post('/',isAuth,addInformation(),validation,addInfo); /*
  @method: Put
  @ path:http:localhost:5000/api/host/editProfile
  @ parameter: req.body 
  //@desc     edit host profile 
  //@access   Private
  */
  


router.put('/editProfile/:id',isAuth,EditHostProfile);
module.exports = router;