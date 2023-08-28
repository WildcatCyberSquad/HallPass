import "./Card.css";
function readForm() {
  var name = document.getElementById("nameData").value;
  document.getElementById("Name").innerHTML = name;
}

function checkIn() {
  document.getElementById("Name").innerHTML = "";
}

function Card() {
  return (
    <div class="container text-center background">
      <div class="row">
        <div class="col borderRight">
          <input type="text" id="nameData" placeholder="Name"></input>

          <button onClick={readForm} class="checkOut">
            Check Out
          </button>
        </div>
        <div class="col borderRight" id="Name"></div>
        {/* <div class="col">
          <button class="button" onClick={checkIn}>
            Check In
          </button>
        </div> */}
      </div>
    </div>
  );
}
export default Card;
