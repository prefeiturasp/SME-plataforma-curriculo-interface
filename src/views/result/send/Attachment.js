import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { API_URL } from 'data/constants';
import ConfirmActions from 'actions/ConfirmActions';
import iconClip from 'images/icons/clip.svg';
import iconDelete from 'images/icons/delete.svg';
import styles from './Attachment.scss';

const ONE_MEGABYTE = 1024 * 1024;

class Attachment extends React.PureComponent {
  state = {
    image: null,
  };

  onClickedConfirm = () => {
    this.props.onDelete();
  };

  onClickedDelete = () => {
    this.props.openConfirm(
      'Excluir este arquivo?',
      'Lorem ipsum dolor sit amet.',
      'Excluir',
      'Cancelar',
      this.onClickedConfirm
    );
  };

  loadImage = () => {
    if (this.props.data.type.match(/jpeg|jpg|png/)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log('loaded image');
        this.setState({
          image: reader.result,
        });
      };
      console.log('loading image');
      reader.readAsDataURL(this.props.data);
    } else {
      this.setState({ image: null });
    }
  };

  componentDidMount() {
    this.loadImage();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.data.name !== prevProps.data ||
      this.props.data.size !== prevProps.size ||
      this.props.data.lastModified !== prevProps.lastModified
    ) {
      this.loadImage();
    }
  }

  render() {
    const { data } = this.props;
    const { image } = this.state;
    const { name, size, type } = data;

    console.log(image);
    const thumbnail = image !== null ? (
      <img
        className={styles.image}
        src={image}
        alt={name}
      />
    ) : (
      <div className={styles.icon}>
        <img src={iconClip} />
      </div>
    );

    const readableSize = size > ONE_MEGABYTE ? size / ONE_MEGABYTE : size / 1024;
    const roundedSize = Math.round(readableSize);
    const unit = size > ONE_MEGABYTE ? 'MB' : 'KB';

    return (
      <div className={styles.wrapper}>
        {thumbnail}
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.size}>{roundedSize} {unit}</div>
        </div>
        <div className={styles.buttons}>
          <button onClick={this.onClickedDelete}>
            <img src={iconDelete} alt="Excluir" />
          </button>
        </div>
      </div>
    );
  }
}

Attachment.propTypes = {
  data: PropTypes.object.isRequired,
  openConfirm: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    openConfirm: (title, message, labelYes, labelNo, onConfirm) => {
      dispatch(
        ConfirmActions.open(title, message, labelYes, labelNo, onConfirm)
      );
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Attachment);
