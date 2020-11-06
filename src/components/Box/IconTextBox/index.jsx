import React from "react";
import { Container, Icon, TextContent, BigText, Text } from "./style";

export default function IconTextBox({ iconClass, header, text }) {
    return (
        <Container>
            <Icon className={iconClass} />
            <TextContent>
                <BigText>{header}</BigText>
                <Text>{text}</Text>
            </TextContent>
        </Container>
    )
}
