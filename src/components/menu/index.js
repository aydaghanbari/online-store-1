/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Menu extends React.Component {
  render() {
    const links = [{ url: '#', name: 'HOME' }, { url: '#1', name: 'OUR STORY' }, { url: '#2', name: 'SHOP' }, { url: '#3', name: 'BOXES' }, { url: '#4', name: 'BLOG' }, { url: '#5', name: 'CONTACT' }];
    // eslint-disable-next-line react/no-array-index-key
    return <ul className="nav justify-content-center">{links.map((item, index) => <li key={index} className="nav-item"><a className="nav-link" href={item.url}>{item.name}</a></li>)}</ul>;
  }
}

export default Menu;
