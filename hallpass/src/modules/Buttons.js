function Button(props) {
  return (
    <button class={props.class} onClick={(event) => props.click(props.name)}>
      {props.text}
    </button>
  );
}
export default Button;
