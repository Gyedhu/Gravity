import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form"

import { View, Form, Input, Button } from "../../components";

const SignInUp = () => {

    const [currentForm, setCurrentForm] = useState("signin");
    const [headerText, setHeaderText] = useState("Welcome back to gravity");

    const { register, handleSubmit } = useForm();

    const toggleCurrentForm = e => {
        e.preventDefault();
        setCurrentForm(currentForm => currentForm === "signin" ? "signup" : "signin");
    }

    useEffect(() => {
        setHeaderText(currentForm === "signin" ? "Welcome back to Gravity" : "Welcom to Gravity");
    }, [currentForm]);

    const handleSigninSubmit = data => {
        console.log(data);
    }

    const handleSignupSubmit = data => {
        console.log(data);
    }

    return (

        <View>

            <Form
                show={currentForm === "signin"}
                header={headerText}
                type="Signin"
                onSubmit={handleSubmit(handleSigninSubmit)}
            >
                <Input label="Email" type="email" ref={register({ required: true })} />
                <Input label="Password" type="Password" ref={register({ required: true })} />
                <Button title="Submit" />
                <Button title="Create a new account?" type="link" onClick={toggleCurrentForm} />
            </Form>

            <Form
                show={currentForm === "signup"}
                type="Signup"
                header={headerText}
                onSubmit={handleSubmit(handleSignupSubmit)}
            >
                <Input label="Username" type="text" ref={register({ required: true })} />
                <Input label="Email" type="email" ref={register({ required: true })} />
                <Input label="Password" type="password" ref={register({ required: true, pattern: /^[a-zA-Z]{7}$/ })} />

                <Button title="Submit" />
                <Button title="Already have an account?" type="link" onClick={toggleCurrentForm} />
            </Form>
        </View>
    );
}

export default SignInUp;
