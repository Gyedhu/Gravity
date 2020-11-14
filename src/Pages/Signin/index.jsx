import React from "react";
import { AuthenticationContainer, LogoBox, InputBox, FormButton } from "../../components";
import { useForm } from "react-hook-form";
import useSignin from "../../firebase/useSignin";

export default function Signin() {

    // useForm
    const { handleSubmit, register, errors } = useForm();
    // useSignin
    const signIn = useSignin();

    // Submit
    const onSubmitHandler = data => {
        // Read email and password
        const { email, password } = data;
        // signin ------
        signIn(email, password);
    }

    return (
        <AuthenticationContainer
            onSubmit={handleSubmit(onSubmitHandler)}
        >
            <LogoBox />
            <InputBox
                type="email"
                label="Email"
                ref={register({ required: true })}
                error={errors.email && "Please enter your email!"}
            />

            <InputBox
                type="password"
                label="Password"
                ref={register({ required: true })}
                error={errors.password && "Please enter your password!"}
            />

            <FormButton
                title="Submit"
                subtext="Create a new account?"
                to="/signup"
            />
        </AuthenticationContainer>
    )
};
