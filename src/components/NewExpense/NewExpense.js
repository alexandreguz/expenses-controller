import React from "react";
import './NewExpense.css'
import './ExpenseForm.js'
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    )

}
export default NewExpense