import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import ClassroomYear1 from 'components/objects/ClassroomYear';

class ClassroomYear extends React.PureComponent {
  render() {
    const { color, key, year, tooltip } = this.props;

    const tooltipId = `tooltipClassroomYear${key}`;

    return (
      <Fragment>
        <div data-tip data-for={tooltipId}>
          <ClassroomYear1 color={color} year={year} />
        </div>
        <ReactTooltip
          place="bottom"
          type="dark"
          effect="solid"
          id={tooltipId}
          className="tooltip"
        >
          {tooltip}
        </ReactTooltip>
      </Fragment>
    );
  }
}

ClassroomYear.propTypes = {
  color: PropTypes.string,
  year: PropTypes.string.isRequired,
  tooltip: PropTypes.string.isRequired,
};

export default ClassroomYear;
