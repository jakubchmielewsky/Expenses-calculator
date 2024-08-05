import styled from "styled-components"

export const ButtonContainer=styled.button`
    margin: 0.25rem 0.125rem;
  padding: 0.35rem 1.25rem;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.6px;
  border-radius: 0.3rem;
  color: #fff;
  background-color: #000;
  border: none;
  box-shadow: 0 2px 5px rgba(51, 51, 51, 0.3);
  transition: 0.3s ease;
`

export const InputGroupContainer=styled.div`
    margin-top: 10px;
    margin-bottom: 1rem;
    width: 100%;

    label{
        display: block;
        font-weight: 600;
        margin-bottom: 0.3rem;
        text-align: left;
    }

    input{
        border-radius: 5px;
        border: 1px solid white;
        padding: 0.4rem;
        width: 100%;
    }
    
`