import React, { forwardRef } from "react";
import { Container, Select } from "./style";

export default forwardRef(({ label, type, options }, ref) => {
    return (
        <Container>
            <Select
                type={type}
                name={label.toLowerCase()}
                ref={ref}
            >
                {
                    options
                        ? options.map((value, index) =>
                            <option key={value + index}>{value}</option>
                        )
                        : null
                }
            </Select>
        </Container >
    )
});
