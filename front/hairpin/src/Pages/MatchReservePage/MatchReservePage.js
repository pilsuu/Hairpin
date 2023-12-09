import React from "react";
import Header from "../../Component/Header/Header";
import "./MatchReservePage.css";

export default function MatchReservePage({
  mchDate,
  mchAddress,
  parking,
  price,
  placeName,
  mchPlayType,
  mchGenderType,
}) {
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
              <div className="Date">11월 4일 토요일 10:00</div>
              <div className="Address-wrapper">
                <div className="Address">강남구 15길 42로</div>
                <div className="Parking-wrapper">
                  <div className="parking">무료 주차</div>
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
                      onClick={() => alert("신청 완료")}
                    >
                      신청하기
                    </div>
                  </div>
                </div>
              </div>
              <div className="place-name">강남 해피배드민턴장</div>
            </div>
            <div className="match-type">
              <div className="match-type-intro">매치 정보</div>
              <div className="mch-type">단식 경기</div>
              <div className="mch-gender-type">남자 전용</div>
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
