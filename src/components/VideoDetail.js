import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="video-item">
        Pesquise por algum video aqui <span role="img">☝</span>
      </div>
    );
  }

  return (
    <div>
      <div className="ui embed">
        <iframe
          title={video.etag}
          src={`//www.youtube.com/embed/${video.id.videoId}`}
        />
      </div>
      <div className="ui segment">
        <h4>{video.snippet.title}</h4>
        <p> {video.snippet.description} </p>
      </div>
    </div>
  );
};

export default VideoDetail;
