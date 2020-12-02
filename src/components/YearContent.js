import { connect } from 'react-redux';
import React, {Component} from 'react';
import BooksContent from './BooksContent';
import styles from './YearContent.scss'
import { API_URL } from 'data/constants';

function onlyUnique(value, index, self) {
  if (value == undefined) {
    return false
  }
  return self.indexOf(value) === index;
}

class YearContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      years: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API_URL + "/api/years")
      .then(response => response.json())
      .then(data => this.setState({ years: data }))
  }

  render() {
    const years = this.props.books.map((book) => {
      if (this.props.stage == book.stage && this.props.segment == book.segment) {
        return book['year']
      }
    }).filter(onlyUnique).sort();

    const yearBooks = this.state.years.filter((year) => {
      if (years.includes(year.name)){
        return true
      }
    }).map(year => year.name).filter(onlyUnique)

    return (
      <div className='container'>
        {yearBooks.map((year, index) => {
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
