import styled, { keyframes } from "styled-components";
import { colors } from "../../../assets/theme";

export const Container = styled.div` 
    align-items: center;
    animation: ${keyframes`
        0% {
            transform: translate(-50%, 20px);
        }
    `} .5s;
    background: ${colors.secondary}ee;
    border: 1px solid ${colors.light}; 
    box-sizing: border-box;
    color: ${colors.light};
    display: flex; 
    font-family: 'Noto Sans TC', sans-serif; 
    height: fit-content;
    justify-content: center;
    left: 50%;
    max-width: 350px;
    padding: 10px;
    position: fixed;
    top: 10px;
    transform: translate(-50%, 0);
    width: 95%; 
    z-index: 2;
`;

export const NotificationText = styled.span`
    font-size: 1.2em;
    font-weight: bold;  
    margin-left: 10px; 
`;
