const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Middleware
app.use(bodyParser.json());
dotenv.config();


//sign-up routes for both students and teachers`
const SignUp = require("./routes/signup");
app.use(SignUp);

const logIn = require("./routes/login");
app.use(logIn);

const CreateTution = require('./routes/CreateTutions');
app.use(CreateTution);

const getTutions = require('./routes/GetTutions');
app.use(getTutions);




mongoose
  .connect(
    "mongodb+srv://thisisrashedul:omeGanuke@mycluster.pjk8vd9.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    // console.log(result);
    console.log("Database connected");
  })
  .then((result) => {
    app.listen(3000);
    console.log("Server Running");
  })
  .catch((err) => console.log(err));


