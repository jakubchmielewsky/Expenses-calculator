import React,{ useContext } from "react";

//style
import { ExpenseItemContainer } from "./ExpenseItem.style";

//components
import Button from "../Shared/Button";

//context
import { ExpenseContext } from "../../context/Context";


export default function ExpenseItem({expense}){
    const {expenses,removeExpense,setDate,setTitle,setAmount,setId,setEdit}=useContext(ExpenseContext);

    const handleDelete=()=>{
        removeExpense(expense.id);
    }

    const handleEdit=()=>{
        let editedExpense = expenses.find((exp)=> exp.id===expense.id);
        setDate(editedExpense.date);
        setTitle(editedExpense.title);
        setAmount(editedExpense.amount);
        setId(expense.id);
        setEdit(true);
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
                <Button text="edit" style={{backgroundColor: 'yellow', color: 'black'}} onClick={handleEdit}/>
                <Button text="delete" style={{backgroundColor: 'red'}} onClick={handleDelete}/>
            </div>
        </ExpenseItemContainer>
    )
}