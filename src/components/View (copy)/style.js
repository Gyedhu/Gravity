import styled from "styled-components";
import { colors } from "../../assets/theme";

export const Container = styled.div`
    align-items: center;
    background: ${colors.light};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;  
    overflow: hidden; 
    transition: .5s;
    width: 100vw;
    
`;
