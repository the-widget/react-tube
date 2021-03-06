import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};
  }

  render() { 
    return (
      <div className="search-bar input-group input-group-lg">
        <input 
          placeholder="Search for anything and it will relate your search term with cats! Example: try 'muffin'"
          className="form-control"
          value={this.state.term}
          onChange= {event => {this.onInputChange(event.target.value)}} type='text' />
      </div>
    );  
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

// Upgrading SearchBar from a functional component to a class component
// gives you access to the event handlers such as 'onChange'

// Class components always have a 'constructor' and 'render' method.

// In constructor method, `this.state =` is like Ruby's attr_writer 
// Outside of the constructor method, to change the state, you must use `this.setState`
//  otherwise this.state is like Ruby's attr_reader