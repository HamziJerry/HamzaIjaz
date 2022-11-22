import './VisitingCard.css'
import companyLogo from '../images/boltLogo.jpg'
import qrCode from '../images/qrCode.png'

const VisitingCard = () => {
  return(
    <div className="card-background">
      <div className="upper-bg">
        <div className="left">
          <div className="left-upper">
            <img src={companyLogo} alt="company logo" width={'50px'} height={'50px'} />
            <h2><strong>Company Logo</strong></h2>
            <p>Graphic Solutions</p>
          </div>
          <div className="left-lower">
            <img src={qrCode} alt="qr code" width="50" height="50" />
          </div>
        </div>
        <div className="right">
        <div className="right-upper">
          <div className='owner-name'>
            <span className='firstName'><strong>MICHAL</strong></span>
            <span> JOHNS</span>
          </div>
          <p>Solution Manager</p>
          <div className='line'></div>
        </div>
          <div className="right-lower">
            <div className="detail-group">
              <span className="circle"></span>
              <span className="detail phone">+000 12345 6789</span>
            </div>
            <div className="detail-group">
              <span className="circle"></span>
              <span className="detail email">urname@email.com</span>
            </div>
            <div className="detail-group">
              <span className="circle"></span>
              <span className="detail website">urwebsitename.com</span>
            </div>
            <div className="detail-group">
              <span className="circle"></span>
              <span className="detail address">Street Address Here Singapore, 2222</span>
            </div>
          </div>
        </div>
      </div>
      <div className="stripe"></div>
    </div>
  );
}

export default VisitingCard;