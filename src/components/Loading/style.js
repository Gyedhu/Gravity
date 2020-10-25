import styled, { keyframes } from "styled-components";
import { colors } from "../../assets/theme";

const loadingPopup = keyframes`
    0% { transform: translate(-50%,  0) scale3d(0.8,0.8,1); } 
    100% { transform: translate(-50%, 30px) scale3d(1,1,1); }
`;

export const Container = styled.div`
    animation: ${loadingPopup} .5s forwards;
    align-items: center; 
    background: ${colors.secondary}ee;
    border-radius: 50px;
    box-sizing: border-box;  
    color: ${colors.light};
    display: flex;
    font-family: "Noto Sans TC", "sans-serif";
    flex-direction: row;  
    height: fit-content;
    justify-content: center;
    left: 50%;
    max-width: 80%;
    overflow: hidden;
    padding: 10px 20px;
    position: absolute;
    top: 0; 
    transform: translate(-50%, 0%);
    width: fit-content; 
    z-index: 2;
`;

const spinning = keyframes`
    0% {
        transform: rotate(0deg);
    } 
    100%{
        transform: rotate(360deg);
    }
`;

export const LoadingIcon = styled.span`
    animation: ${spinning} 1s infinite;  
    border-radius: 50px;
    font-size: 2em; 
`;

export const LoadingText = styled.span` 
    font-size: 1.2em;
    font-weight: bold;  
    margin-left: 10px; 
`; 
