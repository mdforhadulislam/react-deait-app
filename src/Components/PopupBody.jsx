import React from "react";
import { useDispatch } from "react-redux";
import { change_time } from "../Redux/Action";
import CheckAndTimeBox from "./CheckAndTimeBox";
function PopupBody({ item, setDayTime }) {
  const dispatch = useDispatch();
  return (
    <div
      className="w-full min-h-[100%] fixed bg-[#bdbdbde0]  top-0 left-0  flex justify-center align-middle  "
      style={{ alignItems: "center" }}
    >
      {/*  */}

      <div className="w-[600px] bg-white shadow-md rounded-md">
        <div className="w-full p-[15px]">
          <h1 className="text-[25px] text-center font-bold">
            Choose Day And Set Time
          </h1>
        </div>
        <div className="max-w-[500px] flex justify-center align-middle flex-col m-auto">
          <CheckAndTimeBox
            title={"Saturday"}
            name={"saturday"}
            value={item.days.saturday}
            action={(value) => {
              dispatch(
                change_time({
                  id: item.id,
                  days: { saturday: value },
                })
              );
            }}
          />

          <CheckAndTimeBox
            title={"Sunday"}
            name={"sunday"}
            value={item.days.sunday}
            action={(value) => {
              dispatch(
                change_time({
                  id: item.id,
                  days: { sunday: value },
                })
              );
            }}
          />

          <CheckAndTimeBox
            title={"Monday"}
            name={"monday"}
            value={item.days.monday}
            action={(value) => {
              dispatch(
                change_time({
                  id: item.id,
                  days: { monday: value },
                })
              );
            }}
          />

          <CheckAndTimeBox
            title={"Tuesday"}
            name={"tuesday"}
            value={item.days.tuesday}
            action={(value) => {
              dispatch(
                change_time({
                  id: item.id,
                  days: { tuesday: value },
                })
              );
            }}
          />

          <CheckAndTimeBox
            title={"Wednesday"}
            name={"wednesday"}
            value={item.days.wednesday}
            action={(value) => {
              dispatch(
                change_time({
                  id: item.id,
                  days: { wednesday: value },
                })
              );
            }}
          />

          <CheckAndTimeBox
            title={"Thursday"}
            name={"thursday"}
            value={item.days.thursday}
            action={(value) => {
              dispatch(
                change_time({
                  id: item.id,
                  days: { thursday: value },
                })
              );
            }}
          />

          <CheckAndTimeBox
            title={"Friday"}
            name={"friday"}
            value={item.days.friday}
            action={(value) => {
              dispatch(
                change_time({
                  id: item.id,
                  days: { friday: value },
                })
              );
            }}
          />
        </div>

        <div className="w-full h-auto p-[15px] pb-[25px] flex justify-evenly ">
          <button
            className=" w-[30%] outline-none border shadow-md bg-[#fc8b8b] text-white rounded-md px-[15px] py-[5px]"
            onClick={() => {
              setDayTime(false);
            }}
          >
            Save
          </button>
          <button
            className="w-[30%]  outline-none border shadow-md bg-[#ffffff] text-black rounded-md px-[15px] py-[5px]"
            onClick={() => {
              setDayTime(false);
            }}
          >
            Cencel
          </button>
        </div>

        {/*  */}
      </div>
    </div>
  );
}

export default PopupBody;
