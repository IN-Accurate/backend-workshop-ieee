const router = require('express').Router();   //responsible for deciding which section of code to be executed
const userModel = require('../models/users');

router.post('/postdata', async (req, res) => {
  try {
    const newUser =  new userModel({
      name: "shiva",
      email: "shivasundar2@gmail.com",
      password: "12345678",
    });
    const User = await newUser.save();
    res.status(200).json("Data sent successfully");
  } catch (error) {
    console.log(error);
  }
});

router.get('/getdata', async (req, res) => {
  try {
    let user = await userModel.findOne({ name: "shiva" });
  
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json("user doesn't exist");
  }
});

module.exports = router;  //to make router available
