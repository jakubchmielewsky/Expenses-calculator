import React from "react";
import "./App.css"
import { AppContainer } from "./App.styles";

function App() {
  return (
    <AppContainer>
      <h1 style={{fontSize:48}}>Expenses calculator</h1>
      <section className="wrapper">
        <aside>
          {/* <ExpensesForm/> */}
          {/* <ExpensesSummary/> */}
        </aside>
        {/* <ExpensesList/> */}
      </section>
    </AppContainer>
  );
}

export default App;
