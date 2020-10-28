import styled, { keyframes } from "styled-components";
import { colors, mediaQuery } from "../../assets/theme";

const pop_animation = keyframes`
    0% {
        transform: translateY(-30px);
    }
    100% {
        transform: translateY(0px);
    }
`;

export const Container = styled.div` 
    animation: ${pop_animation} 1s;
    align-items: center;  
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 50vw;

    @media (max-width: ${mediaQuery.tablet}) {
        display: none;
    }
`;

export const Image = styled.img`  
    height: 120px;  
    width: 120px; 
`;

export const MainHeader = styled.h1`
    color: ${colors.primary};
    font-family: "Piedra", "cursive";
    font-size: 4em;
    letter-spacing: 2px;
    margin: 0;
    text-align: center; 
`;

export const SubHeader = styled.h1`
    color: ${colors.primary};
    font-family: "Piedra", "cursive";
    font-size: 2em;
    letter-spacing: 2px;
    margin: 0; 
`;
