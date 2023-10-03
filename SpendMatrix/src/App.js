import React, { useState, useEffect } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const EXPENSES = [
  {
    id: "e1",
    title: "Groceries",
    amount: 500,
    date: new Date("2019-01-20"),
  },
  {
    id: "e2",
    title: "Restaurant",
    amount: 800,
    date: new Date("2020-03-15"),
  },
  {
    id: "e3",
    title: "Shopping",
    amount: 1200,
    date: new Date("2021-06-10"),
  },
  {
    id: "e4",
    title: "Utilities",
    amount: 600,
    date: new Date("2022-09-05"),
  },
  {
    id: "e5",
    title: "Vacation",
    amount: 2500,
    date: new Date("2023-12-28"),
  },
  {
    id: "e6",
    title: "Electronics",
    amount: 1500,
    date: new Date("2020-08-18"),
  },
  {
    id: "e7",
    title: "Rent",
    amount: 2000,
    date: new Date("2021-02-01"),
  },
  {
    id: "e8",
    title: "Healthcare",
    amount: 700,
    date: new Date("2022-05-15"),
  },
  {
    id: "e9",
    title: "Entertainment",
    amount: 300,
    date: new Date("2023-10-10"),
  },
  {
    id: "e10",
    title: "Education",
    amount: 1200,
    date: new Date("2020-11-22"),
  },
];

const App = () => {

  useEffect(() => {
    document.title = 'Spend Matrix'; 
  }, []);

  const [expenses, setExpenses] = useState(EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
