function Button(props) {
  return (
    <button class={props.class} onClick={props.classNumber}>
      {props.text}
    </button>
  );
}
export default Button;
