/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Products extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className={this.props.padding === 'px' ? 'col col-height-header2 container-position px-0' : 'col col-height-header2 container-position'}>

        <img src={this.props.productImage} alt={this.props.children} className="w-100 h-100 img-header2" />
        <div className="text-middle-header2">
          <div className="text-img-header2-1">{this.props.children}</div>
          <div className="text-img-header2-2">
            <i className="fas fa-dollar-sign" />
            {this.props.price}
          </div>
        </div>
      </div>

    );
  }
}

export default Products;
