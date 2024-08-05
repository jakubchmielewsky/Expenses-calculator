import React from "react";
import { ButtonContainer } from "./Shared.styles";

export default function Button({text="click",onClick,icon,style}){
    return(
        <ButtonContainer onClick={onClick} style={style}>
            {icon} {text}
        </ButtonContainer>
    )
}