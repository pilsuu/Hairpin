import React from "react";
import { Group } from "../components/Group/Group";
import { Apple } from "../icons/Apple/Apple";
import { Google } from "../icons/Google/Google";
import { Facebook } from "../components/Facebook/Facebook";
import { GroupWrapper } from "../components/GroupWarpper/GroupWarpper";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";

export default function MatchReservePage() {
  const navigate = useNavigate();

  return (
    <div className="register">
      <div className="div-2">
        <div className="group-2">
          <div className="overlap-group-3">
            <div className="group-3">
              <div className="group-4">
                <div className="text-wrapper-99">Sign Up to</div>
                <div className="comment">함께 즐거운 배드민턴</div>
              </div>
              <div className="group-5">
                <div className="text-wrapper-3">이미 계정이 있으신가요?</div>
                <div className="login-here" onClick={() => navigate("/login")}>
                  {" "}
                  Login here
                </div>
              </div>
            </div>
            <img
              className="saly"
              alt="Saly"
              src="https://c.animaapp.com/U0xVSMO2/img/saly-14.svg"
            />
          </div>
        </div>
        <div className="group-6">
          <Group
            className="group-15"
            text="Enter Email"
            placeHolder={"Enter Email"}
            // inputType={"regEmail"}
          />
          <Group
            className="group-instance"
            text="Create User name"
            placeHolder={"Enter Password"}
          />
          <Group
            className="group-15-instance"
            text="Contact number"
            placeHolder={"Confirm Password"}
          />
          <Group
            className="group-9"
            text="Contact number"
            placeHolder={"Enter Gender"}
          />
          {/* <Group className="group-9" text="Contact number" /> */}
          <GroupWrapper className="group-14" text={"회원가입"} />
          <div className="text-wrapper-5">or continue with</div>
          <div className="group-10">
            <div className="group-11">
              <Facebook className="facebook" />
              <Apple className="apple-1" />
              <Google className="google" />
            </div>
          </div>
          <div className="text-wrapper-6">Sign Up</div>
        </div>
        <div
          className="logo-hairpin"
          onClick={() => {
            navigate("/");
          }}
        >
          Hairpin
        </div>
      </div>
    </div>
  );
}
