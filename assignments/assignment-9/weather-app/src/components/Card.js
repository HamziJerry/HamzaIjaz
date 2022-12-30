const Card = (props) => {
  return (
    <div className="glassmorphism card p-4 mb-3" style={{ width: props.width }}>
      {props.inner}
    </div>
  );
};

export default Card;
