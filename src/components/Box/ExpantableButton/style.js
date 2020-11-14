import styled, { keyframes } from "styled-components";
import { colors } from "../../../assets/theme";

export const Container = styled.div`   
    display: flex;
    max-width: fit-content;
    position: relative;  
`;

export const Button = styled.button`   
    background: transparent;
    align-items: center;  
    border: 0; 
    display: flex; 
    width: fit-content;  
`;

export const Option = styled.div` 
    animation: ${keyframes`
        0% {
            transform: translateY(-20px);
        }
        100% {
            transform: translateY(0);
        }
    `} .2s;
    background: ${colors.light};  
    box-shadow: 0 2px 6px rgba(0, 0, 0, .25);
    display: flex; 
    flex-direction: column; 
    position: absolute; 
    right: 0px ;
    top: calc(100% + 10px);    
    z-index: 2;
    
    & > button { 
        background: ${colors.light};
        border: 0;
        border-bottom:  1px solid ${colors.primary}50;  
        flex: 1;
        font-size: 1.5em;
        margin: 0 5px;
        padding: 10px 20px;
    }
    
    & > button:last-child {   
        border: 0;
    }  
`;

