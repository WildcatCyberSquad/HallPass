import { Link } from "react-router-dom";
function CheckIn(props) {
  return (
    <div>
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
  );
}
export default CheckIn;
