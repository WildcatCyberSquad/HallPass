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
          <form onSubmit={readForm}>
            <input type="text" id="nameData" placeholder="Name"></input>
          </form>

          <button onClick={readForm} class="checkOut">
            Check Out
          </button>
        </div>
        {/* <div class="col borderRight" id="Name"> */}
        <button class="col checkIn" id="Name" onClick={checkIn}></button>
      </div>
    </div>
  );
}
export default Card;
