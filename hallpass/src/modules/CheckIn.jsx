import { Link } from "react-router-dom";
import axios from "axios";

// const Log = async () => {
//   const logger = await axios(`http://localhost:5050/${}`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     data: {
//       name: ,
//     },
//   });
// };

function CheckIn(props) {
  return (
    <div>
      <h1 className="checkIn">Student out:</h1>
      <Link to="">
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
