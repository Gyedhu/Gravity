import React from "react";
import { Container, FormBox, Header } from "./style";
import logo from "../../../assets/logo.svg";

const Form = ({ children, show, onSubmit, header }) => {


    return (
        <Container show={show}>
            <FormBox onSubmit={onSubmit}>
                <Header>
                    <img src={logo} alt="logo" />
                    <p>Gravity</p>
                    <p>{header}</p>
                </Header>

                {children}
            </FormBox>
        </Container>
    );
}

export default Form;
