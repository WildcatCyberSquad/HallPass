import Button from "./Buttons";
import "./Card.css";
import firstPeriod from "../ClassPeriods/first.json";

// function readForm(event) {
//   event.preventDefault();
//   var name = document.getElementById("nameData").value;
//   document.getElementById("Name").innerHTML = name;
//   document.getElementById("nameData").value = "";
// }

function First() {
  firstPeriod.map((firstPeriod) => {
    return <Button text={firstPeriod}></Button>;
  });
}

function checkIn() {
  document.getElementById("Name").innerHTML = "";
}

function Card() {
  return (
    <div class="container text-center background">
      <div class="row">
        <div class="col borderRight">
          <Button
            class="checkOut"
            text="1st Period"
            classNumber={First}
          ></Button>

          <button class="checkOut">2nd Period</button>
          <button class="checkOut">3rd Period</button>
          <button class="checkOut">4th Period</button>
          <button class="checkOut">5th Period</button>
          <button class="checkOut">6th Period</button>
          <button class="checkOut">7th Period</button>
          <button class="checkOut">8th Period</button>
        </div>
        <div class="col borderRight"></div>
        <button class="col  checkIn" id="Name" onClick={checkIn}></button>
      </div>
    </div>
  );
}
export default Card;
