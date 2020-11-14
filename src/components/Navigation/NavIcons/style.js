import styled from "styled-components";
import { colors, mediaQuery } from "../../../assets/theme";

export const Container = styled.div`
    align-items: center; 
    color: ${colors.primary};
    display: flex;
    font-size: 1.8em;
    grid-gap: 30px;
    height: 100%;
    width: fit-content;
`;

export const Icon = styled.i`
    border-radius: 50%;
    cursor: pointer;
    padding: 10px;
    transition: .3s;

    &:hover {
        opacity: .5;
    }

    &:active {
        opacity: .25;
    }

    @media (max-width: ${mediaQuery.mobile}) {
        ${'' /* display: none; */}
    }
`;

export const MenuIcon = styled.i`
    border-radius: 50%;
    cursor: pointer;
    display: none; 
    padding: 10px;
    transition: .3s;

    &:hover {
        opacity: .5;
    }

    &:active {
        opacity: .25;
    }

    @media (max-width: ${mediaQuery.mobile}) {
        display: flex;
    }
`;
