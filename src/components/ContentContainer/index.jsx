import React from "react";
import { Container, InnerContainer, Footer } from "./style";

const ContentContainer = ({ children }) => {
    return (
        <Container>
            <InnerContainer>
                {children}
                <Footer></Footer>
            </InnerContainer>
        </Container>
    );
}

export default ContentContainer;
