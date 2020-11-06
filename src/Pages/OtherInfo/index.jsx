import React from "react";
import { AuthenticationContainer, LogoBox, InputBox, FormButton, SelectBox } from "../../components";
import { useForm } from "react-hook-form";
import useFirebase from "../../firebase/useFirebase";

export default function OtherInfo() {

    const { handleSubmit, register, errors } = useForm();
    const { signUp } = useFirebase();

    const onSubmit = data => {
        signUp(data);
    }

    return (
        <AuthenticationContainer
            onSubmit={handleSubmit(onSubmit)}
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

            <FormButton
                title="Submit"
                subtext="Previous?"
                to="signup"
            />
        </AuthenticationContainer>
    )
};
