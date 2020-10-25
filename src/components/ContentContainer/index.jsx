import React from "react";
import { Container, InnerContainer } from "./style";

const ContentContainer = ({ children }) => {
    return (
        <Container>
            <InnerContainer>
                {children}
                <div style={{ height: "200px", background: "white", width: "100%", marginTop: "5px" }}></div>
            </InnerContainer>
        </Container>
    );
}

export default ContentContainer;
