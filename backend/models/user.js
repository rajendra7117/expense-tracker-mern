const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {type:String, required: true},
    email: {type:String, required:true},
    password: {type: String, required:true},
    expenses: [{type: mongoose.Types.ObjectId, required: true, ref: 'Expense'}]
   
})



module.exports = mongoose.model('Users', userSchema)