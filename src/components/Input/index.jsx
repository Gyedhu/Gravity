import React, { forwardRef } from "react";
import { Container, InputBox, Message, Pointer, Label, Select } from "./style";

const Input = forwardRef(({ label, type, message, options }, ref) => {
    return (
        <Container>
            <Label>{label}</Label>
            {
                options
                    ?
                    <Select ref={ref} name={label.toLowerCase()}>
                        {
                            options.map((value) => <option key={value}>{value}</option>)
                        }
                    </Select>
                    : <InputBox ref={ref} name={label.toLowerCase()} type={type} />
            }
            {message && <Message>{message}<Pointer /></Message>}
        </Container>
    );
});

export default Input;
