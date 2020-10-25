import styled from "styled-components";
import { colors, mediaQuery } from "../../assets/theme";

export const Container = styled.div`  
    box-sizing: border-box;  
    display: flex;  
    height: fit-content;    
    overflow: hidden;  
    position: relative;
    transition: .5s;
    width: 100%;


    & > span {
        align-items: center;
        background-color: #0005;
        box-shadow: 0 0 5px rgba(0, 0, 0, .3);
        border-radius: 50%;
        color: ${colors.light}; 
        display: none;
        justify-content: center;
        font-size: 3em;
        height: 45px;
        position: absolute;
        right: calc(50% + 20px); 
        transform: translateX(${props => props.page === 1 ? 0 : 200}%); 
        transition: transform .5s;
        top: 50%;
        width: 45px;
    } 

    @media (max-width: ${mediaQuery.tablet}) {  
        width: 200%;
        position: relative;
        transform: translateX(${props => props.page === 1 ? 0 : "-50%"}); 

        & > span {
            display: flex;  
        } 

        & > * {
            margin: 0 5px;
        }
    }
`; 
