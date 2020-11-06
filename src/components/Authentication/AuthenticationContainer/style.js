import styled from "styled-components";

export const Container = styled.form`
    align-items: center;     
    animation: fade_pop_up .25s forwards;
    display: flex; 
    flex: 1;
    flex-direction: column;
    grid-gap: 10px;
    justify-content: center;
    min-height: 100vh;
    overflow: hidden; 
    
    & > * {
        max-width: 320px;
        width: 90%; 
    } 
`; 
