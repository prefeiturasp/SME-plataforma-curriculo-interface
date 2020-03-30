import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { API_URL } from 'data/constants';
import convertQuillToHtml from 'utils/convertQuillToHtml';
import iconClip from 'images/icons/clip.svg';
import styles from './Contents.scss';

class Contents extends Component {
  componentDidMount() {
    window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
  }

  render() {
    const { data } = this.props;
    const file = data.document;

    const content = convertQuillToHtml(data.content.ops);

    const btnDownload = file && file.url ? (
      <div className={styles.download}>
          <p>Acesse mais informações sobre esta metodologia.</p>
          <a className="btnSmall" href={API_URL + file.url}>
            Baixar arquivo
            <img src={iconClip} alt="Baixar arquivo" />
          </a>
        </div>
    ) : null;

    return (
      <Fragment>
        <div className={styles.contents}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </div>
        <hr />
        {btnDownload}
      </Fragment>
    );
  }
}

Contents.propTypes = {
  data: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    data: state.MethodologiesReducer.currItem,
  };
};

export default connect(mapStateToProps)(Contents);
