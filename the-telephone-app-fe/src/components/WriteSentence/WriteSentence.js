import "../DescribePicture/DescribePicture.css";
import "./WriteSentence.css";
import "../Draw/Draw.css";
import "../../assets/index.css";
import imgLogo from "../../assets/logo.png";
import imgWrite from "../../assets/w.png";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IP, TIME } from "../../config/config";
import { SENTENCES } from "../../config/config";
import LoadingEffect from "../LoadingEffect/LoadingEffect";

const WriteSentence = () => {
  const location = useLocation();
  const id_room = location.state?.id_room;
  const mode = location.state?.mode;
  const currentName = location.state?.name;
  const turn = location.state?.turn;
  const totalTurn = location.state?.data.length;
  const [timer, setTimer] = useState(TIME);
  const buttonDoneRef = useRef(null);
  const data = location.state?.data;
  let index;
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  for (let i = 0; i < data.length; i++) {
    if (data[i].nickname === currentName) {
      index = i;
    }
  }
  let intervalId;
  useEffect(() => {
    intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      clearInterval(intervalId);
      buttonDoneRef.current.click();
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);

  const [isLoading, setIsLoading] = useState(true);
  const [isWaiting, setIsWaiting] = useState(false);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  const [content, setContent] = useState("");

  const handleChangeContent = (event) => {
    setContent(event.target.value);
  };

  const handleDone = async () => {
    if (timer > 0) {
      clearInterval(intervalId);
      setIsWaiting(true);
      setIsLoading(true);
    }
    setIsLoading(true);
    let dataSend = content.replace(new RegExp(" ", "g"), "_");
    await delay(index * 100);
    const response = await axios.post(
      IP + `user/done/${id_room}/${currentName}/${dataSend}/${turn}`
    );
  };

  useEffect(() => {
    if (content.trim() === "") {
      const randomContent =
        SENTENCES[Math.floor(Math.random() * SENTENCES.length)];
      setContent(randomContent);
    }
  }, [content]);

  return (
    <div>
      <LoadingEffect loading={isLoading} waiting={isWaiting} />
      <div className="container-fluid app-bg ">
        <div className="row vh-100">
          <div className="col-10 center-block">
            <div className="row h-90 mt-5">
              <div className="col-2 left align custom-font">
                {turn >= totalTurn ? totalTurn : turn} / {totalTurn}
              </div>
              <div className="col-8 center align">
                <img src={imgLogo} alt="" className="img-logo" />
              </div>
              <div className="col-2 ws-time-padding align custom-font">
                <div className="ps-5">{timer}</div>
              </div>
              <div className="row section">
                <div className="col-6 center-block">
                  <img
                    className="img-write center-block"
                    src={imgWrite}
                    alt=""
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-8 d-flex center-block">
                  <input
                    type="text"
                    className="ws-1-input center-block"
                    placeholder={content}
                    onChange={handleChangeContent}
                  />
                  <button
                    ref={buttonDoneRef}
                    className="button ms-5 center-block"
                    onClick={handleDone}
                  >
                    <BsFillCheckCircleFill className="icon" />
                    DONE!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteSentence;
