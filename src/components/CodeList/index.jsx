import React from "react";
import { Container, Header, List, CodeItem, CodeData } from "./style";

const CodeList = ({ list }) => {
    return (
        <Container>
            <Header>CodeBox</Header>
            <List>
                <CodeItem>
                    <span>JS</span>
                    <CodeData>
                        <span>Simple Calculator using js</span>
                        <div>
                            <span>Line: 25</span>
                            <span>1 day ago</span>
                        </div>
                    </CodeData>
                </CodeItem>
            </List>
        </Container>
    );
}

export default CodeList;
