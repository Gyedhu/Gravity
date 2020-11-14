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

export const Select = styled.select` 
     appearance: none;
    background: ${colors.secondary}25;  
    border: 0; 
    color: ${colors.primary}; 
    display: flex;
    font-size: 1.6em;
    height: 50px;
    outline: 0;
    padding: 0 20px;  
`;

export const ExpandIcon = styled.i` 
    color: ${colors.primary};
    font-size: 2.5em;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
`;

