import React from "react";
import { Container, Box } from "./style";

const DashboardContainer = () => {
    return (
        <Container>
        <Box>
                    <span className="material-icons">code</span>
                    <span>Code</span>
                </Box>

                <Box>
                    <span className="material-icons">chat</span>
                    <span>Chat</span>
                </Box>

                <Box>
                    <span className="material-icons">post_add</span>
                    <span>Upload</span>
                </Box>

                <Box>
                    <span className="material-icons">help</span>
                    <span>Ask</span>
                </Box>
        </Container>
    );
}

export default DashboardContainer;
