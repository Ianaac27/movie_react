import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function RatingBarSearch({ selectedSearch }) {

  return (
    <>
      <div className="pie" style={{ width: "260px" }}>
        <CircularProgressbar
          className="mb-4"
          value={selectedSearch.score}
          maxValue={10}
          text={`${selectedSearch.score}`}
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

export default RatingBarSearch;