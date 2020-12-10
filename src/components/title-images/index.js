import React from 'react';
import Img1 from '../../images/1.jpg';
import Img2 from '../../images/2.jpg';
import Img3 from '../../images/3.jpg';

// eslint-disable-next-line react/prefer-stateless-function
class TitleImages extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col col-height-header">
            <img src={Img1} alt="foodImage" className="w-100 h-100" />
          </div>
          <div className="col p-0 container-position col-height-header">
            <img src={Img2} alt="foodImage" className="w-100 h-100" />
            <div className="img-header-text text-white">
              <h3>FRESH FOOD DELIVERY</h3>
              <h3> WITHIN LONDON</h3>
            </div>
          </div>
          <div className="col col-height-header">
            <img src={Img3} alt="foodImage" className="w-100 h-100" />
          </div>
        </div>
      </div>
    );
  }
}

export default TitleImages;
