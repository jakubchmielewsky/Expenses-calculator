import React,{ useContext } from "react";

//style
import { ExpenseItemContainer } from "./ExpenseItem.style";

//components
import Button from "../Shared/Button";

//context
import { ExpenseContext } from "../../context/ExpenseContext";


export default function ExpenseItem({expense}){
    const {removeExpense}=useContext(ExpenseContext);

    const handleDeleteButton=()=>{
        removeExpense(expense.id);
    }

    return(
        <ExpenseItemContainer>
            <div className="expense-details">
                <h4>{expense.title}</h4>
                <small>{expense.date}</small>

            </div>
            <div className="amount">
                {`${expense.amount} $`}

            </div>
            <div className="buttons">
                <Button text="edit" style={{backgroundColor: 'yellow', color: 'black'}}/>
                <Button text="delete" style={{backgroundColor: 'red'}} onClick={handleDeleteButton}/>
            </div>
        </ExpenseItemContainer>
    )
}