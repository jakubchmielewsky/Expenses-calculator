import React from "react";
import "./App.css"
import ExpensesCalculator from "./ExpensesCalculator";

//context
import { ExpenseProvider } from "./context/Context";


function App() {
  return (
    <ExpenseProvider>
      <ExpensesCalculator/>
    </ExpenseProvider>
  );
}

export default App;
