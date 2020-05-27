import { connect } from 'react-redux';
import React, {Component} from 'react';
import BooksContent from './BooksContent';
import { API_URL } from 'data/constants';

class StageContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stages: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API_URL + "/api/v1/stages?segment_id=" + this.props.segment['id'])
      .then(response => response.json())
      .then(data => this.setState({ stages: data }))

  }

  render() {
    return(
      <div>
        <h1></h1>
        {this.state.stages.map(stage => {
          return (
            <div>
              <BooksContent segment_name={this.props.segment['name']} stage={stage}></BooksContent>
            </div>
          );
        })}
      </div>
    );
  }
};
export default connect()(StageContent);
