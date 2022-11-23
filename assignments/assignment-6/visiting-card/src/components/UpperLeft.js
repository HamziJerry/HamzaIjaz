import CompanyDetail from "./CompanyDetail";
import QrCode from "./QrCode";

const UpperLeft = () => {
  return (
    <div className="left">
      <CompanyDetail />
      <QrCode />
    </div>
  );
};

export default UpperLeft;
