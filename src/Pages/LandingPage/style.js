import styled from "styled-components";
import { colors, mediaQuery } from "../../assets/theme";

export const Container = styled.div`
    align-items: center;
    background: ${colors.primary};
    color: ${colors.light};
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    width: 100vw;

    & > * { 
        box-sizing: border-box;
        font-family: 'Piedra', cursive;
        font-size: 4em;
        letter-spacing: 5px;
        margin: 0; 
        text-shadow: 0 5px 10px rgba(0, 0, 0, .25);
    }

    @media (max-width: ${mediaQuery.mobile}) {
        & > * {
            font-size: 2em;
        }
    }
`;

export const Image = styled.img`  
    height: 150px;
    margin: 20px; 
    width: 150px;

    @media (max-width: ${mediaQuery.mobile}) {
        height: 100px;
        width: 100px;
    }
`; 
