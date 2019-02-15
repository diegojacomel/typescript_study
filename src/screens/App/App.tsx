// Modules
import React, { Component, Fragment } from "react";
import { Route } from 'react-router-dom'; 
import Home from '../Home/Home';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={Home} />
            </Fragment>
        );
    }
}

export default App;
