import styled from "styled-components";
import { colors } from "../../assets/theme";

export const Container = styled.div` 
    align-items: center;
    align-self: center; 
    background-color: #EEE;
    background-image: url(${props => props.url}) ;
    background-position: center center;
    background-size: cover; 
    border-radius: 50%;
    color: ${colors.light};
    cursor: pointer;
    display: flex;  
    height: 200px;  
    justify-content: center; 
    width: 200px;   

    &:active {
        opacity: .5;
    }
`;
