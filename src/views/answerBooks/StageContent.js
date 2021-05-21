import React from 'react';
import PropTypes from 'prop-types';
import YearContent from './YearContent';
import styles from './StageContent.scss'

class StageContent extends React.PureComponent {

	render() {
		const { books, segment, stages, years, onlyUnique } = this.props;

		const usedStages = books.map((book, index) => {
      if (segment === book.segment) {
        return book.stage;
      }
    }).filter(onlyUnique).sort();

    const stageBooks = stages.filter((stage) => {
      if (usedStages.includes(stage.name)){
        return true
      }
    }).map(stage => stage.name).filter(onlyUnique)

		return (
			<div className="container">
        {stageBooks.map((stage, index) => {
          return(
            <div key={index} >
              <h3 className={styles.stageName}>{stage}</h3>
              <YearContent 
								books={books} 
								segment={segment}
								stage={stage}
								years={years}
								onlyUnique={onlyUnique}
							/>
            </div>
          );
        })}
      </div>
		);
	}
}

StageContent.propTypes = {
	books: PropTypes.array.isRequired,
	segment: PropTypes.string.isRequired,
	stages: PropTypes.array.isRequired,
	years: PropTypes.array.isRequired,
  onlyUnique: PropTypes.func.isRequired,
};

export default StageContent;
