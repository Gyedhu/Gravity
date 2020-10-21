import React, { forwardRef } from "react";
import { Container, InputBox } from "./style";

const Input = forwardRef(({ label, type }, ref) => {
    return (
        <Container>
            <InputBox placeholder={label} name={label.toLowerCase()} type={type} />
        </Container>
    );
});

export default Input;
