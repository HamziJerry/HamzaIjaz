import { useState } from "react";

const Task2 = () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const action = [
    { name: "Addition", color: "primary" },
    { name: "Subtraciton", color: "primary" },
    { name: "Multiplication", color: "primary" },
    { name: "Division", color: "primary" },
    { name: "Clear", color: "danger" },
  ];

  const [calculator, setCalculator] = useState({
    number1: null,
    number2: null,
    result: null,
  });

  const handleClickNumber1 = (e) => {
    console.log("clicked", +e.target.innerHTML);
    setCalculator({ ...calculator, number1: +e.target.innerHTML });
  };
  const handleClickNumber2 = (e) => {
    console.log("clicked", +e.target.innerHTML);
    setCalculator({ ...calculator, number2: +e.target.innerHTML });
  };

  const handleAction = (e) => {
    console.log("action", e.target.innerHTML);
    const action = e.target.innerHTML;
    if (action === "Addition") {
      let add = calculator.number1 + calculator.number2;
      console.log(add);
      setCalculator({ ...calculator, result: add });
    }else if (action === "Subtraction") {
      let sub = calculator.number1 - calculator.number2;
      console.log(sub);
      setCalculator({ ...calculator, result: sub });
    }else if (action === "Division") {
      let divide = calculator.number1 / calculator.number2;
      console.log(divide);
      setCalculator({ ...calculator, result: divide });
    }else if (action === "Multiplication") {
      let multiply = calculator.number1 * calculator.number2;
      console.log(multiply);
      setCalculator({ ...calculator, result: multiply });
    }else if (action === "Clear") {
      setCalculator({number1: null, number2: null, result: null });
    }
  };

  return (
    <div className="center" style={{ marginTop: "1.2em" }}>
      <div
        className="card text-center"
        style={{
          background: "hsla(255,255, 255, 0.5)",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          width: "50vw",
        }}
      >
        <div className="card-body">
          <h3>Number 1</h3>
          {array.map((el) => {
            return (
              <button
                className="btn btn-secondary m-1"
                onClick={(e) => {
                  handleClickNumber1(e);
                }}
              >
                {el}
              </button>
            );
          })}
          <h3>Number 2</h3>
          {array.map((el) => {
            return (
              <button
                className="btn btn-secondary m-1"
                onClick={(e) => {
                  handleClickNumber2(e);
                }}
              >
                {el}
              </button>
            );
          })}
          <h3>Action</h3>
          {action.map((el) => {
            return (
              <button
                className={`btn btn-${el.color} m-1`}
                onClick={(e) => {
                  handleAction(e);
                }}
              >
                {el.name}
              </button>
            );
          })}
          <p className="mt-2">
            Result:{" "}
            {calculator.result ? calculator.result : "No Calculation Performed"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task2;
