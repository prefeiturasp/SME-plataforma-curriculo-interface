import { connect } from 'react-redux';
import React, {Component} from 'react';
import YearContent from './YearContent';
import styles from './StageContent.scss'
import { API_URL } from 'data/constants';

function onlyUnique(value, index, self) {
    if (value === undefined) {
      return false
    }
    return self.indexOf(value) === index;
}

class StageContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stages = this.props.books.map((book, index) => {
      if (this.props.segment === book.segment) {
        return book.stage;
      }
    }).filter(onlyUnique).sort();

    return(
      <div className="container">
        {stages.map((stage, index) => {
          return(
            <div key={index} >
              <h3 className={styles.stageName}>{stage}</h3>
              <YearContent stage={stage} books={this.props.books} segment={this.props.segment}></YearContent>
            </div>
          );
        })}
      </div>
    );
  }
};
export default connect()(StageContent);
