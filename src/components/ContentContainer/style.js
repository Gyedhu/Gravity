import styled from "styled-components";

export const Container = styled.div`   
    align-items: center; 
    background: #BCD;
    box-sizing: border-box;
    display: flex;  
    flex: 1;
    flex-direction: column; 
    overflow-y: auto;
    overflow-x: hidden; 
    position: relative; 
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
