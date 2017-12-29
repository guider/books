import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import {Button} from 'antd-mobile'
import 'antd-mobile/lib/button/style/css';
import CSSModules from 'react-css-modules'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p styleName="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Button> btn</Button>
      </div>
    );
  }
}

export default CSSModules(App, styles);
