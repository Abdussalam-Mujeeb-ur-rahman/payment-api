const db = require("../model");
const userModel = db.users;
const bcrypt = require("bcrypt");
const config = require("../config/config");
const jwt = require('jsonwebtoken')

async function signup(req, res) {
  try {
    const { name, email, phoneNumber, password } = req.body;

    //user exist
    const existingUser = await userModel.findOne({ where: { email: email } });
    if (existingUser) {
      return res.send("user already exists");
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const user = await userModel.create({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    //token
    try {
      var token = jwt.sign(
        { name: user.email, id: user.id },
        config.jwt_secret,
        { expiresIn: 360000 }
      );
    } catch (error) {
      console.log(`error from signup jwt ${error}`);
    }

    //set cookie
    res.cookie("token", token);

    res.status(201).json({
      message: "User created successfully!",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("please refresh your browser!");
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({where: { email: email }});
    console.log(user)
    if (!user) {
      return res.send("user doesn't exist!");
    }

      //validate and compare passwords
      const validate = await bcrypt.compare(password, user.password);

      if(!validate){
        return res.send('incorrect credentials!')
      }

      //token
      try {
        var token = jwt.sign(
            { name: user.email, id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: 360000 }
          );
      } catch (error) {
        console.log(`error from jwt login ${error}`)
      }

      //set cookie
      res.cookie("token", token);
      res.json({
        message: 'User logged in!',
        data: user
      })

  } catch (error) {
    res.send('please refresh your browser!')
    console.log(error)
  }
}

module.exports = {
  signup,
  login
};
