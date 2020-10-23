import styled, { keyframes } from "styled-components";
import { colors } from "../../assets/theme";

const notificationPopup = keyframes`
    0% { transform: translate(-50%,  0) scale3d(0.8,0.8,1); } 
    100% { transform: translate(-50%, 30px) scale3d(1,1,1); }
`;
    
export const Container = styled.div`
    animation: ${notificationPopup} .5s forwards;
    align-items: center;
    background: ${colors.secondary};
    border-radius: 50px;
    box-sizing: border-box;
    color: ${colors.light};
    display: flex; 
    font-family: 'Noto Sans TC', sans-serif;
    height: fit-content;
    justify-content: center;
    left: 50%;
    max-width: 90%;
    padding: 10px 20px;
    position: absolute;
    transform: translate(-50%, 0);
    width: fit-content; 
    z-index: 1;
`;

export const NotificationLogo = styled.span`
    font-size: 2em;
`;

export const NotificationText = styled.span`
    font-size: 1.2em;
    font-weight: bold;  
    margin-left: 10px; 
`;
