
//package
const express = require('express');
const app =express();
const dotenv = require('dotenv');

const path = require("path");

//route
const authRouter = require('./Routes/authRoutes')
const userRouter =require('./Routes/userRoutes')
const hostRoute = require('./Routes/hostRoute')
const housingRoute = require('./Routes/housingRoutes')
const bookingRoutes = require('./Routes/bookingRoutes')
//dataBase connection
const connectionDB =require('./Connection/connection');

dotenv.config()
PORT = process.env.PORT || 5000;
connectionDB()
//handle static file
app.use(express.static('public'))
//Router
app.use(express.json());
app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
app.use('/api/host',hostRoute);
app.use('/api/housing',housingRoute);
app.use('/api/booking',bookingRoutes);

//Serve static assets in production
if (process.env.NODE_ENV === "production") {
    //Set static folder
    app.use(express.static("Client/build"));      
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "Client", "build", "index.html"));
    });
  }

app.listen(PORT,(err)=>{err ? console.log(err):console.log(`You are connected on ${PORT}`)})