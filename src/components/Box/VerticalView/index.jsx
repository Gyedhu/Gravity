import React from "react";
import { Container } from "./style";

export default function ProfileCardContainer({ children, ...rest }) {
    return (
        <Container {...rest}>
            {children}
        </Container >
    )
}
