import React, { useEffect } from "react";
import "./VideoLists.css";
import Header from "../../Component/Header/Header";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userInfo } from "../../States/atoms";
const testData = [
  { id: "1", data: "video1" },
  { id: "2", data: "video2" },
  { id: "3", data: "video3" },
  { id: "4", data: "video4" },
  { id: "5", data: "video5" },
  { id: "6", data: "video6" },
  { id: "7", data: "video7" },
  { id: "8", data: "video8" },
];

export const VideoComponent = ({ videoName }) => {
  return (
    <div className="video-container">
      <video className="video-rectangle" controls>
        {/* <source src="output_video.mp4" type="video/mp4"></source> */}
        <source
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          type="video/mp4"
        ></source>
      </video>
      <div className="video-name">{videoName}</div>
    </div>
  );
};

export const VideoLists = () => {
  const [videoDummy, setVideoDummy] = useState("");
  const prefixURL = process.env.REACT_APP_DJANGO_URL;
  const userInform = useRecoilValue(userInfo);

  const URL = `${prefixURL}users/videoLists/`;
  console.log("URL: ", URL);

  //   useEffect(() => {
  //     const response = async () => {
  //       await fetch(URL, {
  //         method: "GET",
  //         headers: {
  //           "content-Type": "application/json",
  //           // Authorization: `Bearer ${authKey}`,
  //         },
  //         body: JSON.stringify(userInform.id),
  //       }).then(async (res) => {
  //         if (res.status == 200) {
  //           let parsedData = await res.json();
  //           // console.log("http status: ", res.status);
  //           console.log("videoLists Data: ", parsedData);
  //           //   return parsedData;
  //           setVideoDummy(parsedData);
  //         }
  //       });
  //     };
  //     return response();
  //   }, []);

  return (
    <div className="video-lists-page-container">
      <div className="video-div-for-container">
        <Header />
        <div className="video-lists-container">
          {/* <div className="video-lists-text-wrapper">Video Lists</div> */}
          <div className="video-component-wrapper">
            {testData.map((video, idx) => (
              <VideoComponent key={idx} videoName={video.data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
