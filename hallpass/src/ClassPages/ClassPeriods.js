import "./Format.css";

import Time from "../modules/Time";
import UpdateName from "../modules/UpdateName";
import Header from "../modules/Header";
import DisplayNames from "../modules/DisplayNames";

function checkOut(name) {
  UpdateName(name, Time());
}

function ClassPeriods(props) {
  return (
    <div>
      <Header period={props.text}></Header>
      <DisplayNames classList={props.list} checkOut={checkOut}></DisplayNames>
    </div>
  );
}
export default ClassPeriods;
