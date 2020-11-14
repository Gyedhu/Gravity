import styled from "styled-components";
import { mediaQuery, colors } from "../../../assets/theme";

export const Container = styled.div`
    align-items: center;
    background: ${colors.light}; 
    display: flex; 
    flex-wrap: wrap; 
    grid-gap: 20px;
    
    @media (max-width: ${mediaQuery.mobile}) {
        grid-gap: ${props => props["mob-gap"] ? props["mob-gap"] : 20}px;  
        justify-content: center; 
    }
`;
