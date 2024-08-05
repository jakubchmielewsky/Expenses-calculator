import React from "react";
import { ExpenseFormContainer } from "./ExpenseForm.style";
import Button from "../Shared/Button";
import InputGroup from "../Shared/InputGroup"

export default function ExpenseForm(params) {
    return (
        <ExpenseFormContainer>
            <InputGroup label={"Date"} />
            <InputGroup label={"Expense"}/>
            <InputGroup label={"Amount"}/>
            <Button style={{backgroundColor: 'green'}} text="Add"/>
        </ExpenseFormContainer>
    )
}