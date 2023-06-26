import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const dropdownYearChangeHandler = (event) => {
   const year = event.target.value
    props.onChangeYearFilter(year)
    console.log(year)
  }

  const dropdownMonthChangeHandler = (event) => {
    const month = event.target.value
     props.onChangeMonthFilter(month)
     console.log(month)
   }

  const dropdownCategoryChangeHandler = (event) => {
    const category = event.target.value
     props.onChangeCategoryFilter(category)
     console.log(category)
   }


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownYearChangeHandler}>
          <option value=''>Select</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>

      <div className='expenses-filter__control'>
        <label>Filter by Month</label>
        <select value={props.selected} onChange={dropdownMonthChangeHandler}>
          <option value=''>Select</option>
          <option value='0'>Jan</option>
          <option value='1'>Feb</option>
          <option value='2'>Mar</option>
          <option value='3'>Apr</option>
          <option value='4'>May</option>
          <option value='5'>Jun</option>
          <option value='6'>Jul</option>
          <option value='7'>Aug</option>
          <option value='8'>Sep</option>
          <option value='9'>Oct</option>
          <option value='10'>Nov</option>
          <option value='11'>Dec</option>
        </select>
      </div>

      <div className='expenses-filter__control'>
        <label>Filter by Category</label>
        <select value={props.selected} onChange={dropdownCategoryChangeHandler}>
          <option value=''>Select</option>
          <option value='fruits'>Fruits</option>
          <option value='vegetables'>Vegetables</option>
          <option value='dairy'>Dairy</option>
          <option value='meat'>Meat</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;