import styled from "styled-components";
import { colors, mediaQuery } from "../../assets/theme";


export const Container = styled.div` 
    box-sizing: border-box;
    display: grid;
    flex: 1; 
    flex-wrap: wrap;
    grid-gap: 5px;   
    grid-template-columns: repeat(2, calc(1010px / 4));  
    grid-template-rows: repeat(2, calc(1010px / 4));  
    margin-right: 5px; 
    width: 100%;    

    @media (max-width: ${mediaQuery.tablet}) {   
        grid-template-columns: repeat(2, 1fr);  
        grid-template-rows: repeat(2, 1fr);  
        height: 100vw; 
    }
`;



export const Box = styled.div` 
    align-items: center;  
    background: white; 
    ${'' /* border-top: 5px solid ${colors.secondary}; */}
    cursor: pointer;
    display: flex;
    flex: 1; 
    flex-direction: column;
    justify-content: center; 
    transition: .5s;
    user-select: none;

    & > span {
        color: ${colors.secondary}; 
        font-size: 5em; 
        padding: 10px;
    }

    & > span:last-child {
        color: ${colors.tertiary};
        font-family: Bellefair;
        font-size: 2em;
        font-weight: bold;
    }

    &:active {
        opacity: .2;
    }
`;

