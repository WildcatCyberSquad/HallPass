import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <Link to="/">
            <button className="back">Back</button>
          </Link>
        </div>
        <div class="col">
          <h1 className="title">{props.period}</h1>
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
}
export default Header;
