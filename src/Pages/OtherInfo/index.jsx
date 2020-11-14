import React from "react";
import { AuthenticationContainer, LogoBox, InputBox, FormButton, SelectBox } from "../../components";
import { useForm } from "react-hook-form";
import useSignup from "../../firebase/useSignup";

export default function OtherInfo() {

    // userForm
    const { handleSubmit, register, errors } = useForm();

    // useSignup
    const signUp = useSignup();

    // Submit --- 
    const onSubmitHandler = data => {
        signUp(data);
    }

    return (
        <AuthenticationContainer
            onSubmit={handleSubmit(onSubmitHandler)}
        >
            <LogoBox />

            <InputBox
                type="date"
                label="DOB"
                ref={register({ required: true })}
                error={errors.dob && "Please enter your Date of birth"}
            />

            <SelectBox
                type="select"
                label="Gender"
                ref={register({ required: true })}
                options={["Male", "Female", "Other"]}
            />

            <InputBox
                type="password"
                label="Password"
                ref={register({ required: true, minLength: 8 })}
                error={errors.password && "Please check you password!(Note: Password atleast need 8 charectors)"}
            />

            <FormButton
                title="Submit"
                subtext="Previous?"
                to="/signup"
            />
        </AuthenticationContainer>
    )
};
