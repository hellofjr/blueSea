import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import WrappedNormalLoginForm from '../pages/login/login';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import WrappedNormalregisterForm from '../pages/register/register';


const BasicRoute = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={WrappedNormalLoginForm} />
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Route path="/register" component={WrappedNormalregisterForm} />
            </div>
        </Router>
    )
}

export default BasicRoute;