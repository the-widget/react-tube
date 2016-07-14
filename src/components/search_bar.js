import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() { 
    return (
      <div>
        <input 
          value={this.state.term}
          onChange={event => {this.setState({ term: event.target.value })}} type='text' />
      </div>
    );  
  }
}

export default SearchBar;

// Upgrading SearchBar from a functional component to a class component
// gives you access to the event handlers such as 'onChange'

// Class components always have a 'constructor' and 'render' method.

// In constructor method, `this.state =` is like Ruby's attr_writer 
// Outside of the constructor method, to change the state, you must use `this.setState`
//  otherwise this.state is like Ruby's attr_reader