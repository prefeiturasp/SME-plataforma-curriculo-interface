import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import iconClip from 'images/icons/clip.svg';
import imgCurriculum from 'views/curriculum/curriculum.jpg';
import styles from './Contents.scss';

class Contents extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.contents}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius rutrum odio in laoreet. Maecenas quis fringilla nibh. Vestibulum consectetur, odio eget faucibus faucibus, tellus enim scelerisque odio, nec aliquam nibh ipsum sit amet tellus. Aenean semper faucibus quam, in porta metus bibendum sed. Proin a dui tortor.</p>
              <p>Cras lorem turpis, rhoncus eu elit ut, sollicitudin laoreet sapien. In et libero malesuada, placerat risus vel, tristique nibh. Integer orci magna, vehicula sed ullamcorper vitae, venenatis semper purus.</p>
              <p>Curabitur iaculis lacinia condimentum. Pellentesque rhoncus, erat et imperdiet consequat, libero mi egestas dolor, nec dignissim metus arcu sed arcu. Nunc nec enim in nisi iaculis consequat quis sed turpis.</p>
              <p>Mauris facilisis pharetra lacus. Proin quam lacus, iaculis dictum lobortis quis, tincidunt et felis. Morbi pulvinar vulputate leo, in iaculis purus interdum ac. Aliquam bibendum nisi sed euismod fringilla. Vivamus mollis ullamcorper auctor. In hac habitasse platea dictumst. Nam id lectus fermentum leo aliquet tempus eget a metus. Ut sed ligula tincidunt turpis laoreet convallis et a quam. Suspendisse nec molestie massa, sit amet euismod elit. Maecenas eleifend ex a orci euismod congue.</p>
              <img src={imgCurriculum} alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.quote}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <p>Cras lorem turpis, rhoncus eu elit ut, sollicitudin laoreet sapien. In et libero malesuada, placerat risus vel, tristique nibh. Integer orci magna, vehicula sed ullamcorper vitae, venenatis semper purus. Aenean semper quam, in porta metus bibendum sed. Proin a dui tortor.</p>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.download}>
          <p>Acesse mais informações sobre esta metodologia.</p>
          <a className="btnSmall" href="arquivo.pdf">
            Baixar arquivo
            <img src={iconClip} alt="Baixar arquivo" />
          </a>
        </div>
      </Fragment>
    );
  }
}

Contents.propTypes = {
  slug: PropTypes.string.isRequired,
};

export default Contents;
