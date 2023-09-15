function UpdateName(name, time) {
  document.getElementById("name").innerHTML = name;
  document.getElementById("checkIn").innerHTML = "Checkout time: " + time;
}
export default UpdateName;
