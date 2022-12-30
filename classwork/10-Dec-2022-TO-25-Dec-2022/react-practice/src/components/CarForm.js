import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
// import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";


const createCarObj = async (data) => {
  const { data: response } =await axios.post('http://localhost:8000/cars', data);
  return response.data;
}

const CarForm = () => {
  // const navigate = useNavigate();
  const { isLoading, mutate } = useMutation(createCarObj);
  const [carData , setCarData] = useState(null); 
  const handleSave = async (e) => {
    e.preventDefault();
    const dataArr = [...new FormData(e.target)];
    const data = Object.fromEntries(dataArr);
    // console.log(data);
    setCarData(carData);
    // console.log(carData);
    mutate(data);
    // navigate('/cars');
  };

  if (isLoading) {
    return (
      <div
        className="mt-3"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <ScaleLoader color="#ccddd9" />
      </div>
    );
  }

  return(
    <div className="center" style={{marginTop: '1.2em'}}>
      <div
        className="card text-center"
        style={{
          background: "hsla(0, 0%, 100%, 0.8)",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          width: "50vw",
        }}
      >
        <div className="card-body">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <h2 className="fw-bold mb-5">Car</h2>
              <form onSubmit={handleSave}>
                <div className="row g-3">
                  <div className="form-floating mb-4 col">
                    <input
                      type="text"
                      className="form-control"
                      id="maker"
                      name="maker"
                      placeholder="maker"
                      required
                    />
                    <label htmlFor="floatingInput">Maker</label>
                  </div>
                  <div className="form-floating mb-4 col">
                    <input
                      type="text"
                      className="form-control"
                      id="model"
                      name="model"
                      placeholder="model"
                      required
                    />
                    <label htmlFor="floatingInput">Model</label>
                  </div>
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary mb-4">
                    Save
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarForm;