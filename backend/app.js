require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/User");
const mongoose = require("mongoose");

const expenseRoutes = require("./routes/Expense");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
 
  next();
});

app.use("/api/user/", userRoutes);


app.use((error, req, res, next) => {
    if(res.headerSent){
        return next(error)
    }
    res.status(error.code || 500)
    res.json({message: error.message})
})
app.use("/api/expense/", expenseRoutes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
