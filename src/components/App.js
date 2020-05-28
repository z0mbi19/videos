import React from "react";

import "./app.css";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "./../apis/youtube";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyDZZFhksjFnqDbxqVrt9_pvV7RzrRjami0";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: `${KEY}`,
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="ui container ">
        <SearchBar onFormSubmit={this.onTermSubmit} />

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
