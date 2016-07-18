import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YouTubeSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = 'AIzaSyDCzZDGl_kXwKeAQDo4j3UDlLqsSESaZQE';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('cat');
  }

  videoSearch(term) {
    YouTubeSearch({key: API_KEY, term: 'cats '+ term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div className="container">
        <div className="header clearfix">
          <h1 className="title text-muted">Google Cat</h1> 
        </div>
        <div>
          <SearchBar onSearchTermChange={videoSearch}/>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
          </div>
        
        
      </div>
      
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

// Create a new component.  This component should produce some HTML
// Take this component's generated HTML and put it on the page (in the DOM).