import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Input, Button } from "../../components";
import { connect } from "react-redux";
import { setLoading, setNotification } from "../../Redux/actions";
import { auth } from "firebase";
import { Redirect } from "react-router-dom";

const mapDispatchToProps = dispatch => ({
    setLoading: value => dispatch(setLoading(value)),
    setNotification: value => dispatch(setNotification(value)),
});

const SignIn = ({ currentForm, goto, setLoading, setNotification, }) => {

    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    });

    const [homepage, setHomepage] = useState(false);

    const changePage = e => {
        e.preventDefault();
        goto("signup");
    }

    const handleSigninSubmit = async data => {

        const { email, password } = data;
        setLoading("Signing in..."); 
        
        try {
            await auth().signInWithEmailAndPassword(email, password);
            setNotification("Signed in successfull");
            setHomepage(true);
        }
        catch (error) {
            if (error.code === "auth/wrong-password")
                setNotification("Given password is wrong!..Please check your password and try again");
            else if (error.code === "auth/no-user-found")
                setNotification("Given email is wrong!..Please check your email and try again");
            else
                setNotification("Something went wrong...Please try again");
        }
        finally {
            setLoading("");
        }

    }


    return (
        <>
            <Form
                show={currentForm === "signin"}
                header="Welcome back to Gravity"
                onSubmit={handleSubmit(handleSigninSubmit)}
            >
                <Input label="Email" type="email" ref={register({ required: true })} message={errors.email && "Please enter you email!"} />
                <Input label="Password" type="password" ref={register({ required: true })} message={errors.password && "Please enter you password!"} />
                <Button title="Submit" />
                <Button title="Create a new account?" link={true} onClick={changePage} />
            </Form>
            {homepage && <Redirect to="/homepage" />}
        </>
    );
}

export default connect(null, mapDispatchToProps)(SignIn);
