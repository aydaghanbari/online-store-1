import React from 'react';
import Logo from '../../images/logo2.png';

// eslint-disable-next-line react/prefer-stateless-function
class PartTwoHeader extends React.Component {
  render() {
    return (

      <div>
        <img src={Logo} alt="logo" className="mx-auto mt-5 d-block logo" />
        <h1 className="text-center font-weight-bold">NEW PRODUCTS</h1>
      </div>

    );
  }
}

export default PartTwoHeader;
