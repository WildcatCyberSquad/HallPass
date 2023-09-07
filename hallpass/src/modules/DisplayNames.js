import CheckIn from "../modules/CheckIn";
import Button from "../modules/Buttons";
function DisplayNames(props) {
  return (
    <div class="container text-center background">
      <div class="row">
        <div class="col-7 borderRight">
          {!props.classList.length ? (
            <h1>Class Not Found</h1>
          ) : (
            props.classList.map((classList) => {
              return (
                <Button
                  text={classList}
                  class="checkOut"
                  click={props.checkOut}
                  name={classList}
                ></Button>
              );
            })
          )}
        </div>
        <div className="col-5">
          <CheckIn></CheckIn>
        </div>
      </div>
    </div>
  );
}
export default DisplayNames;
