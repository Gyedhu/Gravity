import React from "react";
import { Container, FormBox, Header } from "./style";

const Form = ({ children, show, onSubmit, header, type }) => {
    return (
        <Container show={show}>
            <FormBox onSubmit={onSubmit}> 
                <Header>
                    <h1>Gravity</h1>
                    <h2>{header}</h2>
                    <p>{type}</p>
                </Header> 

                {children}
            </FormBox>
        </Container>
    );
}

export default Form;
