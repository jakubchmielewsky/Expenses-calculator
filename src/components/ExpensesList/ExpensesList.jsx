import React, { useContext,useEffect } from "react";

//components
import ExpenseItem from "../ExpenseItem/ExpenseItem";

//context
import { ExpenseContext } from "../../context/Context";

//style
import { ExpensesListContainer } from "./ExpensesList.style";
import Button from "../Shared/Button";

export default function ExpensesList() {
    const {expenses,setExpenses}= useContext(ExpenseContext);

    useEffect(()=>{
        localStorage.setItem("expenses",JSON.stringify(expenses));
    },[expenses]);

    const handleDeleteAll=()=>{
        setExpenses([]);
    };

    

    return(
        <ExpensesListContainer>
            <ul className="items">
                {
                    expenses.map((expense)=>(
                        <ExpenseItem expense={expense} key={expense.id}/>
                    ))
                }
                
                
            </ul> 
            {expenses.length>0 && <Button className="deleteAll" text="Delete all" style={{backgroundColor: 'red'}} onClick={handleDeleteAll}/>}
        </ExpensesListContainer>
    )
}