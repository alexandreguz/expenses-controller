import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  const [filteredCategory, setFilteredCategory] = useState("")
  const [filteredMonth, setFilteredMonth] = useState("")

  const yearFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  };

  const monthFilterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth)
  };

   const categoryFilterChangeHandler = (selectedCategory) => {
    setFilteredCategory(selectedCategory)
   }

  const filteredExpenses = props.items.filter(expense => {
      return (
        (filteredYear === '' || expense.date.getFullYear().toString() === filteredYear) &&
        (filteredMonth === '' || expense.date.getMonth().toString() === filteredMonth) &&
        (filteredCategory === '' || expense.category === filteredCategory)
        )
    });

    const total = filteredExpenses.reduce((acc, expense) => acc + expense.amount, 0);


    return (
      <div>
        <Card className="expenses">
            <ExpensesFilter 
              selected={filteredYear} 
              onChangeYearFilter={yearFilterChangeHandler}
              onChangeMonthFilter={monthFilterChangeHandler}
              onChangeCategoryFilter={categoryFilterChangeHandler}
            />
            <ExpensesChart items={filteredExpenses} />
            <ExpensesList items={filteredExpenses}/>

            <h3>Total Expenses: {total}</h3>

        </Card>
        </div>
    );
}

export default Expenses