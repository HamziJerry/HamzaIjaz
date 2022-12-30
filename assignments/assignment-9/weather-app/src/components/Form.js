import Input from "./Input";
import SearchButton from "./SearchButton";

const Form = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataArr = [...new FormData(e.target)];
    const data = Object.fromEntries(dataArr);
    props.updateFormData(data);
    console.log("data", data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6 col-sm-6">
          <Input type="text" text="City" id="city" />
        </div>
        <div className="col-5 col-sm-5">
          <Input type="text" text="Country" id="country" />
        </div>
        <div className="col-1 col-sm-1">
          <div className="d-grid">
            <SearchButton />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
