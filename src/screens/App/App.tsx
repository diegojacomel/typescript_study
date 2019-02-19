// Modules
import React, { Component, Fragment } from "react";
import { Route } from 'react-router-dom'; 
import Home from '../Home/Home';
import Header from '../../components/Header/Header';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Route exact path="/" component={Home} />
            </Fragment>
        );
    }
}

export default App;
