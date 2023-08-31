import "./Format.css";

import firstPeriod from "../ClassLists/first.json";
import Button from "../modules/Buttons";

function checkOut(name) {
  document.getElementById("checkIn").innerHTML = name;
  var today = new Date();
  var date =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
  var hours = today.getHours();
  if (hours > 12) {
    hours -= 12;
  }
  var minutes = today.getMinutes();
  var time = hours + ":" + minutes;
  var dateTime = date + " " + time;
  document.getElementById("time").innerHTML = dateTime;
}

function First() {
  return (
    <div>
      <h1 className="title">1st Period</h1>
      <div class="container text-center background">
        <div class="row">
          <div class="col">
            {!firstPeriod.length ? (
              <h1>Class Not Found</h1>
            ) : (
              firstPeriod.map((firstPeriod) => {
                return (
                  <Button
                    text={firstPeriod}
                    class="checkOut"
                    click={checkOut}
                    name={firstPeriod}
                  ></Button>
                );
              })
            )}
          </div>
          <div className="col">
            <button className="checkIn" id="checkIn"></button>
            <div id="time" className="time"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default First;
