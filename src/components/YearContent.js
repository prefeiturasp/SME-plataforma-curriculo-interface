import { connect } from 'react-redux';
import React, {Component} from 'react';
import BooksContent from './BooksContent';
import styles from './YearContent.scss'
import { API_URL } from 'data/constants';

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

class YearContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const years = this.props.books.map((book) => {
      if (this.props.stage == book.stage) {
        return book['year']
      }
    }).filter(onlyUnique).sort();
    return (
      <div className='container'>
        {years.map((year, index) => {
          return (
            <div key={index}>
              <p className={styles.yearTitle}>{year}</p>
              <BooksContent year={year} books={this.props.books}></BooksContent>
            </div>
          );
        })}
      </div>
    );
  }
};
export default connect()(YearContent);
