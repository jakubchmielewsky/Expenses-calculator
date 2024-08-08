import React from "react";
import { SummaryContainer } from "./Summary.style";

//components
import InputGroup from "../Shared/InputGroup";

export default function Summary(){
    return(
        <SummaryContainer>
            <InputGroup label={"Budget $ "} type={"number"} placeholder={"set your budget"}/>
            <h4>Total expenses $ {"XXX"}</h4>
            <h4>Economies $ {"XXX"}</h4>
        </SummaryContainer>
    )
}