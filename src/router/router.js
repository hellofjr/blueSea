import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import WrappedNormalLoginForm from '../pages/login/login';
import Home from '../pages/home/home';
import About from '../pages/about/about';


const BasicRoute = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={WrappedNormalLoginForm} />
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
            </div>
        </Router>
    )
}

export default BasicRoute;