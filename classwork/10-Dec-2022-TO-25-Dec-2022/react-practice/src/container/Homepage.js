import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const handleSignOut = (e) => {

    navigate('/login');
  }

  return (
    <div className="layout-bg center mt-5">
      <div className="row g-3">
        <h1 className="text-light col">Welcome</h1>
        <button type="button" onClick={handleSignOut} className="btn btn-danger col">Sign Out</button>
      </div>
    </div>
  );
};

export default Homepage;
