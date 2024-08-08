import React from "react";
import "./App.css"
import { AppContainer } from "./App.styles";

//components
import ExpenseForm from "./components/ExpenseForm/ExpenseForm"
import Summary from "./components/Summary/Summary";


function App() {
  return (
    <AppContainer>
      <h1 style={{fontSize:48}}>Expenses calculator</h1>
      <section className="wrapper">
        <aside>
          <ExpenseForm/>
          <Summary/>
        </aside>
        {/* <ExpensesList/> */}
        <div></div>
      </section>
    </AppContainer>
  );
}

export default App;
