const Input = (props) => {
  return (
    <div className="form-floating">
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        name={props.id}
        placeholder={props.id}
      />
      <label htmlFor={props.id}>{props.text}</label>
    </div>
  );
};

export default Input;
