import React, { useContext, useEffect, useState } from "react";
import {v4 as uuidV4} from "uuid";

//components
import { ExpenseFormContainer } from "./ExpenseForm.style";
import Button from "../Shared/Button";
import InputGroup from "../Shared/InputGroup"

//context
import { ExpenseContext } from "../../context/ExpenseContext";



export default function ExpenseForm(params) {
    const {addExpense,expenses} = useContext(ExpenseContext);

    const [date,setDate]= useState("");
    const [title,setExpense]= useState("");
    const [amount,setAmount]= useState("");



    const handleDateChange = (e)=>{
        setDate(e.target.value);
    };

    const handleExpenseChange = (e)=>{
        setExpense(e.target.value);
    };

    const handleAmountChange = (e)=>{
        setAmount(e.target.value);
    };

    const handleAddClick= ()=>{
        const newExpense= {id:uuidV4(),date,title,amount};
        addExpense(newExpense);

    }

    useEffect(()=>{
        expenses.forEach(element => {
            console.log(element.title);
        });
    }, [expenses])

    return (
        <ExpenseFormContainer>
            <InputGroup label={"Date"} onChange={handleDateChange} value={date} type={"date"}/>
            <InputGroup label={"Expense"} onChange={handleExpenseChange} value={title} type={"text"}/>
            <InputGroup label={"Amount"} onChange={handleAmountChange} value={amount} type={"number"}/>
            <Button style={{backgroundColor: 'green'}} text="Add" onClick={handleAddClick}/>
        </ExpenseFormContainer>
    )
}