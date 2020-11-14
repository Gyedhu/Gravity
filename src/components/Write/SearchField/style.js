import styled from "styled-components";
import { colors, mediaQuery } from "../../../assets/theme";

export const Container = styled.div`    
    color: ${colors.primary};
    display: flex; 
    flex: 1;
`;

export const Input = styled.input`     
    border: 0;
    border-right: 1px solid ${colors.primary}80;
    flex: 1;
    font-size: 2em;  
    margin: 5px 0;
    min-width: 10px;
    overflow: hidden;
        width: 100%;
 
    @media (max-width: ${mediaQuery.mobile}) { 
    }

`;

export const SearchIcon = styled.i`
    align-items: center;    
    color: ${colors.primary};
    display: flex;
    font-size: 2em;   
    justify-content: center;
    padding: 20px;
`;
