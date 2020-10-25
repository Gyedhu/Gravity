import styled from "styled-components";
import { colors } from "../../assets/theme";

export const Container = styled.div` 
    background: white; 
    box-sizing: border-box;
    ${'' /* border-top: 5px solid ${colors.secondary}; */}
    display: flex;
    flex: 1;
    flex-direction: column; 
    height: 100%;   
    overflow: hidden;  

    &  * {
        box-sizing: border-box;
    }
`;

export const Header = styled.div` 
    background: white;  
    box-sizing: border-box; 
    color: ${colors.primary};
    font-size: 2em;
    font-family: Bellefair;
    padding: 30px;
    width: 100%; 
`;

export const List = styled.div`  
    box-sizing: border-box;  
    display: flex;
    flex-direction: column; 
    overflow: auto;
    width: 100%; 

    & > div:nth-child(1) { 
        margin: 0 10px 10px 10px;
    } 

    &::-webkit-scrollbar {
        display: none;
        width: .7em;
    } 
`;

export const CodeItem = styled.div` 
    background: #BCD; 
    border: 1px solid #BCD;
    cursor: pointer;
    display: flex;
    flex-direction: column; 
    height: fit-content; 
    margin: 10px;
    transition: .5s;
    user-select: none;

    & > span {
        ${'' /* background: ${props => props.language === "js" ? "dodgerblue" : props.language === "c++" ? "Seagreen" : "tomat"}; */}
        background: ${colors.secondary};
        color: ${colors.light};
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


