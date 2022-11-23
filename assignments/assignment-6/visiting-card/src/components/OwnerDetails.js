
const OwnerDetails = () => {
  return(
    <div className="right-lower">
            <div className="detail-group">
              <span className="grey circle"><i class="fas fa-solid fa-phone"></i></span>
              <span className="detail phone">+000 12345 6789</span>
            </div>
            <div className="detail-group">
              <span className="circle"><i class="fas fa-regular fa-envelope"></i></span>
              <span className="detail email">urname@email.com</span>
            </div>
            <div className="detail-group">
              <span className="circle grey"><i class="fas fa-solid fa-briefcase"></i></span>
              <span className="detail website">urwebsitename.com</span>
            </div>
            <div className="detail-group">
              <span className="circle"><i class="fas fa-solid fa-hashtag"></i></span>
              <span className="detail address">Street Address Here Singapore, 2222</span>
            </div>
          </div>
  );
}

export default OwnerDetails;