import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClassSelection from "./ClassSelection";
import First from "./ClassPages/FirstPeriod";
import Second from "./ClassPages/SecondPeriod";
import Third from "./ClassPages/ThirdPeriod";
import Fourth from "./ClassPages/FourthPeriod";
import Fifth from "./ClassPages/FifthPeriod";
import Sixth from "./ClassPages/SixthPeriod";
import Seventh from "./ClassPages/SeventhPeriod";
import Eighth from "./ClassPages/EighthPeriod";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClassSelection />}></Route>
        <Route path="/First" element={<First />}></Route>
        <Route path="/Second" element={<Second />}></Route>
        <Route path="/Third" element={<Third />}></Route>
        <Route path="/Fourth" element={<Fourth />}></Route>
        <Route path="/Fifth" element={<Fifth />}></Route>
        <Route path="/Sixth" element={<Sixth />}></Route>
        <Route path="/Seventh" element={<Seventh />}></Route>
        <Route path="/Eighth" element={<Eighth />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
