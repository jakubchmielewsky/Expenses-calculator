import React, { useContext, useState } from "react";

//components
import { ExpenseFormContainer } from "./ExpenseForm.style";
import Button from "../Shared/Button";
import InputGroup from "../Shared/InputGroup"

//context
import { ExpenseContext } from "../../context/ExpenseContext";



export default function ExpenseForm(params) {
    const {addExpense} = useContext(ExpenseContext);

    const [date,setDate]= useState("");
    const [expense,setExpense]= useState("");
    const [amount,setAmount]= useState("");

    const handleDateChange = (e)=>{
        setDate(e.target.value);
    };

    const handleExpenseChange = (e)=>{
        setExpense(e.target.value);
    };

    const handleAmountChange = (e)=>{
        setAmount(e.target.value);
        console.log(amount);
    };

    const handleAddClick= ()=>{

    }

    return (
        <ExpenseFormContainer>
            <InputGroup label={"Date"} onChange={handleDateChange} value={date} type={"date"}/>
            <InputGroup label={"Expense"} onChange={handleExpenseChange} value={expense} type={"text"}/>
            <InputGroup label={"Amount"} onChange={handleAmountChange} value={amount} type={"number"}/>
            <Button style={{backgroundColor: 'green'}} text="Add" onClick={handleAddClick}/>
        </ExpenseFormContainer>
    )
}