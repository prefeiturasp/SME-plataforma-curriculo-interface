import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux';
import Collection from './Collection';
import DesktopModal from 'components/layout/DesktopModal';
import ModalHeader from 'components/header/ModalHeader';
import ModalPage from 'components/layout/ModalPage';
import SequencePreview from 'views/activity/SequencePreview';
import iconPlus from 'images/icons/plus1.svg';
import styles from './SaveSequence.scss';

class SaveSequence extends Component {
  ref = React.createRef();

  componentDidMount() {
    ReactTooltip.show(this.ref.current);
  }

  render() {
    if (this.props.data == null) {
      return <span />;
    }

    const data = this.props.data;

    const collections = [
      {
        id: 1,
        title: '[2018] EF 1A Matemática (1)',
        sequences: 2,
        classrooms: 1,
        years: [
          {
            color: '#ff0784',
            year: '1A',
          },
        ],
      },
      {
        id: 2,
        title: '[2018] EF 1A Matemática (2)',
        sequences: 2,
        classrooms: 1,
        years: [
          {
            color: '#ff0784',
            year: '1A',
          },
        ],
      },
      {
        id: 3,
        title: '[2018] EF 1A Ciências Naturais',
        sequences: 2,
        classrooms: 1,
        years: [
          {
            color: '#66ac70',
            year: '1A',
          },
        ],
      },
      {
        id: 4,
        title: '[2018] EF 1A História',
        sequences: 2,
        classrooms: 1,
        years: [
          {
            color: '#66ac70',
            year: '1A',
          },
        ],
      },
      {
        id: 5,
        title: 'Planeta',
        sequences: 5,
        classrooms: 0,
        years: [],
      },
      {
        id: 6,
        title: 'Água',
        sequences: 0,
        classrooms: 3,
        years: [
          {
            color: '#66ac70',
            year: '1A',
          },
          {
            color: '#ff0784',
            year: '1A',
          },
        ],
      },
    ];

    const items = collections.concat(collections).map((item, i) => {
      return (
        <Collection
          key={i}
          id={item.id}
          title={item.title}
          sequences={item.sequences}
          classrooms={item.classrooms}
          years={item.years}
        />
      );
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
  data: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    data: state.SequencesReducer.currItem,
  };
};

export default connect(mapStateToProps)(SaveSequence);
