import styled from "styled-components";
import { colors } from "../../../assets/theme";

export const Container = styled.div` 
    display: flex; 
    justify-content: center;
    margin-bottom: 10px;
    padding: 10px 0;
    
`;

export const LogoContainer = styled.div`    
    color: ${colors.primary};
    display: flex;  
    flex-direction: column; 
    max-width: 200px;

    &  * {   
        margin: 0;
        text-align: center;
    }
`;

export const Logo = styled.img`
    height: 60px;
`;

export const LogoText = styled.p` 
    font-size: 2.5em; 
`;

export const Text = styled.p` 
    font-size: 1.5em;
`;
