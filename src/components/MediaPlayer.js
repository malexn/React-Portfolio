import React from "react";
import { Player } from "video-react";

const MediaPlayer = props => {
  const video = () => {
    if (props.video) {
      return (
        <Player
          src={window.location.origin + "/documents/" + props.video}
          fluid={false}
          width={480}
          height={272}
        />
      );
    }
  };

  return <div>{video()}</div>;
};

export default MediaPlayer;
