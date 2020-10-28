import styled, { keyframes } from "styled-components";
import { colors } from "../../../assets/theme";

export const Container = styled.div`   
    display: flex;
    font-family: 'Noto Sans TC', sans-serif;
    flex-direction: column;
    position: relative;
    
    & > * {
        box-sizing: border-box;
    }
`;

export const Label = styled.label`
    font-size: 1.4em;
`;

export const InputBox = styled.input`  
    border: 0; 
    background: ${colors.tertiary}05;
    border-bottom: 2px solid ${colors.secondary};
    font-size: 1.7em;
    font-family: inherit; 
    height: 50px;
    margin-bottom: 15px;
    padding: 0 10px;
    outline: 0; 
    transition: .5s;  
    width: 100%;
`;


export const Select = styled.select`  
    border: 0; 
    background: ${colors.tertiary}05;
    border-bottom: 2px solid ${colors.secondary};
    font-size: 1.7em;
    font-family: inherit; 
    height: 50px;
    margin-bottom: 15px;
    padding: 0 10px;
    outline: 0; 
    transition: .5s;  
    width: 100%;
`;

const messageAnimation = keyframes`
    0% {
        transform: translateY(0%);
    }
    100% {
        transform: translateY(-50%);
    }
`;

export const Message = styled.div` 
    animation: ${messageAnimation} .75s;
    background: ${colors.secondary};
    border-radius: 50px;
    top: 0;
    color: ${colors.light}; 
    font-size: 1.2em;
    max-width: 80%;
    padding: 10px;
    position: absolute; 
    right: 0;
    text-align: center;
    transform: translateY(-50%);
    width: fit-content;
`;

export const Pointer = styled.div`
    background: ${colors.secondary};
    border-radius: 4px;
    bottom: -5px; 
    height: 15px;
    left: 25px;
    transform: rotate(45deg);
    position: absolute;
    width: 15px;
`;
