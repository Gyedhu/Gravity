import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Redirect } from "react-router-dom";
import { View, Button } from "../../components/index";
import { colors } from "../../assets/theme";

const LandingPage = () => {

    const [goto, setGoto] = useState(false);
    const changeRoute = () => setGoto(true);

    return (
        <View>
            <img src={logo} alt="logo" />

            <h1 style={{
                color: colors.primary,
                fontFamily: "piedra",
                fontSize: "4em",
                margin: "0"
            }}
            >
                Gravity
            </h1>

            <h1 style={{
                color: colors.primary,
                fontFamily: "piedra",
                fontSize: "2em",
                margin: "0"
            }}
            >
                Comming Soon
            </h1>

            <Button title="Goto Signin" type="link" onClick={changeRoute} />
            {goto && <Redirect to="/sign-in-up" />}
        </View>
    );
}

export default LandingPage;
