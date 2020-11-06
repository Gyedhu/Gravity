import React, { forwardRef } from "react";
import { Container, Input, Error } from "./style";

export default forwardRef(({ label, type, error }, ref) => {
    return (
        <Container>
            <Input
                type={type}
                placeholder={label}
                name={label.toLowerCase()}
                ref={ref}
            />
            {error && <Error>{error}</Error>}
        </Container >
    )
});
