import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppComponentProps from './AppComponentProps';
import AppState from './AppState';
import AppViewModel from './viewModels/AppViewModel';

class App extends React.Component<AppComponentProps, AppState> {
  
  private readonly viewModel: AppViewModel;
  constructor(props: AppComponentProps) {
    super(props);
    this.viewModel = props.appViewModel;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
