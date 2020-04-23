import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch, useParams} from "react-router-dom";
import About from "./About";
import Hello from "./Hello";

function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="about">About</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/:id?">
                    <Home/>
                </Route>
            </Switch>
        </div>
    )
}

function Home() {
    let { id } = useParams();
    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row">
                    <div className="col App-header">
                        <img src={logo} className="App-logo" alt="logo" width="100px"/>
                    </div>
                    <div className="col App-header">
                        <Hello name={id}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
