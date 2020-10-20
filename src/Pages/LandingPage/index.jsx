import React from "react";
import { Container, Image, MainHeader, SubHeader } from "./style";
import logo from "../../assets/logo.svg";

const LandingPage = () => (
    <Container>
        <Image src={logo} alt="logo" />
        <h1>Gravity</h1>
        <h1>Comming Soon</h1>
    </Container>
);

export default LandingPage;
