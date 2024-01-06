import React from "react";
import Header from "../../Component/Header/Header";
import "./MatchReservePage.css";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { isAuthenticated, matchDetailAttr, userInfo } from "../../States/atoms";
import { useNavigate } from "react-router-dom";
export default function MatchReservePage() {
  const navigate = useNavigate();
  const matchData = useRecoilValue(matchDetailAttr);
  console.log("matchData: ", matchData);

  const prefixURL = process.env.REACT_APP_SPRINGBOOT_URL;
  const hasAuth = useRecoilValue(isAuthenticated);
  const accessToken = localStorage.getItem("accessToken");
  const userDetailInfo = useRecoilValue(userInfo);
  const bodyForm = {
    reservationId: matchData.reservationId,
    userId: userDetailInfo.id,
    gender: userDetailInfo.gender,
  };
  const handleReserve = async () => {
    if (hasAuth) {
      // console.log("userDetailInfo: ", userDetailInfo);
      // console.log("accessTok: ", accessToken);
      await fetch(`${prefixURL}book`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(bodyForm),
      }).then(async (res) => {
        console.log("res: ", res);
        // console.log("RegRes: ", parsedData);
        if (res.status == 200) {
          window.alert("신청 완료되었습니다");
        } else if (res.status == 808) {
          window.alert("이미 신청된 경기입니다");
        } else if (res.status == 802) {
          window.alert("경기 조건에 맞지 않습니다. 성별을 확인해주세요");
        }
      });
    } else {
      navigate("/login");
    }
  };
  const dateTranslator = () => {
    // 입력된 날짜를 Date 객체로 변환
    const dateObject = new Date(matchData.usageDate);

    // 월, 일, 요일 정보 얻기
    const month = dateObject.toLocaleString("ko-KR", { month: "long" }); // 'long' 옵션은 월의 전체 이름을 얻습니다.
    const dayOfMonth = dateObject.getDate();
    const dayOfWeek = dateObject.toLocaleString("ko-KR", { weekday: "long" }); // 'long' 옵션은 요일의 전체 이름을 얻습니다.

    // 변형된 문자열 생성
    const resultString = `${month} ${dayOfMonth}일 ${dayOfWeek}`;

    // 결과 출력
    console.log(resultString);
    return resultString;
  };

  const matchDate = dateTranslator();

  return (
    <div className="screen-mch">
      <div className="div-mch">
        <Header />
        <div className="overlap-mch">
          <img
            className="match-place"
            alt="match-place"
            src="https://c.animaapp.com/Y9MevXNv/img/image-1.png"
          />
          <div className="Info">
            <div className="Right-Side">
              <div className="Date">{matchDate}</div>
              <div className="Address-wrapper">
                <div className="Address">{matchData.location}</div>
                <div className="Parking-wrapper">
                  <div className="parking">
                    {matchData.hasParkingLot ? "주차 가능" : "주차 불가"}
                  </div>
                  <img
                    className="parking-icon"
                    alt="parking"
                    src="https://c.animaapp.com/Y9MevXNv/img/vector.svg"
                  />
                </div>
              </div>
              <div className="Register-wrapper">
                <div className="price">15,000원/2시간</div>
                <div className="register-button-wrapper">
                  <div className="register-button-text-wrapper">
                    <div
                      className="reg-button-text"
                      onClick={() => handleReserve()}
                    >
                      신청하기
                    </div>
                  </div>
                </div>
              </div>
              <div className="place-name">{matchData.name}</div>
            </div>
            <div className="match-type">
              <div className="match-type-intro">매치 정보</div>
              <div className="mch-type">{matchData.matchTypePlaying} 경기</div>
              <div className="mch-gender-type">
                {matchData.matchTypeGender} 전용
              </div>
              <img
                className="gender-img"
                alt="Gender"
                src="https://c.animaapp.com/Y9MevXNv/img/group@2x.png"
              />
              <img
                className="badminton-img"
                alt="Group"
                src="https://c.animaapp.com/Y9MevXNv/img/group-47@2x.png"
              />
            </div>
            <div className="Noti-wrapper">
              <div className="Noti">유의 사항</div>
              <p className="Noti-refund">정원 미충족시 자동 환불 진행됩니다</p>
              <div className="Noti-cancel">취소 방법</div>
              <p className="Noti-cancel-explain">
                마이페이지 - 신청 내역 -&nbsp;&nbsp;취소
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
