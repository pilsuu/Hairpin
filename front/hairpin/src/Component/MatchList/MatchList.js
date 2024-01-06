import React from "react";
import "./MatchList.css";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { currentDateMatches, matchDetailAttr } from "../../States/atoms";

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
  const matchListsData = useRecoilValue(currentDateMatches);

  return (
    <div className="MatchList-view">
      {matchListsData.map((match, idx) => (
        <MatchItem
          key={idx}
          time={match.matchTime}
          place={match.name}
          gender={match.matchTypeGender}
          gameType={match.matchTypePlaying}
          reservationId={match.reservationId}
        />
      ))}
    </div>
  );
}

function MatchItem({ time, place, gameType, gender, reservationId }) {
  const navigate = useNavigate();
  const [matchDetails, setMatchDetails] = useRecoilState(matchDetailAttr);
  const id = reservationId;

  const prefixURL = process.env.REACT_APP_SPRINGBOOT_URL;

  const request = async (reservId) => {
    let response;
    const URL = `${prefixURL}match?id=${reservId}`;
    response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${authKey}`,
      },
    }).then(async (res) => {
      let parsedData = await res.json();
      //console.log("matchDetails: ", parsedData);
      return parsedData;
    });
    return response;
  };

  async function handleClick() {
    const respone = await request(id);
    setMatchDetails(respone);
    navigate("/match-reserve");
  }

  return (
    <div className="match-item">
      <div className="match-time">{time}:00</div>
      <div className="match-place">{place}</div>
      <div className="match-type">{gameType}</div>
      <div className="gender-type">{gender}</div>
      <div className="match-list-button-wrapper">
        <div
          className="match-list-button-text-wrapper"
          onClick={() => handleClick()}
        >
          신청가능
        </div>
      </div>
    </div>
  );
}
