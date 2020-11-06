import React from "react";
import { Container, InnerContainer } from "./style";

export default function ProfileCardContainer({children}) {
    return (
        <Container>
            <InnerContainer>{children}</InnerContainer>
        </Container>
    )
}
