import React from 'react';
import MainProducts from '../main-products';
import Img9 from '../../images/9.png';
import Img10 from '../../images/10.jpg';
import Img11 from '../../images/11.jpg';
import Img12 from '../../images/12.jpg';
import Img13 from '../../images/13.jpg';
import Img14 from '../../images/14.jpg';
import Img15 from '../../images/15.jpg';
import Img16 from '../../images/16.jpg';

// eslint-disable-next-line react/prefer-stateless-function
class AllProducts extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">

          <MainProducts productImage={Img9} BadgeShow="true" price="8.00">BANANA</MainProducts>
          <MainProducts productImage={Img10} price="3.25">BLACKBERRY</MainProducts>
          <MainProducts productImage={Img11} price="5.00">AVOCADO</MainProducts>
          <MainProducts productImage={Img12} price="2.05">GRAPES</MainProducts>
          <div className="container my-5">
            <div className="row">
              <MainProducts productImage={Img13} price="4.00">PEACH</MainProducts>
              <MainProducts productImage={Img14} price="6.25">COOKIE</MainProducts>
              <MainProducts productImage={Img15} price="7.05">FIG</MainProducts>
              <MainProducts productImage={Img16} price="9.00">BREAD</MainProducts>
            </div>
          </div>

        </div>
      </div>

    );
  }
}

export default AllProducts;
