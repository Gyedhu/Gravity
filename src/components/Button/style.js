import styled, { keyframes } from "styled-components";
import { colors } from "../../assets/theme";

export const Container = styled.button` 
    border: 1px solid green;
    background: ${props => props.link ? "transparent" : colors.secondary};  
    border: 0; 
    color: ${props => props.link ? colors.primary : colors.light};    
    cursor: pointer;
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 1.5em;
    height: ${props => props.link ? "fit-content" : "50px"};
    outline: 0;
    margin: ${props => props.link ? "15px 0" : "30px 0 0 0"}; 
    position: relative;
    text-align: center;
    text-decoration: ${props => props.link ? "underline" : "none"};
    
    width: 100%; 

    &:active {
        opacity: .5;
    }
`;

const spinning = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(180deg);
    }
`;

export const LoadingLogo = styled.span`  
    animation: ${spinning} 1s infinite;
    color: ${colors.light};
    font-size: 1.5em;
    position: absolute;
    right: 15px;
`;
