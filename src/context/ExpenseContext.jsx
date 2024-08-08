import React,{createContext, useState} from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({children}) =>{
    const [expenses, setExpenses] = useState([]);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const removeExpense= (index) => {
        setExpenses(expenses.filter((_,i) => i !== index));
    };

    return(
        <ExpenseContext.Provider value={{expenses, addExpense, removeExpense}}>
            {children}
        </ExpenseContext.Provider>
    );
};