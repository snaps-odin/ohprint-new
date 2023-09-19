import React, { useRef } from "react";

function VideoThumbnail(props) {
  const videoRef = useRef(null);

  const handleVideoLoad = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
  };

  return (
    <video
      ref={videoRef}
      onLoadedData={handleVideoLoad}
      src={props.src}
      poster={props.poster}
      controls
    />
  );
}

export default VideoThumbnail;
