import React from "react";
import {hot} from "react-hot-loader";
import Home from "./components/Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
    return <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </Switch>
            </BrowserRouter>
};

export default hot(module)(App);