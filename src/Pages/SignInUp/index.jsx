import React, { useState } from "react";
import { Container, Header, FormContainer, Form, FormHeader, Label, Image, Input, SubmitButton } from "./style";
import logo from "../../assets/logo.svg";  

const SignInUp = () => {

    const [currentForm, setCurrentForm] = useState("signin");
    const duration = .5;

    const toggleCurrentForm = () =>
        setCurrentForm(currentForm => currentForm === "signin" ? "signup" : "signin");

    return (
        <Container>
            <Header onClick={toggleCurrentForm}>
                <img src={logo} alt="logo" width="100" />
                <h1>Gravity</h1>
                <h2>Welcome to the world of Gravity</h2>
            </Header>

            <FormContainer
                show={currentForm === "signin"}
                duration={duration}
            >
                <Form>
                    <Image src={logo} alt="logo" />
                    <h3>Welcome back to Gravity</h3>
                    <FormHeader>Signin</FormHeader>
                    <Label>Email</Label>
                    <Input type="email" />
                    <Label>Password</Label>
                    <Input type="Password" />
                    <SubmitButton onClick={toggleCurrentForm}>Submit</SubmitButton>
                </Form>
            </FormContainer>


            <FormContainer
                show={currentForm === "signup"}
                duration={duration}
            >
                <Form>
                    <Image src={logo} alt="logo" />
                    <FormHeader>SignUp</FormHeader>
                    <Label>Username</Label>
                    <Input type="text" />
                    <Label>Email</Label>
                    <Input type="email" />
                    <Label>Password</Label>
                    <Input type="Password" />
                    <SubmitButton onClick={toggleCurrentForm}>Submit</SubmitButton>
                </Form>
            </FormContainer>
        </Container>
    );
}

export default SignInUp;
