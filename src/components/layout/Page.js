import React from 'react';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import MobileMenu from 'components/MobileMenu';
import styles from './Page.scss';

class Page extends React.PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <MobileMenu />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Page;
