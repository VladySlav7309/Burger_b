import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
=======

import './App.css';

import Layout        from './components/layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
          <Layout>
              <BurgerBuilder />
          </Layout>
>>>>>>> fe0662d40d9c0c8830007c5e1ae0d320df44e5de
      </div>
    );
  }
}

export default App;
