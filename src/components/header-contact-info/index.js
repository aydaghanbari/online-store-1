import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class HeaderContactInfo extends React.Component {
  render() {
    return (
      <div className="text-muted text-right align-self-center header-font">
        <div>
          <span className="pr-2">CALL US NOW</span>
          <i className="fas fa-phone" />
        </div>
        <p><a href="tel:0123-88-89-0999" className="pr-4">0123-88-89-0999</a></p>
      </div>
    );
  }
}

export default HeaderContactInfo;
