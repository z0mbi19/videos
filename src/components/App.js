import React from "react";
import { Container, Row, Col } from "react-bootstrap";

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
        maxResults: 50,
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
      <Container className="ui container ">
        <Row>
          <SearchBar onFormSubmit={this.onTermSubmit} />
        </Row>
        <Row>
          <Col md="auto">
            <VideoDetail video={this.state.selectedVideo} />
          </Col>
          <Col md="auto">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
