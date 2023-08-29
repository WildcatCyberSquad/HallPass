import Button from "./Buttons";
import "./Card.css";
function readForm() {
  var name = document.getElementById("nameData").value;
  document.getElementById("Name").innerHTML = name;
  document.getElementById("nameData").value = "";
}

function checkIn() {
  document.getElementById("Name").innerHTML = "";
}

function Card() {
  return (
    <div class="container text-center background">
      <div class="row">
        <div class="col borderRight">
          <Button text="1st Period"></Button>
          <button class="checkOut"></button>
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
