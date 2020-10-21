import styled from "styled-components";
import { colors } from "../../assets/theme";

export const Container = styled.div`  
    display: flex;
    font-family: "Expletus Sans";
    flex-direction: column;
`; 

export const InputBox = styled.input`
    background: #fafafa;
    border: 0;
    border-bottom: 2px solid ${colors.secondary};
    font-size: 1.5em;
    font-family: inherit;
    margin-bottom: 30px;
    outline: 0;
    padding: 15px;
    transition: .5s;
`;
