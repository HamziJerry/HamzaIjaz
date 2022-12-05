import Checkbox from "./Checkbox";
import Input from "./Input";
import Textarea from "./Textarea";

const Form = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = false;
    const dataArr = [...new FormData(e.target)];
    const data = Object.fromEntries(dataArr);
    Object.values(data).forEach((el) => {
      if (el) {
        flag = true;
      }
    });
    if (flag) {
      props.updateFormData(data);
      props.updateShowResult(true);
    } else {
      alert("Fill form data!");
    }
  };
  return (
    <div className="mt-3">
      <h1>Developer Information</h1>
      <form onSubmit={handleSubmit} id="form">
        <Input name="Developer Name" id="devName" type="text" />
        <Input name="Email" id="email" type="email" />
        <Input name="Password" id="password" type="password" />
        <Input name="Address" id="address" type="text" />
        <Textarea name="Feedback" id="feedback" rows="3" />
        <Checkbox name="Satisfied" id="satisfied" />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
