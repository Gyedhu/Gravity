import React from "react";
import { useForm } from "react-hook-form"
import { Form, Input, Button } from "../../components";
import { setLoading, setNotification, setSignupData } from "../../Redux/actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
    setLoading: value => dispatch(setLoading(value)),
    setSignupData: (name, email, password) => dispatch(setSignupData({ name, email, password })),
    setNotification: value => dispatch(setNotification(value))
});


const SingUp = ({ currentForm, goto, setSignupData }) => {

    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    });

    const changePage = e => {
        e.preventDefault();
        goto("signin");
    }

    // Pushing read data to the state
    const handleSignupSubmit = data => {
        const { username, email, password } = data;
        setSignupData(username, email, password);

        // Changing local route to 'other_info'
        goto("other_info");
    }

    return (
        <Form
            show={currentForm === "signup"}
            header="Welcome to Gravity"
            onSubmit={handleSubmit(handleSignupSubmit)}
        >
            <Input label="Username" type="text" ref={register({ required: true })} message={errors.username && "Pleaes enter you usename!"} />
            <Input label="Email" type="email" ref={register({ required: true })} message={errors.email && "Please enter you email!"} />
            <Input label="Password" type="password" ref={register({ required: true, minLength: 8 })} message={errors.password && "Please check you password(Note: Password must need atleast 8 characters)!"} />

            <Button type="button" title="Next" />
            <Button title="Already have an account?" link={true} onClick={changePage} />
        </Form >
    );
}

export default connect(null, mapDispatchToProps)(SingUp);
