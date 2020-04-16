import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'

function App() {
  return (
      <div className="App">
          <div className="container-fluid">
              <div className="row">
                  <div className="col App-header">
                      <img src={logo} className="App-logo" alt="logo" width="100px"/>
                  </div>
                  <div className="col App-header">
                      <Hello name="Béla"/>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
