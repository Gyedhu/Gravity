import React, { useState } from "react";
import { Container, Header, Logo } from "./style";
import logo from "../../assets/logo.svg";
import { auth } from "firebase";
import { Redirect } from "react-router-dom";

const NavHeader = () => {

    const [signin, setSignin] = useState(false);

    return (
        <Container>
            <Header>
                <Logo>
                    <img src={logo} alt="logo" />
                    <span>Gravity</span>
                </Logo>
                <span onClick={() => {auth().signOut(); setSignin(true)}} style={{ fontSize: "2em" }} className="material-icons">code</span>
            </Header>
            {signin && <Redirect to="/sign-in-up" />}
        </Container>
    );
}

export default NavHeader;
