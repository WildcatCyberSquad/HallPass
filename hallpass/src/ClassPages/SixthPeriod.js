import "./Format.css";

import classList from "../ClassLists/sixth.json";
import Button from "../modules/Buttons";
import { Link } from "react-router-dom";

function checkOut(name) {
  document.getElementById("checkIn").innerHTML = name;
  var today = new Date();
  var date =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
  var hours = today.getHours();
  var m = "Am";
  if (hours > 12) {
    hours -= 12;
    m = "Pm";
  }
  var minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  var time = hours + ":" + minutes + " " + m;
  var dateTime = date + " " + time;
  document.getElementById("time").innerHTML = dateTime;
}

function Sixth() {
  return (
    <div>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <Link to="/">
              <button className="back">Back</button>
            </Link>
          </div>
          <div class="col">
            <h1 className="title">6th Period</h1>
          </div>
          <div class="col"></div>
        </div>
      </div>

      <div class="container text-center background">
        <div class="row">
          <div class="col-8 borderRight">
            {!classList.length ? (
              <h1>Class Not Found</h1>
            ) : (
              classList.map((classList) => {
                return (
                  <Button
                    text={classList}
                    class="checkOut"
                    click={checkOut}
                    name={classList}
                  ></Button>
                );
              })
            )}
          </div>
          <div className="col-4">
            <Link to="/">
              <button className="checkIn" id="checkIn"></button>
              <div id="time" className="time"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sixth;
