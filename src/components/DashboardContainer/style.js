import styled, { keyframes } from "styled-components";
import { colors, mediaQuery } from "../../assets/theme";


export const Container = styled.div`  
    box-sizing: border-box;
    display: flex;
    ${'' /* display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;  */}
    flex: 1; 
    flex-wrap: wrap;
    grid-gap: 2px;      
    width: 100%;    

    @media (max-width: ${mediaQuery.mobile}){
        padding: 0 5px;
    }
`;

export const Box = styled.div` 
    animation: ${keyframes`
        0% {
            transform: scale(0);
            opacity: .2;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    `} .5s ${props => props.delay}s forwards;
    align-items: center;   
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    flex: 1;   
    opacity: .2;
    padding: 20px;
    transform: scale(0);
    transition: .5s;
    user-select: none;

    & > span {
        align-items: center;  
        background: ${colors.secondary};
        border-radius: 50%;
        color: ${colors.light}; 
        display: flex;
        font-size: 2.5em; 
        height: 50px;
        justify-content: center; 
        margin: 0 5px;
        padding: 5px;
        width: 50px;
    }

    & > span:last-child {
        background: transparent;
        color: ${colors.primary};
        font-family: Bellefair;
        font-size: 2em;
        font-weight: bold; 
    }

    &:active {
        opacity: .2;
    }
`;

