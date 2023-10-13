const router = require('express').Router();
const userModel = require('../models/users');

router.post('/register', async (req, res) => {
  try {
    const newUser = new userModel({
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address,
      email: req.body.email,
      password: req.body.password,
    });
    const User = await newUser.save();
    res.status(200).json(User);
  } catch (error) {
    console.log(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    let user = await userModel.findOne({ name: req.body.name });
    if (!user) {
      user = { name: 'User not found' };
      res.status(200).json(user);
    }
    if (req.body.password !== user.password) {
      user = { name: 'Wrong password' };
      res.status(200).json(user);
      flag = 0;
    }
  } catch (err) {
    res.status(200).json("user doesn't exist");
  }
});

module.exports = router;
