import React from "react";
import "./MatchDate.css";
import { useState, useEffect } from "react";

export default function MatchDate() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedUTCDate, setSelectedUTCDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDateClick = (clickedDate) => {
    setSelectedDate(clickedDate.getDate());
    setSelectedUTCDate(clickedDate);
  };

  // 화살표 클릭 시 호출되는 함수
  const handleArrowClick = (direction) => {
    const newDate = new Date(currentDate);
    const todayDate = new Date();
    if (direction === "prev" && todayDate.getDate() < newDate.getDate()) {
      newDate.setDate(currentDate.getDate() - 7);
    } else if (
      direction === "next" &&
      newDate.getDate() < todayDate.getDate() + 14
    ) {
      newDate.setDate(currentDate.getDate() + 7);
    }
    setCurrentDate(newDate);
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
  useEffect(() => {}, [currentDate, selectedDate]);

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
