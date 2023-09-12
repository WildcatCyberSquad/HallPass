import XLSX from "xlsx";

const workbook = XLSX.readFile("log.xlsx");
const worksheet = workbook.Sheets["Sheet1"];

const arrStudents = XLSX.utils.sheet_to_json(worksheet);

function UpdateName(name, time) {
  document.getElementById("name").innerHTML = name;
  document.getElementById("checkIn").innerHTML = "Checkout time: " + time;
}
export default UpdateName;
