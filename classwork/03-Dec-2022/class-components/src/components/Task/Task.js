import { useState } from "react";
import Form from "./Form";

const Task = () => {
  const [showResult, setShowResult] = useState(false);
  const [formData, setFormData] = useState({});

  const getResult = () => {
    setShowResult(!showResult);
  };

  return (
    <div className="m-3">
      {!showResult ? (
        <Form
          updateFormData={(params) => {
            setFormData(params);
          }}
          updateShowResult={(params) => {
            setShowResult(params);
          }}
        />
      ) : (
        <div className="mt-3">
          <h1>
            Welcome {formData.devName}{" "}
            <span
              className={`badge text-bg-${
                formData.satisfied ? "success" : "danger"
              }`}
            >
              {formData.satisfied ? "Satisfied" : "Not Satisfied"}
            </span>
          </h1>
          <p>
            <strong>Developer Name:</strong> <em>{formData.devName}</em>
          </p>
          <p>
            <strong>Developer Email:</strong> <em>{formData.email}</em>
          </p>
          <p>
            <strong>Developer Password:</strong> <em>{formData.password}</em>
          </p>
          <p>
            <strong>Developer Address:</strong> <em>{formData.address}</em>
          </p>
          <p>
            <strong>Developer Feedback:</strong> <em>{formData.feedback}</em>
          </p>
          <button onClick={getResult} className="btn btn-secondary">
            Show {showResult ? "Form" : "Result"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Task;
