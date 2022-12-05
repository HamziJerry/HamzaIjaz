import { useState } from "react";
import Input from "./Input";
import Table from "./Table";

const Task2 = () => {
  const [order, setOrder] = useState([]);
  const [pending, setPending] = useState([]);
  const [completed, setCompleted] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataArr = [...new FormData(e.target)];
    const data = Object.fromEntries(dataArr);
    if (data?.order) {
      setOrder((current) => [...current, data.order]);
    }
    if (data?.pending) {
      setPending((current) => [...current, data.pending]);
    }
    if (data?.completed) {
      setCompleted((current) => [...current, data.completed]);
    }
  };

  return (
    <div>
      <h1 className="mb-3">Order Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <Input name={"Order"} id={"order"} type={"text"} />
          </div>
          <div className="col">
            <Input name={"Pending"} id={"pending"} type={"text"} />
          </div>
          <div className="col">
            <Input name={"Completed"} id={"completed"} type={"text"} />
          </div>
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-primary" type="submit">
          <i className="fas fa-solid fa-plus"></i> Add
          </button>
        </div>
      </form>
      <br />
      <div className="row">
        <div className="col">
          <Table header={"Order"} headerBg={"warning"} state={order} setState={(params) => setOrder(params)} />
        </div>
        <div className="col">
          <Table header={"Pending"} headerBg={"danger"} state={pending} setState={(params) => setPending(params)} />
        </div>
        <div className="col">
          <Table header={"Completed"} headerBg={"success"} state={completed} setState={(params) => setCompleted(params)} />
        </div>
      </div>
    </div>
  );
};

export default Task2;
