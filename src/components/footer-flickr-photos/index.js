import React from 'react';
import FlickrPhotos from '../flickr-photo';
import Img17 from '../../images/17.jpg';
import Img18 from '../../images/18.jpg';
import Img19 from '../../images/19.jpg';
import Img20 from '../../images/20.jpg';
import Img21 from '../../images/21.jpg';
import Img22 from '../../images/22.jpg';

// eslint-disable-next-line react/prefer-stateless-function
class FooterFlickrPhotos extends React.Component {
  render() {
    return (

      <div className="col">
        <h5> PHOTO IN FLICKR</h5>
        <div className="row mt-3">
          <FlickrPhotos flickrImage={Img17} />
          <FlickrPhotos padding="px" flickrImage={Img18} />
          <FlickrPhotos flickrImage={Img19} />
        </div>
        <div className="row mt-3">
          <FlickrPhotos flickrImage={Img20} />

          <FlickrPhotos flickrImage={Img21} padding="px" />

          <FlickrPhotos flickrImage={Img22} />
        </div>
      </div>

    );
  }
}

export default FooterFlickrPhotos;
