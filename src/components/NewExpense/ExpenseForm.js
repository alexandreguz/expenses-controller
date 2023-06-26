import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredProduct, setEnteredProduct] = useState("");
    const [enteredQuantity, setEnteredQuantity] = useState("")
    const [enteredPrice, setEnteredPrice] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [enteredCategory, setEnteredCategory] = useState("");
    const [enteredKind, setEnteredKind] = useState("");

    const productChangeHandler = (event) => {
        setEnteredProduct(event.target.value)
    }
    const quantityChangeHandler = (event) => {
        setEnteredQuantity(event.target.value)
    }
    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value)
    }
    const DateChangeHandler = (event) => {
        console.log(event.target.value)
        setEnteredDate(event.target.value)
    }
    const categoryChangeHandler = (event) => {
        setEnteredCategory(event.target.value)
    }
    const kindChangeHandler = (event) => {
        setEnteredKind(event.target.value)
    }
    const totalPrice = (enteredQuantity*enteredPrice)

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            product: enteredProduct,
            quantity: enteredQuantity,
            amount: +totalPrice,
            date: new Date(enteredDate),
            category: enteredCategory,
            kind: enteredKind
        }
        props.onSaveExpenseData(expenseData)
        setEnteredProduct("");
        setEnteredPrice("");
        setEnteredDate("");
        setEnteredCategory("");
        setEnteredQuantity("");
        setEnteredKind("");
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Category</label>
                    <select onChange={categoryChangeHandler}>
                        <option value={null}>Chose Category</option>
                        <option value='fruits'>Fruits</option>
                        <option value='vegetables'>Vegetables</option>
                        <option value='dairy'>Dairy Products</option>
                        <option value='meat'>Meat</option>
                    </select>
                </div>
                <div className="new-expense__control">
                    <label>Product</label>
                    <select onChange={productChangeHandler} >
                        <option value={null}>Chose Product</option>
                        <option value='banana'>Banana</option>
                        <option value='aple'>Aple</option>
                        <option value='watermellon'>Watermellon</option>
                        <option value='grape'>Grape</option>
                    </select>
                </div>
                <div className="new-expense__control .quantity">
                    <label>Quantity</label>
                    <select onChange={quantityChangeHandler}>
                        <option value={""}>Chose Quantity</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                </div>
                <div className="new-expense__control">
                    <label>Kind</label>
                    <select onChange={kindChangeHandler}>
                        <option value={null}>Chose Kind</option>
                        <option value='Liter'>Liter</option>
                        <option value='boxes'>Boxes</option>
                        <option value='kg'>Kg</option>
                        <option value='pacage'>Pacage</option>
                    </select>
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input placeholder="unitary price" type="number" min="0.01" step="0.01" value={enteredPrice} onChange={priceChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Total Price</label>
                    <p>{totalPrice}</p>

                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max={"2024-01-01"} value={enteredDate} onChange={DateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div> 
        </form>
    )
}

export default ExpenseForm