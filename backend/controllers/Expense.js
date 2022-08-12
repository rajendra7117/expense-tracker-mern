const mongoose = require("mongoose");
const HttpError = require("../models/Error");
const Expense = require("../models/expense");
const User = require("../models/user");

const addExpense = async (req, res, next) => {
  const { title, date, amount, type, creator } = req.body;
  let user;

  try {
    user = await User.findById(creator);
  } catch (err) {
    console.log('14')
    return next(
       
      new HttpError("Sorry creating expense failded, try again later", 500)
    );
  }
  if (!user) {
    console.log('20')
    return next(
      new HttpError("Sorry creating expense failded, try again later", 500)
    );
  }
  let createdExpense;
  try {
    createdExpense = await new Expense({
      title: title,
      date: date,
      amount: amount,
      type: type,
      creator,
    });
  } catch (err) {
    console.log(err, "31");
    return next(
      new HttpError("Sorry adding expense failed, please try again later", 500)
    );
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdExpense.save({ session: sess });
    await user.expenses.push(createdExpense);
    await user.save({ session: sess });
    sess.commitTransaction();
  } catch (err) {
    console.log(user);
    return next(
      new HttpError("Sorry adding expense failed, please try again later", 500)
    );
  }

  res.status(200).json(createdExpense);
};

exports.addExpense = addExpense;
