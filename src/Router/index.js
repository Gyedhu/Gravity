import React from "react";
import { Route, Switch } from "react-router-dom";
import { LandingPage, SignInUp } from "../Pages/index";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/sign-in-up" component={SignInUp} />
        </Switch>
    );
}

export default Router;

