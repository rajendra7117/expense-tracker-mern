const express = require("express");
const User = require("../models/user");
const HttpError = require("../models/Error");
const e = require("express");

const app = express();

const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email }).exec();
  } catch (err) {
    return next(
      new HttpError("sorry, creating user failed, try again later", 404)
    );
  }
  if (existingUser) {
    console.log("error");
    return next(
      new HttpError("Email address already existing, please try to login", 404)
    );
  }
  let user;
  try {
    user = await User.create({ username, email, password });
  } catch (err) {
    return next(
      new HttpError("sorry, creating user failed, try again later", 404)
    );
  }

  res.status(200).json({ user: user });
};

const login = async (req, res, next) => {
    let {email, password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email: email}).exec()
    }
    catch(err){
        return next(new HttpError('Sorry something went wrong, please try again later!', 500))
    }
    if(!existingUser){
        return next(new HttpError('Email not found, please check', 404))
    }
    if(existingUser.email!==email || existingUser.password!==password){
        return next(new HttpError("Invalid credentials, please check", 404))
    }
    res.status(201).json({message: 'login successful!'})
};

const getUserByID = async(req, res, next) => {
    let id = req.params.id
    let existingUser;
    try{
        existingUser = await User.findById(id, "email username")
    }
    catch(err){
        console.log(err)
        return next(new HttpError("Sorry something went wrong, please try again later!", 500))
    }
    if(!existingUser){
        return next(new HttpError("User not found with the given id", 404))
    }
    res.status(201).json({username: existingUser.username, email: existingUser.email})
}
exports.register = register;
exports.login = login;

exports.getUserByID = getUserByID
