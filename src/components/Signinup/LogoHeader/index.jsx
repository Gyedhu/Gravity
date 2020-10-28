import React from "react";
import { Container, Image, MainHeader, SubHeader } from "./style";
import logo from "../../assets/logo.svg";

const LogoHeader = ({ text }) => {

    return (
        <Container>
            <Image src={logo} alt="logo" />
            <MainHeader>Gravity</MainHeader>
            <SubHeader>{text}</SubHeader>
        </Container>
    );
}

export default LogoHeader;
