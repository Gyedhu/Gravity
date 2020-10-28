import React from "react";
import { Container, Box } from "./style";

const DashboardContainer = ({ goto }) => {
    return (
        <Container>
            <Box onClick={() => goto("code")} delay="0">
                <span className="material-icons">code</span>
                <span>Code</span>
            </Box>

            <Box  delay=".1">
                <span className="material-icons">chat</span>
                <span>Chat</span>
            </Box>

            <Box  delay=".2">
                <span className="material-icons">add</span>
                <span>Upload</span>
            </Box>

            <Box  delay=".3">
                <span className="material-icons">help_outline</span>
                <span>Ask</span>
            </Box>
        </Container>
    );
}

export default DashboardContainer;
