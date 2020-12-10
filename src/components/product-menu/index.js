/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class ProductMenu extends React.Component {
  render() {
    const links = [{ url: '#', name: 'ALL PRODUCTS' }, { url: '#1', name: 'FRUIT' }, { url: '#2', name: 'VEGETABLE' }, { url: '#3', name: 'BREAD' }, { url: '#4', name: 'OTHERS' }];
    return (
      <ul className="breadcrumb justify-content-center my-5 bg-white">

        {links.map((item, index) => <li key={index} className="breadcrumb-item text-body"><a href={item.url}>{item.name}</a></li>)}
      </ul>
    );
  }
}

export default ProductMenu;
