import React, { useContext } from "react";

//components
import ExpenseItem from "../ExpenseItem/ExpenseItem";

//context
import { ExpenseContext } from "../../context/ExpenseContext";

//style
import { ExpensesListContainer } from "./ExpensesList.style";
import Button from "../Shared/Button";

export default function ExpensesList() {
    const {expenses}= useContext(ExpenseContext);
    return(
        <ExpensesListContainer>
            <ul className="items">
                <ExpenseItem/>
                <ExpenseItem/>
                <ExpenseItem/>
            </ul> 
            <Button className="deleteAll" text="Delete all" style={{backgroundColor: 'red'}}/>
        </ExpensesListContainer>
    )
}