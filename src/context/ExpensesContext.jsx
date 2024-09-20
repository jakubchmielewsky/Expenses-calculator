import React,{createContext, useState} from "react";

export const ExpenseContext = createContext();

const initialExpenses = localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")) :[];

export const ExpenseProvider = ({children}) =>{
    const [expenses, setExpenses] = useState(initialExpenses);

    //form state
    const [date,setDate]= useState("");
    const [title,setTitle]= useState("");
    const [amount,setAmount]= useState("");

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const removeExpense= (index) => {
        setExpenses(expenses.filter((expense) => expense.id !== index));
    };

    return(
        <ExpenseContext.Provider 
            value={{expenses, 
                addExpense, 
                removeExpense, 
                setExpenses,
                date,
                setDate,
                title,
                setTitle,
                amount,
                setAmount
            }}
        >
            {children}
        </ExpenseContext.Provider>
    );
};