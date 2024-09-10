import {styled} from "styled-components"

export const AppContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;

    .wrapper {
        display: grid;
        grid-template-columns: 2fr 3fr;
        margin: 1rem;
        gap: 25px;
    }
`