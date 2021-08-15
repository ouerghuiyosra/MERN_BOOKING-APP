
//model
const Housting = require("../models/housting");
const User = require("../models/user")


//add post
exports.AddPost = async (req,res) => {


const { type,persons,price,location,description,host} = req.body;
const { file } = req;

try {

    const newHousing = new Housting({ type,persons,price,location,description,
        imagePost: (file && file.filename) || null,host });

    await newHousing.save();
    res.status(200).send(newHousing)
} catch (error) {
    res.status(400).send(error)
}

}
//get all post 

exports.AllPost = async (req,res) => {
    try {
        const result = await Housting.find();
        res.send({ response: result });
      } catch (error) {
        res.status(400).send({ message: "can not get Housting" });
      }
}
//get post by id 
exports.HoustingById = async (req,res)  =>{
    try {
        const houstingid = await Housting.findOne({ _id: req.params.id });
        res.send({ response: houstingid });
      } catch (error) {
        res.status(400).send({ message: "no housting  with this id" });
      }
    
    

}

//get post by host
exports.HoustingByHost = async (req,res) => {
    try {
        const hostPost = await Housting.find({ host:  req.params.host });
        
        res.send({ response:hostPost});
      } catch (error) {
        res.status(400).send({ message: "no Housting with this location" });
      }
}
//get post by location
exports.HoustingByLocation = async (req,res) => {
    try {
        const houstinglocation = await Housting.find({ location: req.params.location });
        
        res.send({  response:houstinglocation});
      } catch (error) {
        res.status(400).send({ message: "no Housting with this id" });
      }
}

//Get Rooms by the number of guests
exports.HoustingByGuests = async (req,res) => {
    try {
        const houstingpersons = await Housting.find({ persons: req.params.persons });
        
        res.send({  response:houstingpersons});
      } catch (error) {
        res.status(400).send({ message: "no Housting with this id" });
      }
}






//Delete post
exports.DeleteHousting = async (req,res) => {
    try {
        const result = await Housting.deleteOne({ _id: req.params.id });
        console.log(result);
        res.send({ response: "Housting deleted" });
      } catch (error) {
        res.status(400).send({ message: " no Housting with this id" });
      }
}
//Edit Housting
exports.EditPost = async (req,res) => {
    try {
  
  
        const result = await Housting.updateOne(
          { _id: req.params.id },
          { $set: { ...req.body } }
        );
        res.send({Response:result});
      
      } catch (error) {
        res.status(400).send({ message: "no housting  with this id" });
      }
  }

// comment on a post 
exports.CommentHousting = async (req,res) => {


  try {
    const user = await User.findById(req.user.id).select("-password");
    const housting = await Housting.findById(req.params.id);

   const newComment = {
    text: req.body.text,
    firstName: user.firstName,
    lastName: user.lastName,
    user: req.user.id,
    };
  housting.comments.unshift(newComment);

  await housting.save();

  res.json(housting.comments);
} catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "housting  not found" });
    }
    res.status(500).send("Server error");
  }

}
//delete comment
exports.deleteComment = async (req,res) =>{
  try {
    const housting = await Housting.findById(req.params.housting_id);
    const user = await User.findById(req.user.id)
    //Pull out comment
    const comment = housting.comments.find(
      (comment) => comment.id === req.params.comment_id
    );

    //Make sure that comment exists
    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exists" });
    }



    // Get romove index
    const removeIndex = housting.comments
      .map((comment) => comment.id)
      .indexOf(req.params.comment_id);

    housting.comments.splice(removeIndex, 1);

    await housting.save();

    res.json(housting.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }


}