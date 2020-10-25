import React from "react";
import { Route, Switch } from "react-router-dom";
import { LandingPage, SignInUp, Homepage } from "../Pages/index";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={SignInUp} />
            <Route path="/homepage" component={Homepage} />
            <Route path="/LandingPage" component={LandingPage} />
        </Switch>
    );
}

export default Router;

