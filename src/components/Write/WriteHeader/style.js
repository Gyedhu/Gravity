import styled from "styled-components";
import { colors } from "../../../assets/theme";

export const Container = styled.div`
    align-items: center;
    background: ${colors.light}; 
    color: ${colors.primary};   
    display: flex;
    flex-direction: column;
    grid-gap: 10px;   
    text-align: center;
`;

export const HeaderIcon = styled.i` 
    align-items: center;
    border-radius: 15%;
    background: ${colors.secondary};
    color: ${colors.light};
    font-size: 5em;  
    display: flex;
    height: 50px;
    justify-content: center;
    width: 50px;
`;

export const Header = styled.div`
    color: ${colors.primary};
    font-size: 4em;
`;

export const SubHeader = styled.div`
    font-size: 1.5em;
    max-width: 500px;
`;

export const AddButton = styled.button` 
    background: ${colors.secondary};
    border: 0;
    bottom: 20px; 
    color: ${colors.light};
    font-size: 4em; 
    height: 60px;
    position: absolute;
    right: 0;
    width: 60px;
`;  