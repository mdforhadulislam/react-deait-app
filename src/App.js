import { useDispatch } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { add_more } from "./Redux/Action";

function App() {
  // console.log(Reducers);

  const dispatch = useDispatch();

  const addMoreHendeler = () => {
    dispatch(add_more());
  };

  return (
    <div className=" relative overflow-auto">
      <div className="App w-[1250px] min-h-[90vh] m-auto border shadow-md mt-[30px] bg-white p-[20px]">
        <Header />

        <Body />

        <div
          className="button w-full bg-[#da1e37] text-white text-[17px] p-2 rounded-md mt-[20px] pl-[20px] cursor-pointer"
          onClick={addMoreHendeler}
        >
          Add More
        </div>
      </div>
    </div>
  );
}

export default App;
