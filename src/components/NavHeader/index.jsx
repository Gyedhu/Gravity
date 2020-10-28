import React, { useState } from "react";
import { Container, Header, Logo, NavIcons } from "./style";
import logo from "../../assets/logo.svg";
import { auth } from "firebase";
import { Redirect } from "react-router-dom";
import { clearUserData } from "../../Redux/actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
    clearData: () => dispatch(clearUserData())
})

const NavHeader = ({ clearData }) => {

    const [signin, setSignin] = useState(false);

    const signOut = () => {
        auth().signOut();
        setSignin(true);
        clearData();
    }

    return (
        <Container>
            <Header>
                <Logo>
                    <img src={logo} alt="logo" />
                    <span>Gravity</span>
                </Logo>

                <NavIcons>
                    {/* <span onClick={signOut} className="material-icons">notifications</span>
                    <span onClick={signOut} className="material-icons">dashboard</span>
                    <span onClick={signOut} className="material-icons">person</span> */}
                    <span onClick={signOut} className="material-icons">menu</span>
                </NavIcons>


            </Header>
            {signin && <Redirect to="/" />}
        </Container>
    );
}

export default connect(null, mapDispatchToProps)(NavHeader);
