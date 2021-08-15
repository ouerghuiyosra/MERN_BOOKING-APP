//JWT package
const bcrypt =require('bcrypt')
const saltRounds = 10;
const jwt = require("jsonwebtoken");
//User Model
const User =require('../models/user')



//user Registretion
exports.Register = async (req,res) => {
    const { email, password, firstName, lastName, role, adresse,phone} = req.body;
    const { file } = req;
    

    try {


      //check existing  of  user 
      const findUser = await User.findOne({ email });
      if (findUser) {
        return res
            .status(400)
            .send({msg:"User already exists" });
    }
  // new user
  const newUser = new User({ email, password, firstName, lastName,
    profilePhoto: (file && file.filename) || null,role, adresse,phone });

    // Hash password before saving in database
    const hashedpassword = await bcrypt.hash(password, saltRounds);
    newUser.password = hashedpassword;
    //then we save user
    await newUser.save();
    //create a Token  
const token = jwt.sign(
    {
        id:newUser._id,//payload of jwt
    },
        process.env.SECRET_KEY,
         {expiresIn:"3h"} 
);
 // response
 res.status(200).send({ user: newUser, token });


    } catch (error) {
        res.status(500).send({msg:"server error",error})
    }

}
//update user
exports.Edit = async (req,res) => {
    try {


        const result = await User.updateOne(
          { _id: req.params.id },
          { $set: { ...req.body } }
  
        );
        res.send({Response:result});
      
      } catch (error) {
        res.status(400).send({ message: "no user with this id" });
      }
}