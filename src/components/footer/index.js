/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import FooterTitle from '../footer-title';
import FooterForm from '../footer-form';
import FooterSocialMedia from '../footer-social-media';
import FooterCompanyInfo from '../footer-company-info';
import FooterOfFooter from '../footer-of-footer';

class Footer extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="bg-light pt-5">

        <FooterTitle />
        <FooterSocialMedia />
        <FooterForm />
        <FooterCompanyInfo />
        <FooterOfFooter />

      </div>
    );
  }
}

export default Footer;
