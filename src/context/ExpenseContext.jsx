import React,{createContext, useState} from "react";

export const ExpenseContext = createContext();

const initialExpenses = localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")) :[];

export const ExpenseProvider = ({children}) =>{
    const [expenses, setExpenses] = useState(initialExpenses);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const removeExpense= (index) => {
        setExpenses(expenses.filter((expense) => expense.id !== index));
    };

    return(
        <ExpenseContext.Provider value={{expenses, addExpense, removeExpense}}>
            {children}
        </ExpenseContext.Provider>
    );
};