//package
const express =require("express");
const router =express.Router();
const multer = require("multer");

//conrollers
const { AddPost, AllPost, HoustingByHost, HoustingById, HoustingByLocation, HoustingByGuests,DeleteHousting, EditPost, CommentHousting, deleteComment } = require("../Controllers/housing.controllers");



//middleware
const isAuth = require("../Middlewmare/isAuth");
//validator
const { AddPosts, validation } = require("../Middlewmare/validation/Validator");
//multer config
const storage = multer.diskStorage({
    destination:(req,File, callback) => {
        callback(null,"./public")//file where we will storage img
    },
    filename:(req,file, callback) => {
        callback(null,file.originalname); // image name when we uploaded
    }
})

const upload = multer({storage: storage}).single('imagePost');




/*
@method: POST
@ path:http:localhost:5000/api/housing/Add
@ parameter: req.body  
//@desc     add post 
//@access   Private
*/
router.post('/Add',isAuth,upload,AddPosts(),validation,AddPost)
/*
@method: get
@ path:http:localhost:5000/api/housing/all
@ parameter: req.body  
//@desc     all post 
//@access   Public
*/
router.get('/all',AllPost)
/*
@method: get
@ path:http:localhost:5000/api/housing/byId
@ parameter: req.body  
//@desc      post  by id
//@access   Public
*/


router.get('/byId/:id',HoustingById)

/*
@method: get
@ path:http:localhost:5000/api/housing/byMe
@ parameter: req.body  
//@desc     post  by host
//@access   Private
*/
router.get('/byMe/:host',isAuth,HoustingByHost)
/*
@method: get
@ path:http:localhost:5000/api/housing/byMe
@ parameter: req.body  
//@desc     post  by location
//@access   Public
*/
router.get('/byLocation/:location',HoustingByLocation)
/*
@method: get
@ path:http:localhost:5000/api/housing/byGuests
@ parameter: req.body  
//@desc     post  by location
//@access   Public
*/

router.get('/byGuests/:persons',HoustingByGuests)




/*
@method: delete
@ path:http:localhost:5000/api/housing/Delete
@ parameter: req.body  
//@desc   Delete  post  
//@access   Private
*/
router.delete('/Delete/:id',isAuth,DeleteHousting)

/*
@method: Edit
@ path:http:localhost:5000/api/housing/editpost
@ parameter: req.body  
//@desc  edit  post  
//@access   Private
*/
router.put('/editpost/:id',isAuth,EditPost);

/*
@method: post
@ path:http:localhost:5000/api/housing/comment/:id
@ parameter: req.body  
//@desc  Comment on a post
//@access   Private
*/
router.post("/comment/:id",isAuth, CommentHousting);
/*
@method: delete
@ path:http:localhost:5000/api/housing/comment/:housting_id/:comment_id
@ parameter: req.body  
//@desc  delete comment
//@access   Private
*/
router.delete("/comment/:housting_id/:comment_id",isAuth,deleteComment)
module.exports = router