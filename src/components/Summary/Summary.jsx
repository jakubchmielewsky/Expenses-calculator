import React, { useContext, useEffect, useState } from "react";
import { SummaryContainer } from "./Summary.style";

//components
import InputGroup from "../Shared/InputGroup";

//context
import { ExpenseContext } from "../../context/ExpensesContext";

export default function Summary(){
    const {expenses} = useContext(ExpenseContext);

    const [budget,setBudget]= useState();

    const handleBudgetChange=(e)=>{
        setBudget(e.target.value);
    };


    return(
        <SummaryContainer>
            <InputGroup label={"Budget $ "} type={"number"} placeholder={"your budget"} value={budget} onChange={handleBudgetChange}/>
            <h4>Total expenses $ {calcTotalExpenses(budget,expenses)}</h4>
            <h4>Economies $ {budget-calcTotalExpenses(budget,expenses)}</h4>
        </SummaryContainer>
    )
};

function calcTotalExpenses(budget,expenses){
    return(
        expenses.reduce((total,expense)=>{
            return total +=parseInt(expense.amount,10);
        }, 0)
    )
};