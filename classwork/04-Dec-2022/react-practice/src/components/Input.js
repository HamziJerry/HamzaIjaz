const Input = (props) => {
  return (
    <div className="form-floating mb-3">
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        name={props.id}
        placeholder={props.id}
      />
      <label htmlFor="order">{props.name}</label>
    </div>
  );
};

export default Input;
