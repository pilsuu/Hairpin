import React from "react";
import "./VideoGenerate.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../Component/Header/Header";
import { useRecoilValue } from "recoil";
import { userInfo } from "../../States/atoms";

export const VideoGenerate = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageForReq, setSelectedImageForReq] = useState(null);
  const userInform = useRecoilValue(userInfo);

  const prefixURL = process.env.REACT_APP_DJANGO_URL;
  const accessToken = localStorage.getItem("accessToken");
  console.log("accessToken: ", accessToken);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
      formData.append("image", file);
      setSelectedImageForReq(formData);
      //console.log("selected Image: ", selectedImage);
    }
  };

  //   console.log("userInfo: ", userInform);
  const generate = async () => {
    console.log("generate");

    let response;
    const URL = `${prefixURL}users/generate/`;
    console.log("URL: ", URL);
    response = await fetch(URL, {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
      body: selectedImageForReq,
    }).then(async (res) => {
      if (res.status == 200) {
        let parsedData = await res.json();
        // console.log("http status: ", res.status);
        console.log("ReqRes: ", parsedData);
        //   return parsedData;
        window.alert("비디오 생성이 완료되었습니다!");
        navigate("/videoLists");
      }
    });
    return response;
  };

  const goToVideoLists = () => {
    console.log("videoLists");
    // console.log("selectedImage: ", selectedImage)
    console.log("img: ", selectedImageForReq);
    navigate("/videoLists");
  };

  return (
    <div className="video-generate">
      <div className="div-video">
        <div className="div-for-header">
          <Header />
        </div>
        <div className="video-group">
          <div className="video-overlap">
            <div className="video-text-wrapper">Select Image</div>
            <div className="video-overlap-group-wrapper">
              <div className="video-overlap-group">
                <label htmlFor="fileInput" className="video-logo-hairpin-2">
                  파일 선택
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/png, image/jpeg"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="video-group-2">
          <img className="video-rectangle" src={selectedImage} />
          <div className="video-group-wrapper">
            <div className="video-div-wrapper">
              <div
                className="video-text-wrapper-2"
                onClick={() => {
                  generate();
                }}
              >
                Generate
              </div>
            </div>
          </div>
          <div className="video-group-3">
            <div className="video-div-wrapper">
              <div
                className="video-text-wrapper-2"
                onClick={() => {
                  goToVideoLists();
                }}
              >
                Video Lists
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
