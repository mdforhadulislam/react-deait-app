import React, { useState } from "react";
import { useSelector } from "react-redux";
import DayBox from "./DayBox";
import PopupBody from "./PopupBody";

function Body() {
  const [dayTime, setDayTime] = useState(false);

  const Reducers = useSelector((state) => state);

  const setTimeHendeler = (id) => {
    setDayTime(true);
  };
  return (
    <div className="body">
      {/*  */}
      {Reducers?.map((item) => (
        <ul key={item.id} className="list-none flex justify-between">
          <li className=" border w-full text-center py-[10px]">
            <textarea className=" w-3/4 outline-none border h-full"></textarea>
          </li>
          <li className=" border w-full text-center py-[10px]">
            <button
              onClick={() => setTimeHendeler(item.id)}
              className="bg-[#da1e37] text-white p-2 rounded"
            >
              Adjust Time
            </button>
          </li>

          {item?.days?.saturday ? (
            <DayBox value={item.days.saturday} />
          ) : (
            <DayBox value={""} />
          )}
          {item?.days?.sunday ? (
            <DayBox value={item.days.sunday} />
          ) : (
            <DayBox value={""} />
          )}
          {item?.days?.monday ? (
            <DayBox value={item.days.monday} />
          ) : (
            <DayBox value={""} />
          )}
          {item?.days?.tuesday ? (
            <DayBox value={item.days.tuesday} />
          ) : (
            <DayBox value={""} />
          )}
          {item?.days?.wednesday ? (
            <DayBox value={item.days.wednesday} />
          ) : (
            <DayBox value={""} />
          )}
          {item?.days?.thursday ? (
            <DayBox value={item.days.thursday} />
          ) : (
            <DayBox value={""} />
          )}
          {item?.days?.friday ? (
            <DayBox value={item.days.friday} />
          ) : (
            <DayBox value={""} />
          )}

          {dayTime && <PopupBody item={item} setDayTime={setDayTime} />}
        </ul>
      ))}

      {/*  */}
    </div>
  );
}

export default Body;
