import React from "react";
import "./IntroPage.css";
import Header from "../../Component/Header/Header";

export const Intro = () => {
  return (
    <div className="intro-wrapper">
      <div className="intro-container">
        <div className="intro-content-container">
          <img
            className="saly"
            alt="Saly"
            src="https://c.animaapp.com/OiWaV5Nj/img/saly-14.svg"
          />
          <div className="intro-content-wrapper">
            <div className="intro-overlap-group">
              <div className="intro-rectangle" />
              <div className="intro-text-wrapper">Hairpin 소개</div>
              <div className="intro-text-wrapper-2">Hairpin 활용 방법</div>
              <div className="intro-text-wrapper-3">환불 정책</div>
              <p className="intro-hairpin">
                Hairpin은 배드민턴 동료를 모집해주고 코트 예약을 도와주는 <br />
                중개 플랫폼이에요. 혼자 와도 즐겁게 즐길 수 있어요!
              </p>
              <p className="intro-p">
                모집 정원이 충족되지 않으면 자동으로 결제가 취소되요!
              </p>
              <p className="intro-text-wrapper-4">
                홈페이지의 구장 목록을 확인합니다. <br />
                &nbsp;&nbsp;* 단식 및 복식, 남녀 믹스 매칭 방식 등을 선택할 수
                있습니다.
                <br />
                참여 버튼을 클릭합니다.
                <br />
                결제를 진행합니다.
                <br />
                경기 목록을 확인합니다.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * 마이페이지 - 신청
                내역에서 확인하실 수 있습니다.
              </p>
              <div className="intro-group-2">
                <div className="intro-text-wrapper-5">About Hairpin</div>
                <img
                  className="intro-shuttle-cock"
                  alt="Shuttle-cock"
                  src="https://c.animaapp.com/OiWaV5Nj/img/vector-1.svg"
                />
              </div>
              <div className="intro-overlap-group-wrapper">
                <div className="intro-overlap-group-2">
                  <div className="intro-text-wrapper-6">About Hairpin</div>
                  <div className="intro-text-wrapper-7">Hairpin 소개</div>
                  <div className="intro-text-wrapper-8">Hairpin 활용 방법</div>
                  <div className="intro-text-wrapper-9">Hairpin 환불 정책</div>
                  <p className="intro-hairpin-introduce">
                    Hairpin은 배드민턴 동료를 모집해주고 코트 예약을 도와주는{" "}
                    <br />
                    중개 플랫폼이에요. 혼자 와도 즐겁게 즐길 수 있어요!
                  </p>
                  <p className="intro-text-wrapper-10">
                    모집 정원이 충족되지 않으면 자동으로 결제가 취소되요!
                  </p>
                  <p className="intro-text-wrapper-11">
                    홈페이지의 구장 목록을 확인합니다. <br />
                    단식 및 복식, 남녀 믹스 매칭 방식 등을 선택할 수 있습니다.
                    <br />
                    참여 버튼을 클릭합니다.
                    <br />
                    결제를 진행합니다.
                    <br />
                    경기를 준비합니다.
                  </p>
                  <div className="intro-rectangle-2" />
                  <div className="intro-text-wrapper-12">
                    배드민턴 구장 운영자
                  </div>
                  <p className="intro-text-wrapper-13">
                    배드민턴 구장을 등록하시려면 마이페이지 - 구장 등록 메뉴를
                    <br />
                    이용해주세요!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Header />
      </div>
    </div>
  );
};
