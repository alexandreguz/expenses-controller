import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
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
        props.onSaveExpenseData(expenseData)
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={TitleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={AmountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max={"2024-01-01"} value={enteredDate} onChange={DateChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Category</label>
                    <select >
                        <option value='2022'>Fruits</option>
                        <option value='2021'>Vegetables</option>
                        <option value='2020'>Dairy Products</option>
                        <option value='2019'>Meat</option>
                    </select>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm