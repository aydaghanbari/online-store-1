import React from 'react';
// import ReactDom from 'react-dom';
import HeaderContactInfo from '../header-contact-info/index';
import HeaderLogo from '../../images/logo1.png';
import HeaderCart from '../header-cart/index';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <header className="container d-flex justify-content-between px-5">
          <HeaderContactInfo />
          <div><img src={HeaderLogo} alt="logo" className="img-logo" /></div>
          <HeaderCart />
        </header>
      </div>
    );
  }
}

export default Header;
