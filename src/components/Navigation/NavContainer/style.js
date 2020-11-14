import styled from "styled-components";
import { colors } from "../../../assets/theme";

export const Container = styled.div`
    background: ${colors.light};
    box-shadow: 0 2px 8px rgba(0, 0, 0, .25);
    colors: ${colors.primary};
    display: flex;
    height: 60px;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 1;
`;

export const InnerContainer = styled.div` 
    display: flex;  
    justify-content: space-between;  
    width: 1024px;

    @media (max-width: 1024px) {
        padding: 0 20px;
        width: 100%;
    }
`; 
