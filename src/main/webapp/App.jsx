import React, {Component} from "react";
import {Switch, Route} from 'react-router-dom';
import Client from './page/client';
import Create from "./page/client/create";
import {KEY_TOKEN, ROUTE_ROOT, ROUTE_CLIENT, ROUTE_CLIENT_CREATE} from "./common/constant";
import Login from "./page/login/Login";
import Home from "./page/home";

class App extends Component {
    render() {
        if (!localStorage.getItem(KEY_TOKEN)) return <Login/>;
        return (
            <div className="container">
                <h1>Demo Component</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"/>
                <Switch>
                    <Route path={ROUTE_ROOT} component={Home}/>
                    <Route path={ROUTE_CLIENT} component={Client}/>
                    <Route path={ROUTE_CLIENT_CREATE} component={Create}/>
                </Switch>
            </div>
        );
    }
}

export default App;
