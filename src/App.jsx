import React from "react";
import "./App.css"
import ExpensesCalculator from "./ExpensesCalculator";

//context
import { ExpenseProvider } from "./context/ExpenseContext";


function App() {
  return (
    <ExpenseProvider>
      <ExpensesCalculator/>
    </ExpenseProvider>
  );
}

export default App;
