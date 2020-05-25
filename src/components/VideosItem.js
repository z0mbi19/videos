import React from "react";

import "./app.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img
        className="ui image"
        alt={video.snippet.description}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header" style={{ color: "#fff" }}>
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
