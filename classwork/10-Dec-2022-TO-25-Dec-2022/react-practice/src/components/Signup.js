import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
} from "../services/firebaseConfig.js";

const Signup = () => {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataArr = [...new FormData(e.target)];
    const data = Object.fromEntries(dataArr);
    console.log(data);
    setSignUpData(data);
    console.log(signUpData);
    const user = await createUserWithEmailAndPassword(
      auth,
      signUpData.email,
      signUpData.password
    );
    console.log(user);
    if(user) {
      navigate('/');
    }
  };

  return (
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
              <h2 className="fw-bold mb-5">SIGN UP</h2>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="form-floating mb-4 col">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      placeholder="firstName"
                    />
                    <label htmlFor="floatingInput">First Name</label>
                  </div>
                  <div className="form-floating mb-4 col">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      placeholder="lastName"
                    />
                    <label htmlFor="floatingInput">Last Name</label>
                  </div>
                </div>

                <div className="form-floating mb-4">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="email"
                  />
                  <label htmlFor="floatingInput">Email</label>
                </div>

                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="password"
                  />
                  <label htmlFor="floatingInput">Password</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="confirmPassword"
                  />
                  <label htmlFor="floatingInput">Confirm Password</label>
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary mb-4">
                    Sign up
                  </button>
                </div>

                <div className="text-center">
                  <p>or sign up with:</p>
                  <button
                    type="button"
                    className="btn btn-primary mx-1 circle shadow"
                  >
                    <i className="bi bi-facebook"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger mx-1 circle shadow"
                  >
                    <i className="bi bi-google"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-info mx-1 circle shadow text-light"
                  >
                    <i className="bi bi-twitter"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary mx-1 circle shadow"
                  >
                    <i className="bi bi-github"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
