import "./Format.css";

import classList from "../ClassLists/first.json";
import Button from "../modules/Buttons";
import { Link } from "react-router-dom";
import Time from "../modules/Time";

function checkOut(name) {
  const time = Time();

  document.getElementById("name").innerHTML = name;
  document.getElementById("checkIn").innerHTML = "Checkout time: " + time;
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
            <h1 className="checkIn">Student out:</h1>
            <Link to="/">
              <div>
                <button className="checkIn" id="name"></button>
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
