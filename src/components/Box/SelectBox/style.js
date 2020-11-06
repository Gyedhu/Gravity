import styled from "styled-components";
import { colors } from "../../../assets/theme";

export const Container = styled.div`   
    border: 0;
    display: flex; 
    flex-direction: column;
    margin-bottom: 10px; 
    overflow: hidden;
    position: relative;
`;

export const Select = styled.select` 
    background: ${colors.secondary}25;  
    border: 0;
    border-radius: 50px;
    color: ${colors.primary}; 
    display: flex;
    font-size: 2em;
    height: 60px;
    outline: 0;
    padding: 0 20px; 

    &:focus {
        border: 1px solid ${colors.primary}50;
    }
`;


