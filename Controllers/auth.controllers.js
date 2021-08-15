//JWT package
const bcrypt =require('bcrypt')
const jwt = require("jsonwebtoken");
//User Model
const User =require('../models/user')



//user Login

exports.Login = async(req,res)=>{
    const { email, password} = req.body;

    try {
    
        //checking  if user is  exists
        const findUser = await User.findOne({ email });
        // ken mech mawjoud
        // bad credential
        if (!findUser) {
            return res
                .status(400)
                .json({ errors: [{ msg: "Invalid credentials" }] });
            }
        // test password
        //   password fel BD== password
        const comparePass = await bcrypt.compare(password, findUser.password);
        //   ken mech kifkif
        // bad crential
        if (!comparePass) {
            return res
                .status(400)
                .json({ errors: [{ msg: "Invalid credentials" }] });
            }
        // CRRE UN TOKEN= meftaa7
        const token = jwt.sign(
            {
                id: findUser._id,
            },
            process.env.SECRET_KEY,
            { expiresIn: "3h" }
        );
        res.status(200).send({
            user: findUser,
            token,
        });
       
      } catch (error) {
          res.status(500).send({msg:"server error",error})
      }
  
    
}