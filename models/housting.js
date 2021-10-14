const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houstingSchema = new Schema({

      type: {
        type: String,
        required: true,
      },
      persons: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      imagePost: {
        type: String,
        required: true,
      },
      host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "host",
      },
      comments: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: 'users',
          },
          text: {
            type: String,
            required: true,
          },
          firstName: {
            type: String,
          },
          lastName: {
            type: String,
          },
      
          date: {
            type: Date,
            default: Date.now,
          },
        },
      ],  
      
       data:{
        type: Date,
        default:Date.now,
    }

})
module.exports = Housting = mongoose.model("housting",houstingSchema);
