const express = require("express");
const app = express();
const mongoose = require("mongoose");

const http = require("http");
const cors = require("cors");

require("dotenv/config");


const server = http.createServer(app)



app.use(cors());
app.use(express.json());





const AdminRoute = require("./routes/Reclamation");
const TypeRoute = require ("./routes/type")


app.use('/admin',AdminRoute);
app.use('/type',TypeRoute)




// Assuming you have imported the necessary modules and defined the MongoDB connection URL

async function connectToMongoDB() {
    try {
      await mongoose.connect('mongodb://127.0.0.1:27017/reclamation');
      console.log('Connected to MongoDB');
      // Perform any additional operations after the successful connection
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      // Handle the connection error
    }
  }
  
  connectToMongoDB();
  


  app.listen(5000, () => {  
    console.log("server is up and connect")});
 