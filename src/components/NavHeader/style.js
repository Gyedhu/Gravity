import styled from "styled-components";
import { colors  } from "../../assets/theme";

export const Container = styled.div` 
    background: white;   
    display: flex;
    height: 60px;
    justify-content: center;
    width: 100%;
    z-index: 1;
`;

export const Header = styled.div`   
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    width: 1024px;
`;

export const Logo = styled.div`
    align-items: center; 
    display: flex;

    & > img { 
        height: 60%;
        margin-right: 10px;
    }

    & > span {
        font-family: Bellefair;
        font-size: 2em;
    }
`;

export const NavIcons = styled.div`
    align-items: center; 
    display: flex;

    & > span {
        align-items: center; 
        color: ${colors.primary};
        display: flex;
        font-size: 3em; 
        justify-content: flex-end; 
        width: 50px;
    }
    
    ${'' /* @media (max-width: ${mediaQuery.mobile}) {
        align-items: center;
        background: ${colors.light};
        box-shadow: 0 -3px 5px rgba(0, 0, 0, .25);
        bottom: 0;  
        height: fit-content;
        justify-content: space-around; 
        left: 0;
        padding: 10px;
        position: absolute;
        width: 100vw;

        & > span {
            color: ${colors.primary};
            font-size: 3em;
            justify-content: center; 
            padding: 10px;
        }
    } */}
`;