const User = require("../models/user");
const jwt =require('jsonwebtoken');

const isAuth = async (req,res,next) => {
    try {
        //    import token
        // headers=> authorization
        const token = req.headers["authorization"];
        // console.log(token);
        //   si mathamch token
        if (!token) {
          return res
            .status(401)
            .send({ errors: [{ msg: "No token authorized" }] });
        }
        // you are not authorized
        // we should verifier if token is valiled
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        // verifie if the user exist with that id
        const user = await User.findOne({ _id: decoded.id }).select("-password");
        // you are not authorised
        if (!user) {
          return res
            .status(401)
            .send({ errors: [{ msg: "you are not authorized" }] });
        }
    
        // si non
        // req bech nzid user
        req.user = user;
        // next
        next();
      } catch (error) {
        res.status(401).send({ errors: [{ msg: "you are not authorized" }] });
      }
}

module.exports = isAuth;
