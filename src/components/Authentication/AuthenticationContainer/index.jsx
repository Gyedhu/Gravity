import React from "react";
import { Container } from "./style";

export default function AuthenticationContainer({ children, onSubmit }) {

    return (
        <Container
            onSubmit={onSubmit}
        >
            {children}
        </Container >
    )
}
