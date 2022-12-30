import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const Cars = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery("cars", () =>
    fetch("http://localhost:8000/cars").then((res) => res.json())
  );
  console.log(data, isLoading);

  const handleClick = () => {
    navigate("/car-form");
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
  return (
    <div className="text-light center mt-2">
      <h1 className="mt-4">Cars</h1>
      <ul className="list-group">
        {data.map((el) => {
          return (
            <Link className="link" to={`/car-detail/${el.id}`}>
              <li className="list-group-item mt-1 mb-1" key={el.id}>
                <span className="bold pe-2">{el.maker}</span>
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="d-grid gap-2">
        <button
          type="submit"
          onClick={handleClick}
          className="btn btn-primary mb-4"
        >
          Add Car
        </button>
      </div>
    </div>
  );
};

export default Cars;
