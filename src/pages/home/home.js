import React, { Component } from 'react';

export default class Home extends React.Component {
    state = {
        title: 'Hello World'
    }

    render() {
        return (
            <h1>{this.state.title} </h1>
        )
    }
}