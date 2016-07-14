import React, { Component } from 'react';

class SearchBar extends Component {
  render() { 
    return <input onChange={event => {console.log(event.target.value)}} type='text' />
  };
}

export default SearchBar;

// Upgrading SearchBar from a functional component to a class component
// gives you access to the event handlers such as 'onChange'