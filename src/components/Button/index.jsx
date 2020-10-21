import React from "react";
import { Container } from "./style";

const Button = ({ title, type, onClick }) => {
    return (
        <Container type={type} onClick={onClick}>{title}</Container>
    );
}

export default Button;
