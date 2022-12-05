const Textarea = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {props.name}
      </label>
      <textarea
        className="form-control"
        id={props.id}
        rows={props.rows}
        name={props.id}
      ></textarea>
    </div>
  );
};

export default Textarea;
