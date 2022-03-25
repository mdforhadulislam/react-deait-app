import React from "react";
import RightMark from "../Assets/right-mark.svg";

function DayBox({ value }) {
  return (
    <li className=" border w-full text-center py-[10px]">
      {value && <img className="m-auto" src={RightMark} alt="RightMark" />}
      <p>{value && value}</p>
    </li>
  );
}

export default DayBox;
