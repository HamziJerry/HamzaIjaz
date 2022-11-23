import companyLogo from "../images/boltLogo.jpg";

const CompanyDetail = () => {
  return (
    <div className="left-upper">
      <img
        src={companyLogo}
        alt="company logo"
        width={"50px"}
        height={"50px"}
      />
      <h2>
        <strong>Company Logo</strong>
      </h2>
      <p>Graphic Solutions</p>
    </div>
  );
};

export default CompanyDetail;
