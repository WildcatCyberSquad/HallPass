import Button from "./modules/Buttons";
import "./ClassSelection.css";
import { Link } from "react-router-dom";

function ClassSelection() {
  return (
    <div>
      <h1 className="title">Hall Pass Check Out</h1>
      <div class="container text-center background">
        <div class="row">
          <div class="col">
            <Link to="/First">
              <button class="checkOut">1st Period</button>
            </Link>
            <Link to="/Second">
              <button class="checkOut">2nd Period</button>
            </Link>
            <Link to="/Third">
              <button class="checkOut">3rd Period</button>
            </Link>
            <Link to="/Fourth">
              <button class="checkOut">4th Period</button>
            </Link>
            <Link to="/Fifth">
              <button class="checkOut">5th Period</button>
            </Link>
            <Link to="/Sixth">
              <button class="checkOut">6th Period</button>
            </Link>
            <Link to="/Seventh">
              <button class="checkOut">7th Period</button>
            </Link>
            <Link to="/Eighth">
              <button class="checkOut">8th Period</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ClassSelection;
