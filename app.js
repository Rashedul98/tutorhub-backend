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

const locations = require('./routes/update_location');
app.use(locations);


async function startServer() {
  try {
    const connectionString = await
      mongoose
        .connect(
          "mongodb+srv://thisisrashedul:omeGanuke@mycluster.pjk8vd9.mongodb.net/?retryWrites=true&w=majority"
        )
    console.log("Database connected");
    app.listen(3000);
    console.log("server running");
  } catch (err) {
    console.log(err);
  }
}
startServer();


