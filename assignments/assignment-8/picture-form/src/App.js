import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import placeholder from "./images/placeholder.png";

function App() {

  return (
    <div className="center" style={{ marginTop: "1.2em" }}>
      <div
        className="card text-center"
        style={{
          background: "hsla(0, 0%, 100%, 0.8)",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          width: "80vw",
        }}
      >
        <div className="card-body">
          <div className="row d-flex justify-content-center">
            <div className="col-4">
              <div
                className="card"
                style={{
                  width: "18rem",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={placeholder}
                  style={{ width: "12em", height: "12em", marginTop: "2em" }}
                  className="card-img-top rounded-circle"
                  alt="profile"
                />
                <div className="card-body">
                  <h5 className="card-title">Hamza Ijaz</h5>
                  <p className="card-text">xyz@email.com</p>
                  <p className="card-text">00000000000</p>
                  <p className="card-text">address</p>
                  <p className="card-text">city</p>
                </div>
              </div>
            </div>
            <div className="col-8">
              <h2 className="fw-bold mb-5">INFO</h2>
              <form>
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
                    type="number"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="phone"
                  />
                  <label htmlFor="floatingInput">Phone Number</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    placeholder="city"
                  />
                  <label htmlFor="floatingInput">City</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder="address"
                  />
                  <label htmlFor="floatingInput">Address</label>
                </div>

                <div className="d-grid gap-2">
                  <button type="reset" className="btn btn-danger mb-4">
                    Reset
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

export default App;
