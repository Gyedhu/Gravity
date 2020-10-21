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
    background: ${colors.light};   
    height: 100vh;  
    position: relative;
    width: 100vw;  

    & * {
        box-sizing: border-box;
    }
`;

export const Header = styled.div` 
    animation: ${pop_animation} .75s forwards;
    align-items: center; 
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    position: absolute;
    width: 50vw;

    & > * {  
        color: ${colors.primary};
        font-family: 'Piedra', cursive;
        font-size: 2.5em;
        letter-spacing: 3px;
        margin: 0;
        text-align: center;
    }

    & > h1 {
        font-size: 4em;
    } 

    @media (max-width: ${mediaQuery.tablet}) {
        display: none;
    }
`;

export const FormContainer = styled.div` 
    align-items: center; 
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    left: 50vw;
    overflow: hidden;
    position: absolute;  
    transition: ${props => props.duration ? props.duration : 1}s;
    width: ${props => props.show ? "50vw" : "0vw"};

    @media (max-width: ${mediaQuery.tablet}) { 
        left: 0;
        width: ${props => props.show ? "100vw" : "0vw"};
    }
`;

export const Form = styled.form`    
    animation: ${pop_animation} .75s;
    background: ${colors.light}; 
    border-top: 10px solid ${colors.secondary};
    box-shadow: 0 5px 7px rgba(0, 0, 0, .25);   
    display: flex;
    flex-direction: column;
    font-family: "Expletus Sans";   
    max-height: 90%;
    min-width: 300px;
    padding: 60px 20px; 

    @media (max-width: ${mediaQuery.mobile}) {  
        box-shadow: none;   
        min-height: 100%;
        padding:  20px;
        width: 100%;
    }
`;

export const FormHeader = styled.h1`
    color: ${colors.primary};
    font-size: 3em;
    margin: 0 0 30px 0; 

    @media (max-width: ${mediaQuery.mobile}) { 
        font-size: 2.5em;
        margin: 0 0 20px 0;
    }
`;

export const Label = styled.label`
    color: ${colors.primary};
    font-size: 1.4em;
    padding: 5px 0;
`;

export const Input = styled.input`
    background: #fafafa;
    border: 0;
    border-bottom: 2px solid ${colors.secondary};
    font-size: 1.5em;
    font-family: inherit;
    margin-bottom: 20px;
    outline: 0;
    padding: 12px;
    transition: .5s;
`;

export const SubmitButton = styled.button`
    background: ${colors.secondary};
    border: 0;
    color: ${colors.light};
    cursor: pointer; 
    font-size: 1.8em;
    margin-top: 20px;
    outline: 0;
    padding: 12px;

    &:active{
        opacity: .5;
    }
`;

export const MobileHeader = styled.h1`  
        color: ${colors.primary};
        font-family: inherit;
        font-size: 4em;
        letter-spacing: 1px;
        margin: 20px 0 5px 0;
        text-align: center; 

    & + h2 {
        color: ${colors.primary};
        font-family: inherit; 
        font-size: 1.5em;
        letter-spacing: inherit;
        margin: 0 0 50px 0;
        text-align: center;
    }
        
    @media (min-width: ${mediaQuery.mobile}) {
        display: none;  

        & + h2 {
            display: none;
        }
    }
`;

export const Link = styled.button`
    background: none;
    border: 0;
    color: ${colors.secondary};
    cursor: pointer;
    font-family: inherit;
    font-size: 1.5em;
    margin-top: 20px;
    outline: 0;
    text-decoration: underline;

    &:active {
        opacity: .5;
    }
`;
