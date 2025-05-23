const express = require("express")
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("./userModel") 
const app = express();

app.use(express.json()); 


const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL)

.then(()=>{
  console.log("Mongodb connected...")

  app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})



  })
app.post("/register", async (req, res) =>{
 
  try {
    const newUser = new User({ username, password, role });
    await new User.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    console.error('Error registering user:', err); // Log the error
    res.status(400).json({ message: 'User registration failed.', error: err 
    
    });
  }

  
 
 
 
 
  const { username, password,role} = req.body
})
 