/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-constructor */
/* eslint-disable linebreak-style */
import React from 'react';
// eslint-disable-next-line linebreak-style

// eslint-disable-next-line react/prefer-stateless-function
class FlickrPhotos extends React.Component {
  constructor(props) {
    // eslint-disable-next-line linebreak-style
    super(props);
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      // eslint-disable-next-line react/jsx-filename-extension
      <div className={this.props.padding === 'px' ? 'col footer-img-height px-0' : 'col footer-img-height'}>
        <img src={this.props.flickrImage} alt="flickr" className="w-100 h-100" />
      </div>
    );
  }
}

export default FlickrPhotos;
