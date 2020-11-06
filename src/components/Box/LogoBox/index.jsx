import React from "react";
import { Container, Logo, LogoContainer, LogoText, Text } from "./style";
import logo from "../../../assets/logo.svg";

export default function LogoBox() {
    return (
        <Container>
            <LogoContainer>
                <Logo src={logo} alt="Logo" />
                <LogoText>Gravity</LogoText>
                <Text>Welcome to the world of Gravity</Text>
            </LogoContainer>
        </Container>
    )
}
