import React from "react";
import {InputGroupContainer} from "./Shared.styles";

export default function InputGroup({label,type, onChange,placeholder,value}){
    return(
        <InputGroupContainer >
            <label>{label}</label>
            <input type={type} onChange={onChange} placeholder={placeholder} value={value}/>
        </InputGroupContainer>
    )
}