import styled from "styled-components";

export const Container = styled.div` 
    display: flex;
    flex-direction: column;
    grid-gap: 50px; 
    margin: 30px auto;  
    position: relative;
    width: 1024px;

    @media (max-width: 1024px) {
        padding: 20px;    
        width: 100%;
    }
`; 