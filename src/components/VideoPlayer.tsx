import React from "react";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full"
    ></video>
  );
};

export default VideoPlayer;
