import RightMark from "./Assets/right-mark.svg";

function App() {
  return (
    <div className="App">
      <div className="header">
        <ul>
          <li>Meals</li>
          <li>Adjust Time</li>
          <li>Saturday</li>
          <li>Sunday</li>
          <li>Monday</li>
          <li>Tuesday</li>
          <li>Wednestday</li>
          <li>Thursday</li>
          <li>Friday</li>
        </ul>
      </div>
      <div className="body">
        <ul>
          <li>
            <input type="text" />
          </li>
          <li>
            <button>Adjust Time</button>
          </li>
          <li>
            <img src={RightMark} alt="RightMark" />
            <p>10:03pm</p>
          </li>

          <li>
            <img src={RightMark} alt="RightMark" />
            <p>10:03pm</p>
          </li>

          <li>
            <img src={RightMark} alt="RightMark" />
            <p>10:03pm</p>
          </li>

          <li>
            <img src={RightMark} alt="RightMark" />
            <p>10:03pm</p>
          </li>

          <li>
            <img src={RightMark} alt="RightMark" />
            <p>10:03pm</p>
          </li>

          <li>
            <img src={RightMark} alt="RightMark" />
            <p>10:03pm</p>
          </li>

          <li>
            <img src={RightMark} alt="RightMark" />
            <p>10:03pm</p>
          </li>

          {/*  */}
        </ul>
      </div>
      <div className="button">Add More</div>
    </div>
  );
}

export default App;
