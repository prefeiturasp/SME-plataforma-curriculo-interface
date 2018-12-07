import React from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
import styles from './ReadMore.scss';

class ReadMore extends React.PureComponent {
  state = {
    expanded: false,
    truncated: false,
  };

  handleTruncate = truncated => {
    if (this.state.truncated !== truncated) {
      this.setState({
        truncated,
      });
    }
  }

  toggleLines = e => {
    e.preventDefault();

    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    const { children, more, less, lines } = this.props;
    const { expanded, truncated } = this.state;

    return (
      <div className={styles.text}>
        <Truncate
          lines={!expanded && lines}
          ellipsis={(
            <span>
              ...
              <br/>
              <button className={styles.toggler} onClick={this.toggleLines}>
                {more}
              </button>
            </span>
          )}
          onTruncate={this.handleTruncate}
        >
          <div dangerouslySetInnerHTML={{__html: children}} />
        </Truncate>
        {!truncated && expanded && (
          <span>
            <button className={styles.toggler} onClick={this.toggleLines}>
              {less}
            </button>
          </span>
        )}
      </div>
    );
  }
}

ReadMore.defaultProps = {
  lines: 3,
  more: 'Mostrar mais',
  less: 'Mostrar menos'
};

ReadMore.propTypes = {
  children: PropTypes.string.isRequired,
  lines: PropTypes.number,
  less: PropTypes.string,
  more: PropTypes.string
};

export default ReadMore;
