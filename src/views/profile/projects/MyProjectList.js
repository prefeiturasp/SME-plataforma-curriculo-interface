import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridItem from './GridItem';
import styles from './MyProjectList.scss';

class MyProjectList extends React.PureComponent {
  render() {
    const { items } = this.props;

    const projects = items.map((item, i) => {
        return (
            <GridItem item={item} key={i}/>
        );
    })
    return (
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className={`col-12 ${styles.title}`}>
              <h2>Meus Projetos</h2>
            </div>
            {projects.length && (
              projects.map((project)=> {
                return project
              })
            )}
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    );
  }
}

MyProjectList.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MyProjectList);
