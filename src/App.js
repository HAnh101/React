import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

class Person extends React.Component {
  render() {
    return (
      <div className='param'>
        <h1>
          Name: {this.props.name}. Age: {this.props.age}
        </h1>
        <p>Submit my homework!</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Person name='HAnh' age={21} />
        <Person name={1} age={21} />
      </div>
    );
  }
}
  
Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default App;