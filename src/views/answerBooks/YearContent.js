import React from 'react';
import PropTypes from 'prop-types';
import BooksContent from './BooksContent';
import styles from './YearContent.scss'

class YearContent extends React.PureComponent {

	render() {
		const { books, segment, stage, years, onlyUnique } = this.props;

		const usedYears = books.map((book) => {
      if (stage == book.stage && segment == book.segment) {
        return book['year']
      }
    }).filter(onlyUnique).sort();

    const yearBooks = years.filter((year) => {
      if (usedYears.includes(year.name)){
        return true
      }
    }).map(year => year.name).filter(onlyUnique)

		return (
			<div className='container'>
        {yearBooks.map((year, index) => {
          return (
            <div key={index}>
              <p className={styles.yearTitle}>{year}</p>
              <BooksContent year={year} books={books}></BooksContent>
            </div>
          );
        })}
      </div>
		);
	}
}

YearContent.propTypes = {
	books: PropTypes.array.isRequired,
	segment: PropTypes.string.isRequired,
	stage: PropTypes.string.isRequired,
	years: PropTypes.array.isRequired,
	onlyUnique: PropTypes.func.isRequired,
};

export default YearContent;
