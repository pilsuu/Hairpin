import React from "react";
import "./MatchDate.css";
import { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { currentDateMatches } from "../../States/atoms";

export default function MatchDate() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [matchLists, setMatchLists] = useRecoilState(currentDateMatches);
  const prefixURL = process.env.REACT_APP_SPRINGBOOT_URL;
  //console.log("prefix: ", prefixURL);

  const request = async (date) => {
    let response;

    const URL = `${prefixURL}matchLists?time=${date}`;
    console.log("URL: ", URL);
    response = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${authKey}`,
      },
    }).then(async (res) => {
      let parsedData = await res.json();
      //console.log("matchLists: ", parsedData);
      return parsedData;
    });
    return response;
  };

  const handleDateClick = async (clickedDate) => {
    setSelectedDate(clickedDate.getDate());
    const formattedDate = `${clickedDate.getFullYear()}-${(
      clickedDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${clickedDate.getDate().toString().padStart(2, "0")}`;

    //console.log("formattedDate: ", formattedDate);
    //console.log("url: ", URL);
    const matchListsData = await request(formattedDate);
    setMatchLists(matchListsData);
  };

  // 화살표 클릭 시 호출되는 함수
  const handleArrowClick = (direction) => {
    const todayDate = new Date();
    const fourteenDaysInMilliseconds = 14 * 24 * 60 * 60 * 1000;
    const sevenDaysMillSec = 7 * 24 * 60 * 60 * 1000;
    let newDate;

    if (direction === "prev" && todayDate.getTime() < currentDate.getTime()) {
      newDate = new Date(currentDate.getTime() - sevenDaysMillSec);
      console.log("if newDate: ");
    } else if (
      direction === "next" &&
      currentDate.getTime() < todayDate.getTime() + fourteenDaysInMilliseconds
    ) {
      newDate = new Date(currentDate.getTime() + sevenDaysMillSec);
    } else {
      // 처리할 경우가 없을 때
      return;
    }

    if (!isNaN(newDate.getTime())) {
      console.log("newDate2: ", newDate);
      setCurrentDate(newDate);
    } else {
      console.error("Invalid Date");
    }
  };

  // 현재 날짜를 기반으로 동적으로 요일 배열 생성
  const getDaysOfWeek = () => {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const firstDayIndex = currentDate.getDay(); // 현재 요일의 인덱스
    const weekDates = getWeekDates();

    return weekDates.map((date, index) => ({
      day: daysOfWeek[(firstDayIndex + index) % 7],
      date: date.getDate(),
      utcDate: date,
    }));
  };

  // 현재 날짜를 기반으로 7일 간의 날짜 목록 생성
  const getWeekDates = () => {
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const newDate = new Date(currentDate);
      newDate.setDate(newDate.getDate() + i);
      weekDates.push(newDate);
    }
    return weekDates;
  };

  // 컴포넌트가 마운트되거나 currentDate가 변경될 때 실행되는 로직
  useEffect(() => {}, [currentDate, selectedDate, matchLists]);

  return (
    <div className="match-date-container">
      <div className="days-container">
        {getDaysOfWeek().map((dayInfo, index) => (
          <div
            key={index}
            className={`day-element ${
              selectedDate === dayInfo.date ? "selected" : ""
            }`}
            onClick={() => handleDateClick(dayInfo.utcDate)}
          >
            {dayInfo.date}
            <br />
            {dayInfo.day}
          </div>
        ))}
      </div>
      <img
        className="arrow-icon"
        alt="Vector"
        src="https://c.animaapp.com/pnmyay9o/img/vector-2.svg"
        onClick={() => handleArrowClick("prev")}
      />
      <img
        className="right-side-arrow"
        alt="Vector"
        src="https://c.animaapp.com/pnmyay9o/img/vector-3.svg"
        onClick={() => handleArrowClick("next")}
      />
    </div>
  );
}
