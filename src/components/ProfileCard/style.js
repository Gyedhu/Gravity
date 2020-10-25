import styled from "styled-components";
import { colors, mediaQuery } from "../../assets/theme";

export const Container = styled.div` 
    align-items: center;
    background: white;   
    box-sizing: border-box;
    display: flex;
    flex: 1; 
    height: 200px;  
    margin-bottom: 5px;
    padding: 3px; 

    & > * {  
        box-sizing: border-box;
    }

    @media (max-width: ${mediaQuery.mobile}) {
        flex-direction: column;
        height: 500px; 
        padding: 20px; 
    }
`;

export const ProfileImage = styled.div` 
    background: url("${props => props.url}") center center;
    background-size: cover;
    height: 100%;
    width: 200px;
    

    @media (max-width: ${mediaQuery.mobile}) {  
        border-radius: 50%;
        height: 200px;  
        width: 200px;
    }
`;

export const UserInfo = styled.div` 
    box-sizing: border-box;
    display: flex; 
    flex-direction: column;
    font-family: Bellefair;  
    justify-content: center;
    padding: 20px;

    & > * {
        color: ${colors.primary};
        margin-bottom: 8px;
    }

    & > div:nth-child(1) {
        font-size: 3em;
    } 

    & > div:nth-child(2), 
    & > div:nth-child(3) {
        font-size: 1.8em;
    }
`;
