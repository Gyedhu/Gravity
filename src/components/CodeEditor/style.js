import styled from "styled-components";
import { colors } from "../../assets/theme";

export const Container = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 80px);
    overflow: hidden;;
    position: relative;
    width: 100%; 
`;

export const IDE = styled.div`  
    height: 100%; 
    overflow: auto;
`;

export const Navbar = styled.div` 
    ${'' /* background: ${colors.secondary}; */}
    box-sizing:  border-box;
    color: ${colors.primary};
    display: flex;  
    font-family: Bellefair; 
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 2px 2px; 

    &::-webkit-scrollbar{
        background: ${colors.light};
        height: 3px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #AAA; 
        border-radius: 50px;
    }   
`;

export const FileHeader = styled.div`
    align-items: center;
    background: ${props => props.active ? colors.primary : colors.light}; 
    border: 2px solid #BCD; 
    box-sizing:  border-box;
    color: ${props => !props.active ? colors.primary : colors.light}; 
    cursor: pointer;
    display: flex;
    font-size: 1.5em;
    max-width: 200px;
    margin-right: 5px;
    min-width: 150px;
    overflow: hidden;
    padding: 10px 20px;
    position: relative; 

    & > span {
        align-items: center; 
        color: ${props => !props.active ? colors.secondary : colors.light}; 
        cursor: pointer;
        display: flex; 
        font-weight: bold;
        height: 100%;
        padding: 10px;
        position: absolute;
        right: 0; 
        transition: .2s;
        user-select: none;

        &:active {
            opacity: .5;
        }
`;

export const Menu = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100px;
    position: absolute;
    right: 10px;
    top: 50px;
    user-select: none;
    width: 50px;

    & > span { 
        color: ${colors.secondary};
        cursor: pointer; 
        font-size: 2.5em;
        padding: 10px;
        transition: .3s;
        
        &:active {
            opacity: .3;
        } 
    }
`;
