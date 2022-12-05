const Input = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {props.name}
      </label>
      <input
        type={props.type}
        name={props.id}
        className="form-control"
        id={props.id}
        required
      />
    </div>
  );
};

export default Input;
