import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Pricing from "./Pages/Pricing";
import NotFound from "./Pages/NotFound";

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/Pricing" component={Pricing} />

                { /* Not found Page */}
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default Routes;
