const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth=require("../middlewares/password")
const { registerCheck, validator } = require("../middlewares/validatorUser");

// signup
router.post("/signup", registerCheck(), validator, async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (userFound) {
      return res.status(400).send({ msg: "User already exists" });
    }
    const newUser = new User(req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    newUser.password = hashedPassword;
    await newUser.save();

    res.send({ msg: "Successfully added", user: newUser });
  } catch (error) {
    res.status(400).send({ msg: "Nothing to add!! go to hell" });
  }
});

//Loggin

router.post("/loggin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(400).send({ msg: "bad credential" });
    }
    const matched = await bcrypt.compare(password, existUser.password);
    if (!matched) {
      return res.status(400).send({ msg: "bad credential" });
    }
    const payload = {
      _id: existUser._id,
    };
    const token = await jwt.sign(payload, process.env.secretKey);
    const loginUser = await User.findOne({ email }).select("-password");
    res.send({
      user: loginUser,
      token: `Bearer ${token}`,
      msg: "successfully connected",
    });
  } catch (error) {
    res.status(400).send({ msg: "not connected" });
  }
});

//getcurrent

router.get('/currentUser',isAuth(),(req,res)=>{
 res.send({user:req.user})
})

module.exports = router;
