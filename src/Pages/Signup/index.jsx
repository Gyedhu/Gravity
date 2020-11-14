import React from "react";
import { AuthenticationContainer, LogoBox, InputBox, FormButton, SelectBox } from "../../components";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { setSignupData, changePage } from "../../Redux/actions";

// Redux functions
const mapDispatchToProps = dispatch => ({
    setSignupData: (name, email, password, profession) => dispatch(setSignupData({ name, email, password, profession })),
    gotoNext: () => dispatch(changePage("/other_info"))
});

export default connect(null, mapDispatchToProps)(

    function Signup({ setSignupData, gotoNext }) {

        // useForm
        const { handleSubmit, register, errors } = useForm();

        // Submit ---- 
        const onSubmit = data => {

            // Get user data
            const { username, email, password, profession } = data;

            // Set user data to state
            setSignupData(username, email, password, profession);

            // Going to next page
            gotoNext();
        }


        return (
            <AuthenticationContainer onSubmit={handleSubmit(onSubmit)}>
                <LogoBox />
                <InputBox
                    type="text"
                    label="Username"
                    ref={register({ required: true })}
                    error={errors.username && "Please enter your username!"}
                />

                <InputBox
                    type="email"
                    label="Email"
                    ref={register({ required: true })}
                    error={errors.email && "Please enter your email!"}
                />

                <InputBox
                    type="password"
                    label="Password"
                    ref={register({ required: true, minLength: 8 })}
                    error={errors.password && "Please check you password!(Note: Password atleast need 8 charectors)"}
                />

                <SelectBox
                    type="text"
                    label="Profession"
                    ref={register({ required: true })}
                    options={[
                        "Student",
                        "Teacher",
                        "Engineer",
                        "Web developer",
                        "Software engineer",
                        "Full stack web developer",
                        "Electrical engineer",
                        "Farmer",
                        "Scientist",
                        "Physicist"
                    ]}
                />

                <FormButton
                    title="Next"
                    subtext="Already have an account?"
                    to="/"
                />
            </AuthenticationContainer>
        )
    });
