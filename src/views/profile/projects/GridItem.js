import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './GridItem.scss';
import { NavLink } from 'react-router-dom';
import logoPrefecture from 'views/project/images/prefecture.jpg';
import { Element } from 'react-scroll';

class GridItem extends React.PureComponent {
  render() {
    const { item } = this.props;
    const showLink = `/projeto/${item.slug}`;
    const editLink = `/editar-projeto/${item.slug}`;
    const maxChars = 32;
    const title =
      item.title.length > maxChars
        ? item.title.substr(0, maxChars).trim() + '...'
        : item.title;

    const summary =
      item.summary.length > maxChars
        ? item.summary.substr(0, maxChars).trim() + '...'
        : item.summary;

    const thumbnail = item.cover_image ? (
      <div className={styles.image}>
        <img
          src={item.cover_image}
          alt=""
        />
      </div>
    ) : (
      <div className={styles.image}>
        <img
          src={logoPrefecture}
          alt=""
        />
      </div>
    );


    return (
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <Element name={item.slug} />
        <article className={styles.wrapper}>
          <NavLink to={showLink} aria-label={title}>{thumbnail}</NavLink>
          <div className={styles.title}>
            <NavLink to={showLink}>{title}</NavLink>
          </div>
          <div className={styles.component}>
            <p>{summary}</p>
          </div>
          <div className={styles.dates}>
            <h5>Criado: {item.created_at}</h5>
            <h5>Atualizado: {item.updated_at}</h5>
          </div>
          <div className={styles.infos}>
            <NavLink to={editLink} className={`btn btnSmall btnFullWidth`}>
              Editar
            </NavLink>
          </div>
        </article>
      </div>
    );
  }
}

GridItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  null,
  mapDispatchToProps
)(GridItem);
