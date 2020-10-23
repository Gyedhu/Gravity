import React, { useState } from "react";
import { View } from "../../components";
import { SignIn, SignUp, OtherInfo } from "..";

const SignInUp = () => {

    const [currentForm, setCurrentForm] = useState("signin");

    const goto = (page) => {
        setCurrentForm(page);
    }

    return (
        <View>
            <SignIn currentForm={currentForm} goto={goto} />
            <SignUp currentForm={currentForm} goto={goto} />
            <OtherInfo currentForm={currentForm} goto={goto} />
        </View>
    );
}

export default SignInUp;
