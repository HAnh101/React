import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

class Book extends React.Component {
  render() {
    return (
      <div className='param'>
        <h1>
          Id: {this.props.id}
        </h1>
        <p>
          Book title: {this.props.name} <br />
          Author: {this.props.author} <br />
          Type of books: {this.props.types} <br />
        </p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Book id={1} name='The Da Vinci Code' author='Dan Brown' types='Mystery'/>
        <Book id={2} name='Jaws' author='Peter Benchley' types='Horror'/>
        <Book name={1} author='Peter Flynn' types='Horror'/>
      </div>
    );
  }
}
  
Book.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  author: PropTypes.string,
  types: PropTypes.oneOf(['Crime', 'Horror', 'Mystery'])
};

export default App;