import React from "react";
import { Route, Switch } from "react-router-dom";
import { LandingPage, SignInUp, Homepage } from "../Pages/index";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/homepage" component={Homepage} />
            <Route   path="/LandingPage" component={LandingPage} />
            <Route path="/sign-in-up" component={SignInUp} />
        </Switch>
    );
}

export default Router;

