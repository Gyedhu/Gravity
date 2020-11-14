import styled from "styled-components";
import { colors } from "../../../assets/theme";

export const Button = styled.div`  
    align-items: center;    
    border-radius: 50px;
    color: ${colors.primary}; 
    cursor: pointer; 
    display: flex;   
    justify-content: space-between;   
    padding: 5px;
    transition: .2 s;
    user-select: none; 

    &:active {
        opacity: .5;
    }
`;

export const FilterIcon = styled.i`  
    font-size: 3em;
    transform: rotate(${props => props.expand ? 180 : 0}deg);
    transition: .25s; 
`;

export const FilterText = styled.p`   
    font-size: 1.5em;
    overflow: hidden;
    transition: .5s;
    width: ${props => props.showLabel ? 100 : 0}px;  
`;
