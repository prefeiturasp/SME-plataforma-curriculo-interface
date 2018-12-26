import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import BodyActions from 'actions/BodyActions';
import CollectionsActions from 'actions/CollectionsActions';
import Collection from './Collection';
import DesktopModal from 'components/layout/DesktopModal';
import ModalHeader from 'components/header/ModalHeader';
import ModalPage from 'components/layout/ModalPage';
import SequencePreview from 'views/activity/SequencePreview';
import SequencesActions from 'actions/SequencesActions';
import iconPlus from 'images/icons/plus1.svg';
import styles from './SaveSequence.scss';

class SaveSequence extends Component {
  ref = React.createRef();

  componentDidMount() {
    ReactTooltip.show(this.ref.current);
    this.props.load(this.props.match.params.slug);
    this.props.loadCollections();
  }

  render() {
    if (this.props.data == null) {
      return <span />;
    }

    const { collections, data } = this.props;

    const items = collections.map((item, i) => {
      return <Collection key={i} sequenceId={this.props.data.id} {...item} />;
    });

    return (
      <DesktopModal>
        <ModalPage>
          <ModalHeader title="Salvar sequência" />
          <div ref={this.ref} data-tip data-for="tooltipSequenceAlreadySaved">
            <SequencePreview data={data} sequence={data} />
          </div>
          <div className={styles.list}>{items}</div>
          <div className={styles.footer}>
            <button className={styles.btnCreate}>
              <img src={iconPlus} alt="Criar coleção" />
              Criar coleção
            </button>
          </div>
          <ReactTooltip
            place="bottom"
            type="dark"
            effect="solid"
            id="tooltipSequenceAlreadySaved"
            className="tooltip"
          >
            Você já salvou esta sequência em Ciências Naturais 1o ano.
          </ReactTooltip>
        </ModalPage>
      </DesktopModal>
    );
  }
}

SaveSequence.propTypes = {
  collections: PropTypes.array.isRequired,
  data: PropTypes.object,
  load: PropTypes.func.isRequired,
  loadCollections: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    collections: state.CollectionsReducer.items,
    data: state.SequencesReducer.currItem,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    load: slug => {
      dispatch(BodyActions.showLoading());
      dispatch(SequencesActions.loadItem(slug));
    },
    loadCollections: () => {
      dispatch(CollectionsActions.load());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveSequence);
