import React, { useState, useEffect } from "react";
import {
    Container,
    Header,
    FormContainer,
    Form,
    FormHeader,
    Label,
    Input,
    SubmitButton,
    Link,
    MobileHeader
} from "./style";
import logo from "../../assets/logo.svg";

const SignInUp = () => {

    const [currentForm, setCurrentForm] = useState("signin");
    const [headerText, setHeaderText] = useState("Welcome back to gravity");
    const duration = .5;

    const toggleCurrentForm = e => {
        e.preventDefault();
        setCurrentForm(currentForm => currentForm === "signin" ? "signup" : "signin");
    }

    useEffect(() => {
        setHeaderText(currentForm === "signin" ? "Welcome back to Gravity" : "Welcom to Gravity");
    }, [currentForm]);

    return (
        <Container>
            <Header>
                <img src={logo} alt="logo" width="100" />
                <h1>Gravity</h1>
                <h2>{headerText}</h2>
            </Header>

            <FormContainer
                show={currentForm === "signin"}
                duration={duration}
            >
                <Form>
                    <MobileHeader>Gravity</MobileHeader>
                    <h2>{headerText}</h2>
                    <FormHeader>Signin</FormHeader>
                    <Label>Email</Label>
                    <Input type="email" />
                    <Label>Password</Label>
                    <Input type="Password" />
                    <SubmitButton>Submit</SubmitButton>
                    <Link onClick={toggleCurrentForm}>Create a new account?</Link>
                </Form>

            </FormContainer>

            <FormContainer
                show={currentForm === "signup"}
                duration={duration}
            >
                <Form>
                    <MobileHeader>Gravity</MobileHeader>
                    <h2>{headerText}</h2>
                    <FormHeader>SignUp</FormHeader>
                    <Label>Username</Label>
                    <Input type="text" />
                    <Label>Email</Label>
                    <Input type="email" />
                    <Label>Password</Label>
                    <Input type="Password" />
                    <SubmitButton>Submit</SubmitButton>
                    <Link onClick={toggleCurrentForm}>Already have an account?</Link>
                </Form>
            </FormContainer>
        </Container>
    );
}

export default SignInUp;
