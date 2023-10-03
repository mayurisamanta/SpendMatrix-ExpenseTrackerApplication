import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState(1);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: id,
    };

    setIsEditing(false);
    setId(id + 1);
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  if (isEditing === false) {
    return (
      <div className="new-expense">
        <button onClick={startEditingHandler}> Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    </div>
  );
};

export default NewExpense;
