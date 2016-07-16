import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import YouTubeSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyDCzZDGl_kXwKeAQDo4j3UDlLqsSESaZQE'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YouTubeSearch({key: API_KEY, term: 'cat'}, function(data) {
      console.log(data)
    });
  }

  render(){
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

// Create a new component.  This component should produce some HTML
// Take this component's generated HTML and put it on the page (in the DOM).