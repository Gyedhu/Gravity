import styled from "styled-components";
import { colors } from "../../../assets/theme";

export const Container = styled.div`  
    display: flex;
    flex-direction: column;
    grid-gap: 5px;  
    
    & > * {
        border-radius: 50px;
        cursor: pointer;
        font-size: 1.5em; 
        outline: 0; 

        &:active {
            opacity: .5;
        }
    }
`;

export const Button = styled.button`
    background: ${colors.secondary};
    border: 0;
    color: ${colors.light};   
    height: 60px;
 
`;

export const SubButton = styled.button`
    background: ${colors.light};         
    border: 0;
    color: ${colors.secondary}; 
    text-decoration: underline;  
    height: 30px;
`;

