import React from "react";
import "../Main/style.scss";
import MainCard from "./MainCard";
import Slider from "../Header/Slider";
import ReactPlayer from "react-player";
import video from "../../video/myVideo.mp4";

const Main = () => {
  return (
    <>

      <div className="mb-10">
        <ReactPlayer
          url={video}
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
      </div>

      <div className="mainContainer gap-7 p-10 my-10 flex justify-center sm:justify-between w-3/4 mx-auto flex-wrap ">
        <MainCard />
      </div>
      <Slider />
    </>
  );
};

export default Main;
