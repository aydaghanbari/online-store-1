/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import ProductBadge from '../product-badge';

class MainProducts extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col">
        <div className="card container-card">
          <div className="img-badge">
            <div className={this.props.BadgeShow === 'true' ? 'display: inline-block' : 'display:none'}>
              <ProductBadge />
            </div>
            <div className="container-position col-height-card p-5 border-bottom">
              <img className="card-img-top overlay-card-img" alt="NOIMAGE" src={this.props.productImage} />
              <div className="bottom-star">
                <span className="fa fa-star text-warning" />
                <span className="fa fa-star text-warning" />
                <span className="fa fa-star text-warning" />
                <span className="fa fa-star text-warning" />
                <span className="fa fa-star text-muted" />
              </div>
            </div>
          </div>

          <div className="card-body container-card col-card-title-height">
            <div className="row overlay-product no-gutters col-card-title-align">
              <div className="col bg-success text-center col-card-title-border">
                <a href="#">
                  <svg className="bi bi-search" color="white" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                  </svg>
                </a>
              </div>
              <div className="col text-center bg-success col-card-title-border">
                <a href="#">
                  <svg className="bi bi-cart3" color="white" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </a>
              </div>
              <div className="col text-center bg-success col-card-title-border">
                <a href="#">
                  <svg className="bi bi-heart" color="white" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </a>
              </div>
              <div className="col text-center bg-success">
                <a href="#">
                  <svg className="bi bi-bar-chart-fill" color="white" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <rect width="4" height="5" x="1" y="10" rx="1" />
                    <rect width="4" height="9" x="6" y="6" rx="1" />
                    <rect width="4" height="14" x="11" y="1" rx="1" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h6 className="card-title text-center">{this.props.children}</h6>
              <p className="card-text text-center text-success">
                <i className="fas fa-dollar-sign" />
                {this.props.price}
              </p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default MainProducts;
