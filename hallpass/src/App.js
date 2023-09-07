import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClassSelection from "./ClassSelection";
import first from "./ClassLists/first.json";
import second from "./ClassLists/second.json";
import fourth from "./ClassLists/fourth.json";
import third from "./ClassLists/third.json";
import fifth from "./ClassLists/fifth.json";
import sixth from "./ClassLists/sixth.json";
import seventh from "./ClassLists/seventh.json";
import eighth from "./ClassLists/eighth.json";
import ClassPeriods from "./ClassPages/ClassPeriods";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClassSelection />}></Route>
        <Route
          path="/First"
          element={<ClassPeriods list={first} text="1st Period" />}
        ></Route>
        <Route
          path="/Second"
          element={<ClassPeriods list={second} text="2nd Period" />}
        ></Route>
        <Route
          path="/Third"
          element={<ClassPeriods list={fourth} text="3rd Period" />}
        ></Route>
        <Route
          path="/Fourth"
          element={<ClassPeriods list={third} text="4th Period" />}
        ></Route>
        <Route
          path="/Fifth"
          element={<ClassPeriods list={fifth} text="5th Period" />}
        ></Route>
        <Route
          path="/Sixth"
          element={<ClassPeriods list={sixth} text="6th Period" />}
        ></Route>
        <Route
          path="/Seventh"
          element={<ClassPeriods list={seventh} text="7th Period" />}
        ></Route>
        <Route
          path="/Eighth"
          element={<ClassPeriods list={eighth} text="8th Period" />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
