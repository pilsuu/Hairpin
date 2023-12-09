import React from "react";
import "./MatchList.css";
import { useNavigate } from "react-router-dom";

const matches = [
  {
    time: "10:00",
    place: "강남 해피배드민턴장",
    gameType: "단식 경기",
    gender: "남녀모두",
    buttonText: "신청가능",
  },
  {
    time: "13:00",
    place: "용산 해피배드민턴장",
    gameType: "복식 경기",
    gender: "남자",
    buttonText: "신청가능",
  },
  {
    time: "21:00",
    place: "수원 해피배드민턴장",
    gameType: "복식 경기",
    gender: "남녀모두",
    buttonText: "신청가능",
  },
  {
    time: "19:00",
    place: "서울대입구 해피배드민턴장",
    gameType: "복식 경기",
    gender: "남녀모두",
    buttonText: "신청가능",
  },
  {
    time: "17:00",
    place: "도봉 해피배드민턴장",
    gameType: "단식 경기",
    gender: "여자",
    buttonText: "신청가능",
  },
  {
    time: "22:00",
    place: "건대입구 해피배드민턴장",
    gameType: "복식 경기",
    gender: "남녀모두",
    buttonText: "신청가능",
  },
  {
    time: "21:00",
    place: "과천 해피배드민턴장",
    gameType: "복식 경기",
    gender: "남녀모두",
    buttonText: "신청가능",
  },
];

export default function MatchList() {
  return (
    <div className="MatchList-view">
      {matches.map((match) => (
        <MatchItem key={match.time} {...match} />
      ))}
    </div>
  );
}

function MatchItem({ time, place, gameType, gender, buttonText }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/match-reserve");
  }

  return (
    <div className="match-item">
      <div className="match-time">{time}</div>
      <div className="match-place">{place}</div>
      <div className="match-type">{gameType}</div>
      <div className="gender-type">{gender}</div>
      <div className="match-list-button-wrapper">
        <div
          className="match-list-button-text-wrapper"
          onClick={() => handleClick()}
        >
          {buttonText}
        </div>
      </div>
    </div>
  );
}
