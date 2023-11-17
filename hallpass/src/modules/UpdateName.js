import axios from "axios";

const logName = async () => {
  await axios(`http://localhost:5050/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: {
      name: "owen",
    },
  });
};

function UpdateName(name, time) {
  document.getElementById("name").innerHTML = name;
  document.getElementById("checkIn").innerHTML = "Checkout time: " + time;
  logName(name, time);
}
export default UpdateName;
