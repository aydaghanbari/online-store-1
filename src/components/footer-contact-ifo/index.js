/* eslint-disable react/jsx-filename-extension */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class FooterContactInfo extends React.Component {
  render() {
    return (
      <div className="col">
        <h5> CONTACT</h5>
        <div className="d-flex flex-column">
          <div>
            <span className="font-weight-bold">Farm</span>
            <br />
            No 13, Sky Tower Street, New York, USA
            <br />
            (+844) 123 456 78
            <br />
            contact@organicisfarm.com
          </div>
          <div className="mt-3">
            <span className="font-weight-bold">store</span>
            <br />
            No 27, 5th Street, New York, USA
            <br />
            (+844) 888 97989
            <br />
            contact@organicistore.com
          </div>
        </div>
      </div>

    );
  }
}

export default FooterContactInfo;
