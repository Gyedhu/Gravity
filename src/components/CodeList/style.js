import styled, { keyframes } from "styled-components";
import { colors, mediaQuery } from "../../assets/theme";

const popup = keyframes`
    0% {
        transform: scaleX(0);
        opacity: .2;
    }
    100% {
        transform: scaleX(1);
        opacity: 1;
    }
`

export const Container = styled.div` 
    background: ${colors.primary};   
    border-radius: 2px;
    display: flex;
    flex: 1;
    flex-direction: column; 
    height: 350px;   
    min-width: fit-content;
    overflow: hidden;  

    @media (max-width: ${mediaQuery.mobile}){
        margin: 0 5px;
    }

    &  * {
        box-sizing: border-box;
    }
`;

export const Header = styled.div` 
    background: ${colors.primary};  
    box-sizing: border-box; 
    color: ${colors.light};
    font-size: 2em;
    font-family: Bellefair;
    padding: 30px;
    width: 100%; 
`;

export const List = styled.div`  
    box-sizing: border-box;  
    display: flex;
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    flex-direction: column; 
    overflow: auto;
    width: 100%;  

    &::-webkit-scrollbar {
        display: none;
        width: .7em;
    } 
`;

export const CodeItem = styled.div` 
    animation: ${popup} .5s forwards;
    background: ${colors.primary};   
    cursor: pointer;
    display: flex;
    flex-direction: column; 
    height: fit-content; 
    margin: 10px;
    transition: .5s;
    user-select: none;

    & > span {
        ${'' /* background: ${props => props.language === "js" ? "dodgerblue" : props.language === "c++" ? "Seagreen" : "tomat"}; */}
        background: ${colors.light};
        color: ${colors.primary};
        font-size: 3em;
        padding: 5px;
    }

    &:active {
        opacity: .2;
    }
`;

export const CodeData = styled.div` 
    background: #FFF; 
    flex: 1;
    flex-direction: column;
    font-family: Bellefair;
    display: flex;  

    & > span { 
        border-bottom : 1px solid #BCD;
        color: ${colors.primary};
        font-size: 1.5em;
        padding: 5px;
    }

    & > div {
        color: ${colors.primary};
        display: flex;
        font-size: 1.5em;
        justify-content: space-between;
        padding: 5px; 
    }
`;


