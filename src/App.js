/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
// eslint-disable-next-line linebreak-style
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */
import React from 'react';

import Header from './components/header/index';
import Menu from './components/menu/index';
import TitleImages from './components/title-images/index';
import ProductsOnHeader from './components/products-on-header';
import PartTwoHeader from './components/part-two-header';
import ProductMenu from './components/product-menu';
import AllProducts from './components/all-products';
import Footer from './components/footer';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <Header />
        <Menu />
        <TitleImages />
        <ProductsOnHeader />
        <PartTwoHeader />
        <ProductMenu />
        <AllProducts />
        <Footer />

      </div>
    );
  }
}

export default App;
