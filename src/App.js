import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckAndTimeBox from "./Components/CheckAndTimeBox";
import DayBox from "./Components/DayBox";
import { add_more, set_time } from "./Redux/Action";

function App() {
  const [dayTime, setDayTime] = useState(false);
  const [isId, setIsId] = useState("");
  const [isChecked, setIsChecked] = useState({
    saturday: "",
    sunday: "",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
  });

  const Reducers = useSelector((state) => state);
  // console.log(Reducers);

  const dispatch = useDispatch();

  const addMoreHendeler = () => {
    dispatch(add_more());
  };

  const setTimeHendeler = (id) => {
    setIsId(id);
    setDayTime(true);
    console.log(isChecked);
  };

  const saveHendeler = () => {
    dispatch(set_time({ id: isId, days: isChecked }));
    setIsChecked({
      saturday: "",
      sunday: "",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
    });
  };

  return (
    <div className=" relative overflow-auto">
      <div className="App w-[1250px] min-h-[90vh] m-auto border shadow-md mt-[30px] bg-white p-[20px]">
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
            </ul>
          ))}

          {/*  */}
        </div>
        <div
          className="button w-full bg-[#da1e37] text-white text-[17px] p-2 rounded-md mt-[20px] pl-[20px] cursor-pointer"
          onClick={addMoreHendeler}
        >
          Add More
        </div>
      </div>

      {dayTime && (
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
                value={isChecked.saturday}
                action={(value) => {
                  setIsChecked({ ...isChecked, saturday: value });
                }}
              />
              <CheckAndTimeBox
                title={"Sunday"}
                name={"Sunday"}
                value={isChecked.sunday}
                action={(value) => {
                  setIsChecked({ ...isChecked, sunday: value });
                }}
              />
              <CheckAndTimeBox
                title={"Monday"}
                name={"Monday"}
                value={isChecked.monday}
                action={(value) => {
                  setIsChecked({ ...isChecked, monday: value });
                }}
              />
              <CheckAndTimeBox
                title={"Tuesday"}
                name={"Tuesday"}
                value={isChecked.tuesday}
                action={(value) => {
                  setIsChecked({ ...isChecked, tuesday: value });
                }}
              />
              <CheckAndTimeBox
                title={"Wednesday"}
                name={"Wednesday"}
                value={isChecked.wednesday}
                action={(value) => {
                  setIsChecked({ ...isChecked, wednesday: value });
                }}
              />
              <CheckAndTimeBox
                title={"Thursday"}
                name={"Thursday"}
                value={isChecked.thursday}
                action={(value) => {
                  setIsChecked({ ...isChecked, thursday: value });
                }}
              />
              <CheckAndTimeBox
                title={"Friday"}
                name={"Friday"}
                value={isChecked.friday}
                action={(value) => {
                  setIsChecked({ ...isChecked, friday: value });
                }}
              />
            </div>

            <div className="w-full h-auto p-[15px] pb-[25px] flex justify-evenly ">
              <button
                className=" w-[30%] outline-none border shadow-md bg-[#fc8b8b] text-white rounded-md px-[15px] py-[5px]"
                onClick={() => {
                  setDayTime(false);
                  saveHendeler();
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
      )}
    </div>
  );
}

export default App;
