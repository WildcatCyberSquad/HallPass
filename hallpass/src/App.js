import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClassSelection from "./ClassSelection";
import First from "./ClassPages/FirstPeriod";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClassSelection />}></Route>
        <Route path="/First" element={<First />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
