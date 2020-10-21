import React, { useState } from "react";
import { Container, Image, Link } from "./style";
import logo from "../../assets/logo.svg";
import { Redirect } from "react-router-dom";

const LandingPage = () => {

    const [goto, setGoto] = useState(false);
    const changeRoute = () => setGoto(true);

    return (
        <Container>
            <Image src={logo} alt="logo" />
            <h1>Gravity</h1>
            <h1>Comming Soon</h1>
            <Link onClick={changeRoute}>Goto Signin</Link>
            {goto && <Redirect to="/sign-in-up" />}
        </Container>
    );
}

export default LandingPage;
