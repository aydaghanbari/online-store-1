/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import FooterContactInfo from '../footer-contact-ifo';
import FooterFlickrPhotos from '../footer-flickr-photos';

import FooterUsefulLink from '../footer-useful-link';
import FooterWorkingTime from '../footer-working-time';

class FooterCompanyInfo extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="container my-5">
        <div className="row">
          <FooterContactInfo />
          <FooterFlickrPhotos />
          <FooterUsefulLink />
          <FooterWorkingTime />

        </div>
      </div>
    );
  }
}

export default FooterCompanyInfo;
