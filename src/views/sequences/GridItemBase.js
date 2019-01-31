import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Element, scroller } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { API_URL } from 'data/constants';
import { history } from 'index';
import Preview from './Preview';
import isLogged from 'data/isLogged';
import withWidth from 'components/hoc/withWidth';
import iconMinus from 'images/icons/minus.svg';
import iconPlus from 'images/icons/plus1.svg';
import iconSave1 from 'images/icons/save.svg';
import iconSaved from 'images/icons/saved.svg';
import styles from './GridItemBase.scss';

class GridItemBase extends Component {
  ref = React.createRef();

  onClickedExpand = () => {
    this.props.togglePreview(this.props.data.id);

    if (this.props.windowWidth < 768) {
      setTimeout(this.onClickedExpand1, 500);
    }
  };

  onClickedExpand1 = () => {
    scroller.scrollTo(this.props.data.slug, {
      duration: 300,
      smooth: true,
    });
  };

  onClickedSave = () => {
    if (isLogged()) {
      history.push(`/sequencias/${this.props.data.slug}/salvar`, {
        isModal: true,
      });
    } else {
      this.props.login();
    }
  };

  render() {
    const { data } = this.props;
    const width = this.ref.current ? this.ref.current.clientWidth : 0;
    const height = this.ref.current ? this.ref.current.clientHeight : 0;
    const iconToggler = data.isExpanded ? iconMinus : iconPlus;
    const labelToggler = data.isExpanded ? 'Esconder' : 'Expandir';
    const isLeftAligned = (this.props.index + 1) % 4 === 0;
    const style = { color: data.main_curricular_component.color };

    const link = `/sequencia/${data.slug}`;
    const thumbnail = data.image_attributes.default_url ? (
      <div className={styles.image}>
        <img
          src={API_URL + data.image_attributes.default_url}
          srcSet={`${API_URL}${data.image_attributes.thumb.url}, ${API_URL}${
            data.image_attributes.extra_thumb.url
          } 2x`}
          alt=""
        />
      </div>
    ) : (
      <div className={styles.initials}>
        {data.main_curricular_component.name
          .split(' ')
          .map(s => s.charAt(0))
          .join('')}
      </div>
    );

    const maxChars = 32;
    const title =
      data.title.length > maxChars
        ? data.title.substr(0, maxChars).trim() + '...'
        : data.title;

    let duration = null;
    if (data.estimated_time) {
      const word1 = data.estimated_time > 1 ? 'aulas' : 'aula';
      const durationText = `${data.estimated_time} ${word1}`;
      duration = (
        <div className={styles.info}>
          <div className={styles.number}>{durationText}</div>
          <div className={styles.label}>Tempo estimado</div>
        </div>
      );
    }

    const word2 = data.number_of_activities > 1 ? 'Atividades' : 'Atividade';

    const isSaved = data.already_saved_in_collection;
    const iconSave = isSaved ? iconSaved : iconSave1;
    const labelSave = isSaved ? 'Salvo' : 'Salvar';

    return (
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <Element name={data.slug} />
        <article className={styles.wrapper} ref={this.ref}>
          <NavLink to={link}>{thumbnail}</NavLink>
          <button className={styles.btnSave} onClick={this.onClickedSave}>
            <img src={iconSave} alt={labelSave} />
          </button>
          <div className={styles.component}>
            <em style={style}>{data.main_curricular_component.name}</em>
          </div>
          <div className={styles.title}>
            <NavLink to={link}>{title}</NavLink>
          </div>
          <div className={styles.infos}>
            {duration}
            <div className={styles.info}>
              <div className={styles.number}>{data.number_of_activities}</div>
              <div className={styles.label}>{word2}</div>
            </div>
          </div>
          <div className={styles.expand} onClick={this.onClickedExpand}>
            <img src={iconToggler} alt={labelToggler} />
          </div>
        </article>
        <Preview
          data={data}
          width={width}
          height={height}
          isLeftAligned={isLeftAligned}
        />
      </div>
    );
  }
}

GridItemBase.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isSaved: PropTypes.bool,
  login: PropTypes.func.isRequired,
  togglePreview: PropTypes.func.isRequired,
};

export default withWidth(GridItemBase);
