import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function RatingBar({ selectedMovie }) {
  return (
    <>
      <div className="pie" style={{ width: "105px" }}>
        <CircularProgressbar
          value={selectedMovie.score}
          maxValue={10}
          text={`${selectedMovie.score}`}
          styles={buildStyles({
            textColor: "grey",
            pathColor: "red",
            trailColor: "white"
          })}
        />
      </div>
    </>
  );
}

export default RatingBar;