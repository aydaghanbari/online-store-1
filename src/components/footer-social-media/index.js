/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class FooterSocialMedia extends React.Component {
  render() {
    return (
      <div className="d-flex justify-content-center py-4">
        <a href="#" className="fa fa-facebook social-media" />
        <a href="#" className="fa fa-twitter social-media" />
        <a href="#" className="fa fa-google social-media" />
        <a href="#" className="fa fa-linkedin social-media" />
        <a href="#" className="fa fa-youtube social-media" />
      </div>
    );
  }
}

export default FooterSocialMedia;
