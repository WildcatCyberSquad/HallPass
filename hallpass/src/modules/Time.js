function Time() {
  var today = new Date();

  var hours = today.getHours();
  var m = "Am";
  if (hours > 12) {
    hours -= 12;
    m = "Pm";
  }
  var minutes = today.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var time = hours + ":" + minutes + " " + m;

  return time;
}
export default Time;
