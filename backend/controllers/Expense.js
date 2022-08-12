const HttpError = require("../models/Error");
const Expense = require("../models/expense");


const addExpense = async(req, res, next) => {
    const {title, date, amount, type } = req.body;
    let createdExpense;
    try{
        createdExpense = await Expense.create({
            title: title,
            date: date,
            amount: amount,
            type: type
        })
    }
    catch(err){
        console.log(err)
        return next(new HttpError("Sorry adding expense failed, please try again later", 500))
    }

    res.status(200).json(createdExpense)
}



exports.addExpense = addExpense;