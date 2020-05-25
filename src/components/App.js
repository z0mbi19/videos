import React from "react";

import "./app.css";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "./../apis/youtube";

const KEY = "AIzaSyDZZFhksjFnqDbxqVrt9_pvV7RzrRjami0";

class App extends React.Component {
  state = { videos: [] };

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

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
