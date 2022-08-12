const express = require("express")

const expenseController = require("../controllers/Expense")

const router = express.Router()

router.get("/", (req, res) => {
    res.json({message: 'expenses'})
})

router.post("/add", expenseController.addExpense)

router.patch("/update/:id", (req, res) => {
    res.json({message: 'expense updated', id: req.query})
})

router.delete("/delete/:id", (req, res) => {
    console.log(req.query.params)
    res.json({message: 'expense deleted', id: req.query.id})
})


module.exports = router