import React from 'react';
import './App.css';

const DEFAULT_VALUE = {
  text: 'hello'
}

const CurrentContext = React.createContext(DEFAULT_VALUE)

class App extends React.Component {
  render() {
    return (
      <CurrentContext.Provider value={DEFAULT_VALUE}>
        <_App />
      </CurrentContext.Provider>
    )
  }
}

class _App extends React.Component {
  static contextType = CurrentContext;

  render() {
    return (
      <div className="App">
        {this.context.text}
        <Component1 />
      </div>
    );
  }
}

class Component1 extends React.Component {
  render() {
    return (
      <div>
        <Component2 />
      </div>
    )
  }
}

class Component2 extends React.Component {
  render() {
    return (
      <div>
        <Component3 />
      </div>
    )
  }
}

class Component3 extends React.Component {
  static contextType = CurrentContext;
  render() {
    return (
      <div>
        {this.context.text}
      </div>
    )
  }
}

export default App;
