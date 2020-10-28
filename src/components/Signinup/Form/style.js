import styled, { keyframes } from "styled-components";
import { colors, mediaQuery } from "../../../assets/theme";

const pop_animation = keyframes`
    0% { transform: translateY(-30px); }
    100% { transform: translateY(0px); }
`;

export const Container = styled.div`   
    align-items: center; 
    box-sizing: border-box; 
    display:   ${props => props.show ? "flex" : "none"};
    flex-direction: column;
    font-family: 'Noto Sans TC', sans-serif;
    height: 100%; 
    overflow: auto; 
    position: absolute;
    top: 0;  
    transition: display .5s;  
    width: ${props => props.show ? "100vw" : "0vw"};   
`;

export const FormBox = styled.form`  
    animation: ${pop_animation} 1s;     
    box-sizing: border-box; 
    display: flex; 
    height: fit-content;
    flex-direction: column; 
    padding: 0 15px 30px 15px;
    width: 400px;   
 

    @media (max-width: ${mediaQuery.tablet}) {  
        width: 100%;
    }
`;

export const Header = styled.div`  
    align-items: center; 
    box-sizing: border-box;
    color: ${colors.primary};
    display: flex;  
    flex-direction: column; 
    justify-content: center;    
    margin: 20px 0;

    & > * {
        color: ${colors.tertiary};
        margin: 0;
    }

    & > img {
        height: 40%;
    }

    & > p:nth-child(2) { 
        font-size: 3em;
        font-weight: bold;
    } 

    & > p:nth-child(3) {  
        font-size: 1.5em
    }
`;
