import React from 'react';
import './App.css';
import className from 'classnames'

const RED = 1
const YELLOW = 2
const GREEN = 3

class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      currentColor: RED
    }

    setInterval(() => {
      this.setState(
        { currentColor: this.getNextColor() }
      ) 
    }, 1000)
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  getNextColor() {
    return this.randomIntFromInterval(1,3)
  }

  render() {
    const { currentColor } = this.state
    console.log('this.currentColor', currentColor);

    return (
      <div className="App">
        <div className={className('bubble red', {
          'active': currentColor === RED
        })}></div>
        <div className={className('bubble yellow', {
          'active': currentColor === YELLOW
        })}></div>
        <div className={className('bubble green', {
          'active': currentColor === GREEN
        })}></div>
      </div>
    );
  }
}

export default App;
