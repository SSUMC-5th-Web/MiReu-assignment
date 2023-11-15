import React from "react";
import {useState} from "react";
import image from "../images/555.svg"

export default function Home() {
  const [showimage, setShowimage] = useState(true);

  const handleImage = () => {
    setShowimage(!showimage);
  };
  return (
    <div className="page-contaniner" style={{ fontsize: "32px", color: "white" }}>
     
      {showimage && <div className="umcimage">
        <img src={image} style={{ margin: "0 auto", width: "100%" }}
          alt="UMC"></img>
      </div>}
      <botton onClick={handleImage}>{showimage?"광고 안 보기":"광고 보기"}</botton>
    </div>
  );
}
