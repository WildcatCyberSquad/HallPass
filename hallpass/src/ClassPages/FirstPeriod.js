import "./Format.css";

import classList from "../ClassLists/first.json";
import Button from "../modules/Buttons";
import { Link } from "react-router-dom";

function checkOut(name) {
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
  var dateTime = time;

  document.getElementById("checkIn").innerHTML =
    name + " checkout time: " + dateTime;
}

function First() {
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
            <h1 className="title">1st Period</h1>
          </div>
          <div class="col"></div>
        </div>
      </div>

      <div class="container text-center background">
        <div class="row">
          <div class="col-7 borderRight">
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
          <div className="col-5">
            <Link to="/">
              <div>
                <button className="checkIn" id="checkIn"></button>
              </div>
              <div>
                <button className="checkIn2">Check In</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default First;
