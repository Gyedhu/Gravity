import styled from "styled-components";
import { colors } from "../../assets/theme";

export const Container = styled.div`   
    align-items: center; 
    background: #FEA;
    background: ${colors.light};
    box-sizing: border-box;
    display: flex;  
    flex: 1;
    flex-direction: column; 
    overflow-y: auto;
    overflow-x: hidden;  
    width: 100vw; 

    & > * {
        margin: 5px;
    }
`;

export const InnerContainer = styled.div`  
    box-sizing: border-box;
    display: flex;  
    flex-direction: column;
    heigth: fit-content;  
    width: 1024px;

    @media (max-width: 1024px) {
        width: 100%;
    }
`; 

export const Footer = styled.div`   
    height: 100px;  
    width: 100%;  
`; 
