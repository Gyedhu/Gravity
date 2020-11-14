import styled from "styled-components";

export const Container = styled.form`
    align-items: center;     
    animation: fade_pop_up .25s forwards;   
    display: flex;   
    flex-direction: column;
    grid-gap: 10px;  
    overflow: hidden; 
    padding-top: 50px;
    
    & > * {
        max-width: 350px;
        width: 90%; 
    }  
`; 
