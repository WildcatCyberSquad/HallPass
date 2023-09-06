import "./Format.css";

import classList from "../ClassLists/sixth.json";
import Button from "../modules/Buttons";
import { Link } from "react-router-dom";
import Time from "../modules/Time";

function checkOut(name) {
  const time = Time();

  document.getElementById("checkIn").innerHTML =
    name + "'s checkout time: " + time;
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
              <div>
                <button className="checkIn" id="checkIn">
                  Mrs. Hunter
                </button>
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
export default Sixth;
