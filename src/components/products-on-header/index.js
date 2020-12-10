import React from 'react';
import Products from '../products';
import Img4 from '../../images/4.jpg';
import Img5 from '../../images/5.jpg';
import Img6 from '../../images/6.jpg';
import Img7 from '../../images/7.jpg';
import Img8 from '../../images/8.jpg';

// eslint-disable-next-line react/prefer-stateless-function
class ProductsOnHeader extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <Products productImage={Img4} price="12.00">CHERRY</Products>
          <Products productImage={Img5} price="10.00" padding="px">PEAR</Products>
          <Products productImage={Img6} price="2.00">WATERMELON</Products>
          <Products productImage={Img7} price="4.00" padding="px">BREAD</Products>
          <Products productImage={Img8} price="8.00">POMEGRANATE</Products>
        </div>
      </div>
    );
  }
}

export default ProductsOnHeader;
