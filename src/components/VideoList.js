import React from "react";

import VideoItem from "./VideosItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderdList = videos.map((video) => {
    return (
      <VideoItem key={video.etag} video={video} onVideoSelect={onVideoSelect} />
    );
  });

  return <div className="ui animated relaxed divided list">{renderdList}</div>;
};

export default VideoList;
