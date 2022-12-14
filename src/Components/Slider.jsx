import "./Slider.css";
import { data } from "./data.js";
import { ReactComponent as PatternBg } from "./img/pattern-bg.svg";
import { ReactComponent as PatternCurve } from "./img/pattern-curve.svg";
import { ReactComponent as PatternQuotes } from "./img/pattern-quotes.svg";
import { ReactComponent as Prev } from "./img/icon-prev.svg";
import { ReactComponent as Next } from "./img/icon-next.svg";
import { useState } from "react";
function Slider() {
  const [currIdx, setCurrIdx] = useState(0);
  const clickPrev = () => {
    if (currIdx != 0) {
      setCurrIdx(currIdx - 1);
    }
  };

  const clickNext = () => {
    if (currIdx != data.length - 1) {
      setCurrIdx(currIdx + 1);
    }
  };
  return (
    <main className="Slider">
      <div className="container">
        <div className="quote">
          <div className="quote--bg-pic">
            <PatternQuotes />
          </div>
          <h1 className="quote--text">{data[currIdx].quote}</h1>
          <div className="author">
            <p className="quote--author">{data[currIdx].author}</p>
            <p className="quote--role">{data[currIdx].role}</p>
          </div>
        </div>
        <div className="picture">
          <div className="bg-picture">
            <PatternBg />
          </div>
          <img src={require(`${data[currIdx].image}`)} alt="profile image"></img>
          <div className="button">
            <button className="left-btn" onClick={clickPrev} aria-label="Prev">
              <Prev />
            </button>
            <button className="right-btn" onClick={clickNext} aria-label="Next">
              <Next />
            </button>
          </div>
        </div>
      </div>
      <div className="curve">
        <PatternCurve />
      </div>
    </main>
  );
}

export default Slider;