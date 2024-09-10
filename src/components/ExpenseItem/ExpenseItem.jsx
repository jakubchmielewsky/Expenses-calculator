import React from "react";

//style
import { ExpenseItemContainer } from "./ExpenseItem.style";

//components
import Button from "../Shared/Button";

export default function ExpenseItem({expense}){
    return(
        <ExpenseItemContainer>
            <div className="expense-details">
                <h4>{"title"}</h4>
                <small>{"date"}</small>

            </div>
            <div className="amount">
                {`amount $`}

            </div>
            <div className="buttons">
                <Button text="edit" style={{backgroundColor: 'yellow', color: 'black'}}/>
                <Button text="delete" style={{backgroundColor: 'red'}}/>
            </div>
        </ExpenseItemContainer>
    )
}