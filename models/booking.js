const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      housting: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "housting",
      },
      endDate: {
        type: Date,
        required: true,
      },
      startDate: {
        type:Date,
        required: true,
      },
      dayes: {
        type: Number,
      },
      persons: {
        type: Number,
        required: true,
      },
      totalPrice: {
        type: Number,
      },
      data:{
        type: Date,
        default:Date.now,
    }

})
module.exports = Booking = mongoose.model("booking",bookingSchema);
