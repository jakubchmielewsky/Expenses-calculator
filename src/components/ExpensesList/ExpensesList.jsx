import React, { useContext,useEffect } from "react";

//components
import ExpenseItem from "../ExpenseItem/ExpenseItem";

//context
import { ExpenseContext } from "../../context/ExpenseContext";

//style
import { ExpensesListContainer } from "./ExpensesList.style";
import Button from "../Shared/Button";

export default function ExpensesList() {
    const {expenses}= useContext(ExpenseContext);

    useEffect(()=>{
        localStorage.setItem("expenses",JSON.stringify(expenses));
    },[expenses]);

    

    return(
        <ExpensesListContainer>
            <ul className="items">
                {
                    expenses.map((expense)=>(
                        <ExpenseItem expense={expense} key={expense.id}/>
                    ))
                }
                
                
            </ul> 
            <Button className="deleteAll" text="Delete all" style={{backgroundColor: 'red'}}/>
        </ExpensesListContainer>
    )
}