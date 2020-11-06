import React from 'react'
import { Container, Icon, MenuIcon } from './style'
import useFirebase from "../../../firebase/useFirebase";

export default function Icons() {

    const { signOut } = useFirebase();

    return (
        <Container>
            <Icon className="ri-home-3-line"></Icon>
            <Icon className="ri-notification-3-line"></Icon>
            <Icon className="ri-user-3-line"></Icon>
            <Icon
                onClick={signOut}
                className="ri-logout-circle-r-line"
            >
            </Icon>
            <MenuIcon className="ri-menu-line"></MenuIcon>
            <MenuIcon
                className="ri-logout-circle-r-line"
                onClick={signOut}
            >
            </MenuIcon>
        </Container>
    )
}
