import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  google,
  signInWithPopup
} from "../services/firebaseConfig.js";


const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataArr = [...new FormData(e.target)];
    const data = Object.fromEntries(dataArr);
    console.log(data);
    setLoginData(data);
    console.log(loginData);
    const user = await signInWithEmailAndPassword(
      auth,
      loginData.email,
      loginData.password
    );
    console.log(user);
    if(user) {
      navigate('/');
    }
  };

  const handleGoogle = async () => {
    const user = await signInWithPopup(auth, google);
    console.log(user);
    if(user) {
      navigate('/');
    }
  }

  return (
    <div className="center" style={{marginTop: '1.2em'}}>
      <div
        className="card text-center"
        style={{
          background: "hsla(0, 0%, 100%, 0.8)",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          width: "40vw",
        }}
      >
        <div className="card-body">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <h2 className="fw-bold">LOGIN</h2>
              <p className="mb-5">Please enter your email and password!</p>
              <form onSubmit={handleSubmit}>
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

                <p className="small mb-4">
                  <a className="" href="#!">
                    Forgot password?
                  </a>
                </p>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary mb-4">
                    Login
                  </button>
                </div>

                <div className="text-center mb-6">
                  <p>or login with:</p>
                  <button
                    type="button"
                    className="btn btn-primary mx-1 circle shadow"
                  >
                    <i className="bi bi-facebook"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger mx-1 circle shadow"
                    onClick={handleGoogle}
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

                  <div className="mt-5">
                    <p className="mb-0">
                      Don't have an account?{" "}
                      {/* <a href="/signup" className="fw-bold">
                        Sign Up
                      </a> */}
                      <Link to={"/signup"} className="fw-bold">Sign Up</Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
