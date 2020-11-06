import styled from "styled-components";
import { colors, mediaQuery } from "../../../assets/theme";

export const Container = styled.div` 
    align-items: center; 
    cursor: pointer;
    display: flex;
    flex: 1; 
    grid-gap: 10px;
    min-width: 250px;  
    transition: .5s;
    user-select: none;

    &:active {
        opacity: .25;
    }
    
    @media (max-width: ${mediaQuery.tablet}) {
        padding: 20px;
    }
`;

export const Icon = styled.i`
    align-items: center;
    background: ${colors.secondary};
    border-radius: 25%;
    color: ${colors.light};
    display: flex;
    font-size: 3em; 
    height: 80px;
    justify-content: center;
    width: 80px;
`;

export const TextContent = styled.div`  
    color: ${colors.primary};
    display: flex;
    flex: 1;
    flex-direction: column; 

    & > * {
        margin: 0;
    }
`;

export const BigText = styled.p`  
    flex: 1;
    font-size: 2em;       
`;

export const Text = styled.p`   
    color: ${colors.primary}D0; 
    font-size: 1.5em;  
`;

