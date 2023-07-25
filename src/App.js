import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

class App extends React.Component {
  render() {
    return (
      <h1>Hello {this.props.name}</h1>
    );
  }
}
  
App.propTypes = {
  name: PropTypes.string
};

App.defaultProps = {
  name: 'World'
};
  
export default App;