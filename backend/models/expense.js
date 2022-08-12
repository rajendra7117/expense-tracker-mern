const mongoose = require("mongoose")

const expenseSchema = mongoose.Schema({
    title: {type:String, required: true},
    date: {type:String, required: true},
    amount: {type:Number, required: true},
    type: {type:String, required:true}
},{timeStamps: true})



module.exports = mongoose.model('Expenses', expenseSchema)