import React, { Component } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import MobileMenu from './MobileMenu';

class Page extends Component {
  render() {
    return (
      <div>
        <Header />
        <MobileMenu />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Page;
