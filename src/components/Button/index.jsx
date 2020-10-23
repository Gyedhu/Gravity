import React from "react";
import { Container } from "./style"; 

const Button = ({ title, link, onClick }) => {
    return (
        <Container link={link} onClick={onClick}>{title}</Container>
    );
}

export default Button;
