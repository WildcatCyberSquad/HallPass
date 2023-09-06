import Button from "./modules/Buttons";
import "./ClassSelection.css";
import { Link } from "react-router-dom";

function ClassSelection() {
  return (
    <div>
      <h1 className="title">Mrs. Hunter</h1>
      <h1 className="title">Hall Pass Check Out</h1>
      <div class="container text-center red">
        <div class="row">
          <div class="col">
            <Link to="/First">
              <button class="classChoice">1st Period</button>
            </Link>
            <Link to="/Second">
              <button class="classChoice">2nd Period</button>
            </Link>
            <Link to="/Third">
              <button class="classChoice">3rd Period</button>
            </Link>
            <Link to="/Fourth">
              <button class="classChoice">4th Period</button>
            </Link>
            <Link to="/Fifth">
              <button class="classChoice">5th Period</button>
            </Link>
            <Link to="/Sixth">
              <button class="classChoice">6th Period</button>
            </Link>
            <Link to="/Seventh">
              <button class="classChoice">7th Period</button>
            </Link>
            <Link to="/Eighth">
              <button class="classChoice">8th Period</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ClassSelection;
