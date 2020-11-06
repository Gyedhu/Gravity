import styled from "styled-components";
import { colors } from "../../../assets/theme";
import user from "../../../assets/hero-illustration.svg";

export const Image = styled.div`
    animation: fade_pop_up .5s;
    background: url("${props => props.url ? props.url : user}") center center; 
    background-color: ${colors.light};
    background-size: cover; 
    border:  1px solid #DDD;
    border-radius: 5%; 
    height: 150px; 
    width: 150px; 
`; 
