import styled from "styled-components";
import { colors } from "../../assets/theme";

export const Container = styled.button` 
    border: 1px solid green;
    background: ${props => props.type === "link" ? "transparent" : colors.secondary};
    border: 0;
    color: ${props => props.type === "link" ? colors.primary : colors.light};   
    cursor: pointer;
    font-family: "Expletus Sans";
    font-size: 1.4em;
    outline: 0;
    margin: ${props => props.type === "link" ? "10px" : 0};
    padding: ${props => props.type === "link" ? 0 : "15px"};
    text-decoration: ${props => props.type === "link" ? "underline" : "none"};
    width: 100%; 

    &:active {
        opacity: .5;
    }
`;
