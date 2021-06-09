import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function RatingBar({ selectedMovie }) {

    console.log(selectedMovie.score)

  return (
    <>
      <div className="pie" style={{ width: "260px" }}>
        <CircularProgressbar
          className="mb-4"
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