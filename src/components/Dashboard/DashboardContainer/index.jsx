import React from "react";
import { Container, InnerContainer } from "./style";

export default function DashboardContainer({ children }) {
    return (
        <Container>
            <InnerContainer>
                {children}
            </InnerContainer>
        </Container>
    )
}
