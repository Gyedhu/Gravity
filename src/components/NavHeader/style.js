import styled from "styled-components";

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

