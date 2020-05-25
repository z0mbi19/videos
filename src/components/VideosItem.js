import React from "react";

import "./app.css";

const VideoItem = ({ video }) => {
  return (
    <div className="item video-item">
      <img
        className="ui image"
        alt={video.snippet.description}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <h3 className="header">{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoItem;
