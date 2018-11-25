import React, { Component } from 'react';
import './App.css';
import { fetchObjects } from './experiments/objectFetching';

export default class App extends Component {
    constructor(props) {
        super(props);
        fetchObjects()
    }

    render() {
        return (
            <div className="App">
                <p>See the console</p>
            </div>
        );
    }
}
