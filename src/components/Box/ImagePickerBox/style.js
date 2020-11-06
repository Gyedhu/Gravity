import styled from "styled-components";
import { colors } from "../../../assets/theme";

export const Container = styled.div`   
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
    width: fit-content;
`;

export const Image = styled.div`
    background: url(${props => props.url}) center center;
    background-size: cover; 
    border: 1px solid #EEE;
    height: 200px;
    position: relative;
    width: 200px; 
`;

export const AddButton = styled.button` 
    border: 0;
    color: ${colors.light};
    font-size: 10em;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`;

export const Buttons = styled.div` 
    display: flex;
    justify-content: space-between;

    & > button:nth-child(1) {
        background: ${colors.secondary};
        border: 0;
        color: ${colors.light};
        font-size: 1.5em;
        padding: 10px 20px;
    }

    & > button:nth-child(2) {
        background: transparent;
        border: 0;
        font-size: 1.5em;
        text-decoration: underline;
    }
`;

export const Label = styled.div`
    color: ${ colors.primary};
    font-size: 1.5em;
    padding: 10px 0;
`;

export const PickButton = styled.button`
    align-items: center;
    background: ${colors.light};
    border: 1px dashed ${colors.secondary};
    display: flex;

    & > i { 
        color: ${ colors.secondary}; 
        font-size: 2em;
        padding: 10px;
    }

    & > span { 
        color: ${ colors.primary}; 
        font-size: 1.5em;
        padding: 10px;
    }
`;

