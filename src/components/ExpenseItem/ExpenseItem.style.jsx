import {styled} from "styled-components"

export const ExpenseItemContainer = styled.li`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    place-items: center;
    gap: 15px;
    background-color: lightgray;
    border-radius: 10px;
    padding: 5px;


    .small{
        color: red;
    }

    .amount{
        font-weight: 600;

    }

    .buttons{
        display: flex;
        flex-direction: column;
    }
` 