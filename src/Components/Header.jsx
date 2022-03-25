import React from "react";

function Header() {
  return (
    <div className="header">
      <ul className=" list-none flex justify-between bg-[#da1e37] text-white p-2 text-[17px] px-[30px] rounded-t-md">
        <li className="w-[70%] text-center">Meals</li>
        <li className="w-[120%] text-center">Adjust Time</li>
        <li className="w-[110%] text-center">Saturday</li>
        <li className="w-full text-center">Sunday</li>
        <li className="w-[110%] text-center">Monday</li>
        <li className="w-[100%] text-center">Tuesday</li>
        <li className="w-[110%] text-center">Wednestday</li>
        <li className="w-[125%] text-center">Thursday</li>
        <li className="w-[65%] text-center">Friday</li>
      </ul>
    </div>
  );
}

export default Header;
