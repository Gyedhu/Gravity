import styled from "styled-components";
import { colors } from "../../../assets/theme";

export const Container = styled.div`   
    border: 1px solid ${colors.primary}50;
    border-radius: 50px;
    display: flex; 
    flex-direction: column;
    margin-bottom: 10px; 
    overflow: hidden;
    position: relative;
`;

export const Input = styled.input`
    background: transparent;
    background: ${colors.secondary}25; 
    border: 0;  
    color: ${colors.primary}; 
    font-size: 1.6em;
    height: 50px;
    outline: 0;
    padding: 0 20px;
    width: 100%; 

    &::placeholder {
        color: ${colors.primary}80;
    }
`;

export const Error = styled.span`
    color: tomato;
    font-size: 1.5em;
    padding: 10px;
`;

