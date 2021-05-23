import React from "react";
import "./App.css";
import img from "./myimage.jpg";
import ReactPlayer from "react-player";
import Video from "./secondsvid.mp4";

function App() {
  return (
    <React.Fragment>
      <div style={{ border: "solid 1px black", maxwidth: "100vw" }}>
        <h1 className="title red"> Mehdi Werda</h1>
        <br />
        <img src="./mypicture.jpg" alt="foto" />
        <br />
        <img src={img} alt="foto1" />
        <br />
      </div>

      <ReactPlayer
        width="680px"
        height="240px"
        controls
        url="https://www.youtube.com/watch?v=7sDY4m8KNLc&ab_channel=Codevolution"
      />
      <br />
      <video controls>
        <source src={Video} type="video/mp4" />
      </video>
    </React.Fragment>
  );
}

export default App;
