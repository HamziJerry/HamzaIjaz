
const TaskCard = (props) => {
  const handleClick = () => {
    console.log('clicked');
    props.updateState(props.background);
  }

  return(
    <div className="col-lg-4" onClick={handleClick}>
    <div className="card text-center m-2" style={{
      background: `${props.background}`,
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      color: `${props.color}`,
      width: "100%"
    }}>
      <div className="card-body">
          <h3>{props.background.toUpperCase()}</h3>
      </div>
    </div>
    </div>
  );
}

export default TaskCard;