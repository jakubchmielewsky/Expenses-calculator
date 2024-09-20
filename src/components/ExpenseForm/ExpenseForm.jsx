import React, { useContext} from "react";
import {v4 as uuidV4} from "uuid";

//components
import { ExpenseFormContainer } from "./ExpenseForm.style";
import Button from "../Shared/Button";
import InputGroup from "../Shared/InputGroup"

//context
import { ExpenseContext } from "../../context/Context";



export default function ExpenseForm() {
    const {expenses,setExpenses,addExpense,date,setDate,title,setTitle,amount,setAmount,edit,setEdit,id} = useContext(ExpenseContext);



    const handleDateChange = (e)=>{
        setDate(e.target.value);
    };

    const handleTitleChange = (e)=>{
        setTitle(e.target.value);
    };

    const handleAmountChange = (e)=>{
        setAmount(e.target.value);
    };

    const handleAdd= ()=>{
        const newExpense= {id:uuidV4(),date,title,amount};
        addExpense(newExpense);

        setTitle("");
        setAmount("");
    };

    const handleEdit=()=>{
        const tempExpenses=expenses.map(expense=> expense.id===id ? {...expense,date,title,amount} : expense);
        setExpenses(tempExpenses);

        setEdit(false);
    }

    

    return (
        <ExpenseFormContainer>
            <InputGroup label={"Date"} onChange={handleDateChange} value={date} type={"date"}/>
            <InputGroup label={"Expense"} onChange={handleTitleChange} value={title} type={"text"}/>
            <InputGroup label={"Amount"} onChange={handleAmountChange} value={amount} type={"number"}/>
            {edit?<Button style={{backgroundColor: 'green'}} text={"Edit"} onClick={handleEdit}/>:
            <Button style={{backgroundColor: 'green'}} text={"Add"} onClick={handleAdd}/>}
        </ExpenseFormContainer>
    )
}