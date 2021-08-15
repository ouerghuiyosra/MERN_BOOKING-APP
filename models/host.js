const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hostSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      zipcode: {
        type: Number,
        required: true,
      },
      bio: {
        type: String,
      },
      data:{
        type: Date,
        default:Date.now,
    }

})
module.exports = Host = mongoose.model("host",hostSchema);
