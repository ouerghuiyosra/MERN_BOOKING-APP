//model
const Host = require ("../models/host")
// Create Host Profile
exports.addInfo = async (req, res) => {
  try {
    //create new host with the model host 
     const newHost = new Host (req.body);


//if the user  exist 
const user = await Host.findOne({user:req.body._id})
if(user){
    res
    .status(400)
    .send({msg:"user not exist"})
    return;
}


//save the profile
const response = await newHost.save();
res.send({response:response,msg:"host is saved"})

    

} catch (error) {
    console.log(Error);
    res.status(500).send({msg:"not save it "});
    
}}
// Load Host Profile

exports.myProfile = async (req, res) => {
  try {
    const myProfile = await Host.findOne({
      user: req.user,
    }).populate('user',['email','firstName', 'lastName','profilePhoto', 'role', 'adresse','phone']);//populate used to check ref model 
    if (!myProfile) {
      res.status(400).json({ message: 'There is no profile for this user' });
    }
    res.json(myProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json('Server Error');
  }
};

//Edit Host Profile
exports.EditHostProfile = async (req,res) => {
  try {


      const result = await Host.updateOne(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      return   res.send({Response:result});
    
    } catch (error) {
      res.status(400).send({ message: "no user with this id" });
    }
}
