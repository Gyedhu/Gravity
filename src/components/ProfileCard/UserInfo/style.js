import styled from "styled-components";
import { colors, mediaQuery } from "../../../assets/theme";

export const Container = styled.div` 
    color: ${colors.light};
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-gap: 5px;  

    & > * {
        animation: fade_pop_up .5s;
        margin: 0;
    }

    @media (max-width: ${mediaQuery.mobile}) { 
        align-items: center; 
    }
`;

export const BigText = styled.p`  
    font-size: 2.5em; 
`;

export const Text = styled.p` 
    color: ${colors.light};
    font-size: 1.5em; 
`;

export const StarContainer = styled.div`  
    display: flex;
    grid-gap: 5px;
`;

export const Star = styled.div`
    color: ${props => props.active ? colors.light : colors.primary + "50"};
    font-size: 2em;
`; 
