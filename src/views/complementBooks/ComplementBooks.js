import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Page from 'components/layout/Page';
import ComplementBooksActions from 'actions/ComplementBooksActions';
import ComplementBooksContent from './ComplementBooksContent';
import BodyActions from 'actions/BodyActions';
import styles from './ComplementBooks.scss';

class ComplementBooks extends Component {

  componentDidMount() {
    this.props.load();
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  render() {
    const { complementBooks } = this.props;
    let partners = complementBooks.map(complementBook => complementBook.partner);

    partners = partners.filter((partner, index, self) =>
      index === self.findIndex((p) => (
        p.id === partner.id && p.name === partner.name
      ))
    )
    return(
      <Page>
        <div className="container">
          <h1 className={styles.title}>Materiais Complementares para RME-SP</h1>
          <div className="row">
            <div className="col-8 col-offset-4">
              <p className={styles.contentText}>
              Os materiais publicados nessa página foram cedidos gratuitamente
              por parceiros e são para uso exclusivo com os estudantes das
              Unidades Escolares da RME-SP.
              </p>
              <p className={styles.contentText}>
              Para baixá-los, basta clicar no botão para download
              (seta no canto inferior direito de cada imagem/arquivo).
              Alguns arquivos darão acesso para links com materiais exclusivos.
            </p>
            </div>
            <br></br>
          </div>
          {partners.map((partner, index) => {
            return (
              <div key={index} >
                <h1>{partner.name}</h1>
                <p>{partner.description}</p>
                <ComplementBooksContent partner={partner.name} complementBooks={complementBooks}></ComplementBooksContent>
              </div>
            );
          })}
        </div>
      </Page>
    );
  }
};

ComplementBooks.propTypes = {
  complementBooks: PropTypes.array.isRequired,
  isSearching: PropTypes.bool.isRequired,
  load: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    complementBooks: state.ComplementBooksReducer.complementBooks,
    isSearching: state.ComplementBooksReducer.isSearching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: () => {
      dispatch(BodyActions.showLoading());
      dispatch(ComplementBooksActions.load());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComplementBooks);
