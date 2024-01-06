import React from "react";
import { Facebook } from "../components/Facebook/Facebook";
import { Group } from "../components/Group/Group";
import { GroupWrapper } from "../components/GroupWarpper/GroupWarpper";
import { Saly } from "../components/Saly/Saly";
import { Apple } from "../icons/Apple/Apple";
import { Google } from "../icons/Google/Google";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="div-2">
        <div className="group-2">
          <div className="overlap-group-3">
            <div className="group-3">
              <div className="group-4">
                <div className="text-wrapper-3">Sign in to</div>
                <div className="comment">함께 즐거운 배드민턴</div>
              </div>
              <div className="group-5">
                <div className="text-wrapper-4">계정이 없으신가요?</div>
                <div
                  className="register-here"
                  onClick={() => navigate("/register")}
                >
                  {" "}
                  Register here
                </div>
              </div>
            </div>
            <Saly className="saly-14" />
            <img
              className="img"
              alt="Saly"
              src="https://c.animaapp.com/X1DvO03e/img/saly-14.svg"
            />
          </div>
        </div>
        <div className="group-6">
          <Group className="group-15" placeHolder={"Enter Email for login"} />
          <div className="group-7">
            <Group
              className="group-instance"
              text="Create User name"
              placeHolder={"Enter Password for login"}
            />
            <div className="text-wrapper-6">Forgor password ?</div>
          </div>
          <GroupWrapper className="group-14" text={"로그인"} />
          <div className="text-wrapper-7">or continue with</div>
          <div className="group-9">
            <div className="group-10">
              <Facebook className="facebook-instance" />
              <Apple className="apple-instance" />
              <Google className="google-instance" />
            </div>
          </div>
          <div className="text-wrapper-8">Sign in</div>
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
