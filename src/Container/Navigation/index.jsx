import React from "react";
import { Logo, NavIcons, NavContainer } from "../../components";

export default function Navigation({ signOut }) {
    return (
        <NavContainer>
            <Logo />
            <NavIcons />
        </NavContainer>
    );
}
