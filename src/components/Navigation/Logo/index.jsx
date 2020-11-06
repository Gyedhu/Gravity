import React from 'react'
import { Container, LogoImage, LogoText } from "./style";
import logo from "../../../assets/logo.svg";

export default function Logo({ type }) {
    return (
        <Container>
            <LogoImage src={logo} alt="Logo" />
            <LogoText>Gravity</LogoText>
        </Container>
    )
}
