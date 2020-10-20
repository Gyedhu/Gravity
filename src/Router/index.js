import React from "react";
import { Route, Switch } from "react-router-dom";
import { LandingPage } from "../Pages/index";

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
        </Switch>
    );
}

export default Router;

