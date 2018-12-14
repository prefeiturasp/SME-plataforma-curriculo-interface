import React, { Fragment } from 'react';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import MobileMenu from 'components/MobileMenu';

class Page extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <MobileMenu />
        {this.props.children}
        <Footer />
      </Fragment>
    );
  }
}

export default Page;
