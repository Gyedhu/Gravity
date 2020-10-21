import styled, { keyframes } from "styled-components";
import { colors, mediaQuery } from "../../assets/theme";

const pop_animation = keyframes`
    0% { transform: translateY(-30px); }
    100% { transform: translateY(0px); }
`;

export const Container = styled.div`  
    align-items: center; 
    box-sizing: border-box;
    display:   ${props => props.show ? "flex" : "none"};
    flex-direction: column;
    height: 100%;
    justify-content: center;  
    overflow: auto; 
    position: absolute;
    top: 0; 
    transition: display .5s;  
    width: ${props => props.show ? "100vw" : "0vw"}; 
`;


export const Header = styled.div`
    align-items: center;  
    box-sizing: border-box;
    color: ${colors.primary};
    display: flex;
    font-family: "Expletus Sans";
    flex-direction: column; 
    justify-content: center;  
    margin: 40px 0 20px 0;
    width: 100%;

    & > * { margin: 0; }

    & > h1 { font-size: 4em; }

    & > h2 {
        font-size: 1.5em;
        margin-bottom: 30px;
    }

    & > p {
        align-self: flex-start;
        font-size: 2.4em;
    } 
`;

export const FormBox = styled.form`
    animation: ${pop_animation} 1s;
    background: ${ colors.light};
    border-top: 10px solid ${colors.secondary};
    box-shadow: 0 5px 7px rgba(0, 0, 0, .25);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-family: "Expletus Sans";
    max-height: fit-content;
    min-width: 350px; 
    padding: 0 20px 30px 20px;

    @media (max-width: ${mediaQuery.tablet}) {
        box-shadow: none;
        min-height: 100%; 
        min-width: 100%
    }
`;
