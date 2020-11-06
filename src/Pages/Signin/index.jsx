import React from "react";
import { AuthenticationContainer, LogoBox, InputBox, FormButton } from "../../components";
import { useForm } from "react-hook-form";
import useFirebase from "../../firebase/useFirebase";

export default function Signin() {

    const { handleSubmit, register, errors } = useForm();
    const { signIn } = useFirebase();

    const onSubmit = data => {
        signIn(data.email, data.password);
    }

    return (
        <AuthenticationContainer
            onSubmit={handleSubmit(onSubmit)}
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
