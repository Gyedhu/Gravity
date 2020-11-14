import React from "react";
import { Container, Option } from "./style";

export default function ExpantableButton({ button, options, expand }) {

    return (
        <Container>
            {button}
            {
                expand &&
                <Option>
                    {options}
                </Option>
            }
        </Container >
    );
}
