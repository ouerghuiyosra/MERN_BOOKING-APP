//model
const  Booking = require ("../models/booking")
const Housting = require("../models/housting")

exports.createBooking = async (req,res) => {
    try {

      const {  user,housting, endDate,startDate, dayes, persons,totalPrice } = req.body;

      //create new booking with the model booking 
      const booking = new Booking({user, housting, endDate,startDate, dayes, persons,totalPrice });
      const findStartDate = await Booking.findOne({ startDate });
      const findEndtDate = await Booking.findOne({ endDate });
      
      if (findStartDate) {
        return res
            .status(400)
            .json({ errors: [{ msg: "date taken" }] });

      }
      if (findEndtDate) {
        return res
            .status(400)
            .json({ errors: [{ msg: "date taken" }] });
            
      }
        //save the booking
       await booking.save();
       res.send(booking)
  
   
    
    } catch (error) {
        console.log(Error);
        res.status(500).send({msg:"not save it "});
        
    }
}

 // get user booking 

exports.getUserBooking = async (req,res) => {
  try {
    const getUserBooking = await Booking.find({ user:  req.params.user });
    
    res.send({ response:getUserBooking});
  } catch (error) {
    res.status(400).send({ message: "no booking for thiis user" });
  }


}


exports.verifierDate = async (req,res) => {
  const {  endDate,startDate } = req.body;

  try {

   const findStartDate = await Booking.findOne({ startDate });
   const findEndtDate = await Booking.findOne({ endDate });
   
   if (findStartDate) {
    return res
        .status(400)
        .json({ errors: [{ msg: "date taken" }] });

  }
  if (findEndtDate) {
    return res
        .status(400)
        .json({ errors: [{ msg: "date taken" }] });
        
  }
  
  res.status(200).send({
    startDate, endDate
  
});
     
       
  
 
  
  } catch (error) {
    res.status(500).send({msg:"server error",error})
      
  }


}
exports.cancelBooking = async (req,res) => {
  try {
      const result = await Booking.deleteOne({ _id: req.params.id });
      res.send({ response: "booking canceled" });
    } catch (error) {
      res.status(400).send({ message: " no booking with this id" });
    }
}