import React, {Component} from 'react';
import styles from './App.css';
import CSSModules from 'react-css-modules'

import {BrowserRouter, Link, Route, Prompt, NavLink, Redirect} from 'react-router-dom'

import MainPage from './pages/main/MainPage'
import AddRecordPage from './pages/addRecord/AddRecordPage.jsx'
class App extends Component {

    render() {
        return (
            <BrowserRouter >
                <div styleName="App">
                    <Route exact path="/" component={MainPage}/>
                    <Route exact path="/main" component={MainPage}/>
                    <Route exact path="/addRecord" component={AddRecordPage}/>

                    {/*<header className="App-header">*/}
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    {/*<h1 className="App-title">Welcome to React</h1>*/}
                    {/*</header>*/}
                    {/*<p styleName="App-intro">*/}
                    {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                    {/*</p>*/}
                    {/*<Button> btn</Button>*/}
                </div>
            </BrowserRouter>

        );
    }
}

export default CSSModules(App, styles);
