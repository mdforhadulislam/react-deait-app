import React, { useState } from "react";

function CheckAndTimeBox({ title, name, value, action }) {
  const [isChecked, setIsChecked] = useState(value ? true : false);
  return (
    <div
      className="w-full flex justify-between align-middle py-[6px] px-[15px] bg-slate-200 mt-[10px] rounded-md"
      style={{ alignItems: "center" }}
    >
      <input
        type="checkbox"
        name={name}
        id={name}
        value={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
      />
      <label htmlFor={name} className="px-2 text-lg ">
        {title}
      </label>
      <input
        className="w-[50%] shadow outline-none rounded h-8 text-center"
        type="time"
        name="saturday"
        id="time"
        value={value}
        onChange={(e) => {
          if (isChecked) {
            action(e.target.value);
          }
        }}
      />
    </div>
  );
}

export default CheckAndTimeBox;
