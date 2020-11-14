import styled from "styled-components";
import { colors } from "../../../assets/theme";

export const Container = styled.div` 
    display: flex;
    flex-direction: column;
    grid-gap: 5px;  
    
    & > * {   
        cursor: pointer;
        font-size: 1.5em; 
        outline: 0; 

        &:active {
            opacity: .5;
        }
    }
`;

export const Button = styled.button`
    background: ${colors.secondary}ee;
    border: 0;
    border-radius: 50px; 
    color: ${colors.light};   
    height: 50px;
 
`;

export const SubButton = styled.button`
    background: ${colors.light};         
    border: 0;
    color: ${colors.secondary}; 
    text-decoration: underline;  
    height: 50px;
`;

