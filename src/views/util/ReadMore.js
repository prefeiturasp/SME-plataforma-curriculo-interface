import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';

class ReadMore extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            expanded: false,
            truncated: false
        };

        this.handleTruncate = this.handleTruncate.bind(this);
        this.toggleLines = this.toggleLines.bind(this);
    }

    handleTruncate(truncated) {
        if (this.state.truncated !== truncated) {
            this.setState({
                truncated
            });
        }
    }

    toggleLines(event) {
        event.preventDefault();

        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        const {
            children,
            more,
            less,
            lines
        } = this.props;

        const {
            expanded,
            truncated
        } = this.state;

        return (
            <div>
                <Truncate
                    lines={!expanded && lines}
                    ellipsis={(
                        <span>... <a href='#' onClick={this.toggleLines}>{more}</a></span>
                    )}
                    onTruncate={this.handleTruncate}
                >
                <div
                  dangerouslySetInnerHTML={{__html: children}} />
                </Truncate>
                {!truncated && expanded && (
                    <span><a href='#' onClick={this.toggleLines}>{less}</a></span>
                )}
            </div>
        );
    }
}

ReadMore.defaultProps = {
    lines: 3,
    more: 'Leia mais',
    less: 'Ver menos'
};

ReadMore.propTypes = {
    children: PropTypes.string.isRequired,
    lines: PropTypes.number,
    less: PropTypes.string,
    more: PropTypes.string
};

export default ReadMore;
