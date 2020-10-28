import React from "react";
import { Container } from "./style";

const View = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default View;
