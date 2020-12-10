import React from 'react';
import Logo from '../../images/logo2.png';

// eslint-disable-next-line react/prefer-stateless-function
class FooterWorkingTime extends React.Component {
  render() {
    return (
      <div className="col">
        <h5>WORKING TIME</h5>
        <pre className="overflow">
          Monday to Friday:
          <span className="font-italic">08:00am - 08:00pm</span>
          <br />
          Saturday & Sunday:
          {' '}
          <span className="font-italic">10:00am - 06:00pm</span>
        </pre>
        <div className="text-center pt-2 border-radious">
          <img src={Logo} alt="logo" className="d-block mx-auto logo3" />
          <p> Enjoy discount baked goods.</p>
          <p className="font-italic">06:00am - 08:00pm daily</p>
        </div>
      </div>

    );
  }
}

export default FooterWorkingTime;
