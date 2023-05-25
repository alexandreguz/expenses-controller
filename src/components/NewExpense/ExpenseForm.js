import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")

    const TitleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <labe>Title</labe>
                    <input type="text" value={enteredTitle} onChange={TitleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <labe>Amount</labe>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={AmountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <labe>Date</labe>
                    <input type="date" min="2019-01-01" max={"2024-01-01"} value={enteredDate} onChange={DateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm