import React from "react";
import { Container, InnerContainer } from "./style";

export default function NavContainer({ children }) {
    return (
        <Container>
            <InnerContainer>
                {children}
            </InnerContainer>
        </Container>
    )
}
