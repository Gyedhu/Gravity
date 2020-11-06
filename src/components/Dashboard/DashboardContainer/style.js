import styled from "styled-components";
import { mediaQuery } from "../../../assets/theme";

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column; 
    width: 100%;
`;

export const InnerContainer = styled.div`  
    align-items: center;    
    display: flex; 
    flex-wrap: wrap;
    grid-gap: 20px; 
    margin: 20px 0;
    width: 1024px; 

    @media (max-width: 1024px) {
        width: 100%;
    }

    @media (max-width: ${mediaQuery.mobile}) {
        justify-content: center;
    }
`;