import styled from "styled-components";
import { colors } from "../../../assets/theme";

export const Container = styled.div`    
    cursor: pointer;
    display: flex;
    flex: 1;  
    grid-gap: 10px; 
    min-width: 300px;    
    transition: .2s;
    user-select: none;   
    
    &:active {
        opacity: .2;
    }
`;

export const Icon = styled.i`
    align-items: center;
    background: ${colors.secondary}; 
    border-radius: 15%;
    color: ${colors.light};
    display: flex;
    font-size: 3.5em; 
    height: 80px;
    justify-content: center; 
    min-width: 80px;
`;

export const TextContent = styled.div`  
    align-self: flex-end; 
    background: transparent;
    color: ${colors.primary};   
    display: flex;
    flex-direction: column;
`;

export const BigText = styled.p`  
    color: ${colors.primary};  
    font-size: 2.2em;       
    cursor: pointer;
`;

export const Text = styled.p`   
    color: ${colors.primary}; 
    font-size: 1.4em;    
`;

