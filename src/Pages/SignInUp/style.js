import styled from "styled-components";
import { colors, mediaQuery } from "../../assets/theme";

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
        font-size: 1.5em;
        letter-spacing: 3px;
        margin: 0;
        text-align: center;
    }

    & > h1 {
        font-size: 3em;
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

export const Form = styled.div` 
    background: ${colors.light};
    border-top: 10px solid ${colors.secondary};
    box-shadow: 0 5px 7px rgba(0, 0, 0, .25); 
    display: flex;
    flex-direction: column;
    font-family: "Expletus Sans"; 
    min-height: 500px;
    overflow: auto;
    padding: 60px 20px;
    width: 300px;

    @media (max-width: ${mediaQuery.mobile}) { 
        height: 100%;
        padding:  10px;
        width: 100%;
    }
`;

export const FormHeader = styled.h1`
    color: ${colors.tertiary};
    font-size: 3em;
    margin: 0 0 50px 0;


    @media (max-width: ${mediaQuery.mobile}) { 
        font-size: 2.5em;
        margin: 0 0 20px 0;
    }
`;

export const Label = styled.label`
    color: ${colors.tertiary};
    font-size: 1.4em;
    padding: 5px 0;
`;

export const Input = styled.input`
    border: 1px solid ${colors.tertiary};
    font-size: 1.4em;
    font-family: inherit;
    margin-bottom: 20px;
    padding: 10px;
    outline: 0;
`;

export const SubmitButton = styled.button`
    background: ${colors.secondary};
    border: 0;
    color: ${colors.light};
    cursor: pointer;
    font-size: 1.2em;
    padding: 15px;
    outline: 0;

    &:active{
        opacity: .5;
    }
`;

export const Image = styled.img` 
    align-self: center; 
    margin: 20px 0 10px 0;
    width: 60px;

    & + h3 {
        color: ${colors.tertiary};
        font-family: "Piedra";
        font-size: 1.5em;
        margin: 0 0 50px 0;
        text-align: center;
    }

    @media (min-width: ${mediaQuery.mobile}) {
        display: none;

        & + * {
            display: none;
        }
    }
`;  
