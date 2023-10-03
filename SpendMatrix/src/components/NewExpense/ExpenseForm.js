import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") setEnteredTitle(value);
    else if (identifier === "amount") setEnteredAmount(value);
    else setEnteredDate(value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              placeholder="Enter Expense Name"
              required
              onChange={(event) => {
                inputChangeHandler("title", event.target.value);
              }}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount(&#8377;)</label>
            <input
              type="number"
              value={enteredAmount}
              placeholder="Enter Expense Amount"
              required
              onChange={(event) => {
                inputChangeHandler("amount", event.target.value);
              }}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2023-12-31"
              required
              onChange={(event) => {
                inputChangeHandler("date", event.target.value);
              }}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
