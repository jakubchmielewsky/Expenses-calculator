import styled from "styled-components";

export const SummaryContainer=styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: end;
    background-color: lightgray;
    padding: 15px;
    margin-top: 20px;
    border-radius: 10px;

    div{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 15px;
        font-size: 1.1rem;

        input{
            width: 100px;
        }
        
    }


    
`