/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class HeaderCart extends React.Component {
  render() {
    return (
      <div className="text-muted tex-left align-self-center header-font">
        <div className="d-inline cart-badge">
          <a href="#">
            <svg className="bi bi-cart3 text-muted" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
            <span className="cart-badge-content">0</span>
          </a>
        </div>
        <div className=" d-inline ml-2">
          <span>MY CART</span>
          <p className="text-dark pl-4">
            <i className="fas fa-dollar-sign" />
            0.00
          </p>
        </div>
      </div>
    );
  }
}

export default HeaderCart;
