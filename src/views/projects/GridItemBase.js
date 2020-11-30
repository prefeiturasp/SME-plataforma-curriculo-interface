import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Element, scroller } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import Preview from './Preview';
import withWidth from 'components/hoc/withWidth';
import iconMinus from 'images/icons/minus.svg';
import iconPlus from 'images/icons/plus1.svg';
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

  render() {
    const { data } = this.props;
    const width = this.ref.current ? this.ref.current.clientWidth : 0;
    const height = this.ref.current ? this.ref.current.clientHeight : 0;
    const iconToggler = data.isExpanded ? iconMinus : iconPlus;
    const labelToggler = data.isExpanded ? 'Esconder' : 'Expandir';
    const isLeftAligned = (this.props.index + 1) % 4 === 0;
    const link = `/projeto/${data.slug}`;

    const thumbnail = data.cover_image ? (
      <div className={styles.image}>
        <img
          src={data.cover_image}
          alt=""
        />
      </div>
    ) : (
      <div className={styles.initials}>
        {data.title
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

    return (
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <Element name={data.slug} />
        <article className={styles.wrapper} ref={this.ref}>
          <NavLink to={link} aria-label={title}>{thumbnail}</NavLink>
          <div className={styles.component}>
            {data.curricular_components.map((curricular_component, idx) => {
              return <label key={idx} style={{marginLeft: '5px', marginRight: '5px', color: curricular_component.color}}>{curricular_component.name}</label>
            })}
          </div>
          <div className={styles.title}>
            <NavLink to={link}>{title}</NavLink>
          </div>
          <div className={styles.infos}>
            {data.segments.map((segment, idx) => {
              return <label key={idx} style={{marginLeft: '3px', marginRight: '3px', color: segment.color}}>{segment.name}</label>
            })}
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
  togglePreview: PropTypes.func.isRequired,
};

export default withWidth(GridItemBase);
