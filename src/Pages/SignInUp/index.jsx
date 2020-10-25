import React, { useState } from "react";
import { View } from "../../components";
import { SignIn, SignUp, OtherInfo } from "..";

const SignInUp = () => {

    // Local route
    const [currentForm, setCurrentForm] = useState("signin");

    //   for change local route
    const goto = (page) => setCurrentForm(page); 
    
    return (
        <View>
            <SignIn currentForm={currentForm} goto={goto} />
            <SignUp currentForm={currentForm} goto={goto} />
            <OtherInfo currentForm={currentForm} goto={goto} />
        </View>
    );
}

export default SignInUp;
