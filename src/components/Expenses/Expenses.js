import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
    console.log(selectedYear)
  };

  const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear
    });

    let expensesContent = <p>NO EXPENSES FOUND</p>
    if (filteredExpenses.length > 0) {
      expensesContent = 
        filteredExpenses.map(expense =>
        <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}
        />
      )
    }

    return (
      <div>
        <Card className="expenses">
            <ExpensesFilter 
              selected={filteredYear} 
              onChangeFilter={filterChangeHandler}
            />
            {expensesContent}
            
        </Card>
        </div>
    );
}

export default Expenses