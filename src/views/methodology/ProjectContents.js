import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Step from './Step';
import icon01 from './images/01.svg';
import icon02 from './images/02.svg';
import icon03 from './images/03.svg';
import icon04 from './images/04.svg';
import icon05 from './images/05.svg';
import icon06 from './images/06.svg';
import icon07 from './images/07.svg';
import icon08 from './images/08.svg';
import icon09 from './images/09.svg';
import icon10 from './images/10.svg';

class ProjectContents extends Component {
  render() {
    const { steps } = this.props;

    const stepItems = steps.map((item, i) => {
      return <Step key={i} data={item} />;
    })

    return (
      <Fragment>
        {stepItems}
      </Fragment>
    );
  }
}

ProjectContents.propTypes = {
  steps: PropTypes.array.isRequired,
};

ProjectContents.defaultProps = {
  steps: [
    {
      step: 1,
      image: icon01,
      title: 'Ponto de partida',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius rutrum odio in laoreet. Maecenas quis fringilla nibh. Vestibulum consectetur, odio eget faucibus faucibus, tellus enim scelerisque odio, nec aliquam nibh ipsum sit amet tellus. Aenean semper faucibus quam, in porta metus bibendum sed. Proin a dui tortor. Cras lorem turpis, rhoncus eu elit ut, sollicitudin laoreet sapien. In et libero malesuada, placerat risus vel, tristique nibh. Integer orci magna, vehicula sed ullamcorper.'
    },
    {
      step: 2,
      image: icon02,
      title: 'Formação de equipes',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius rutrum odio in laoreet. Maecenas quis fringilla nibh. Vestibulum consectetur, odio eget faucibus faucibus, tellus enim scelerisque odio, nec aliquam nibh ipsum sit amet tellus. Aenean semper faucibus quam, in porta metus bibendum sed. Proin a dui tortor. Cras lorem turpis, rhoncus eu elit ut, sollicitudin laoreet sapien. In et libero malesuada, placerat risus vel, tristique nibh. Integer orci magna, vehicula sed ullamcorper.'
    },
    {
      step: 3,
      image: icon03,
      title: 'Definição do produto final',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius rutrum odio in laoreet. Maecenas quis fringilla nibh. Vestibulum consectetur, odio eget faucibus faucibus, tellus enim scelerisque odio, nec aliquam nibh ipsum sit amet tellus. Aenean semper faucibus quam, in porta metus bibendum sed. Proin a dui tortor. Cras lorem turpis, rhoncus eu elit ut, sollicitudin laoreet sapien. In et libero malesuada, placerat risus vel, tristique nibh. Integer orci magna, vehicula sed ullamcorper.'
    },
    {
      step: 4,
      image: icon04,
      title: 'Organização e planejamento',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius rutrum odio in laoreet. Maecenas quis fringilla nibh. Vestibulum consectetur, odio eget faucibus faucibus, tellus enim scelerisque odio, nec aliquam nibh ipsum sit amet tellus. Aenean semper faucibus quam, in porta metus bibendum sed. Proin a dui tortor. Cras lorem turpis, rhoncus eu elit ut, sollicitudin laoreet sapien. In et libero malesuada, placerat risus vel, tristique nibh. Integer orci magna, vehicula sed ullamcorper.'
    },
    {
      step: 5,
      image: icon05,
      title: 'Compilação de informação',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius rutrum odio in laoreet. Maecenas quis fringilla nibh. Vestibulum consectetur, odio eget faucibus faucibus, tellus enim scelerisque odio, nec aliquam nibh ipsum sit amet tellus. Aenean semper faucibus quam, in porta metus bibendum sed. Proin a dui tortor. Cras lorem turpis, rhoncus eu elit ut, sollicitudin laoreet sapien. In et libero malesuada, placerat risus vel, tristique nibh. Integer orci magna, vehicula sed ullamcorper.'
    },
    {
      step: 6,
      image: icon06,
      title: 'Análise e síntese',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius rutrum odio in laoreet. Maecenas quis fringilla nibh. Vestibulum consectetur, odio eget faucibus faucibus, tellus enim scelerisque odio, nec aliquam nibh ipsum sit amet tellus. Aenean semper faucibus quam, in porta metus bibendum sed. Proin a dui tortor. Cras lorem turpis, rhoncus eu elit ut, sollicitudin laoreet sapien. In et libero malesuada, placerat risus vel, tristique nibh. Integer orci magna, vehicula sed ullamcorper.'
    },
    {
      step: 7,
      image: icon07,
      title: 'Produção',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius rutrum odio in laoreet. Maecenas quis fringilla nibh. Vestibulum consectetur, odio eget faucibus faucibus, tellus enim scelerisque odio, nec aliquam nibh ipsum sit amet tellus. Aenean semper faucibus quam, in porta metus bibendum sed. Proin a dui tortor. Cras lorem turpis, rhoncus eu elit ut, sollicitudin laoreet sapien. In et libero malesuada, placerat risus vel, tristique nibh. Integer orci magna, vehicula sed ullamcorper.'
    },
    {
      step: 8,
      image: icon08,
      title: 'Apresentação do projeto',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius rutrum odio in laoreet. Maecenas quis fringilla nibh. Vestibulum consectetur, odio eget faucibus faucibus, tellus enim scelerisque odio, nec aliquam nibh ipsum sit amet tellus. Aenean semper faucibus quam, in porta metus bibendum sed. Proin a dui tortor. Cras lorem turpis, rhoncus eu elit ut, sollicitudin laoreet sapien. In et libero malesuada, placerat risus vel, tristique nibh. Integer orci magna, vehicula sed ullamcorper.'
    },
    {
      step: 9,
      image: icon09,
      title: 'Resposta coletiva à pergunta inicial',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius rutrum odio in laoreet. Maecenas quis fringilla nibh. Vestibulum consectetur, odio eget faucibus faucibus, tellus enim scelerisque odio, nec aliquam nibh ipsum sit amet tellus. Aenean semper faucibus quam, in porta metus bibendum sed. Proin a dui tortor. Cras lorem turpis, rhoncus eu elit ut, sollicitudin laoreet sapien. In et libero malesuada, placerat risus vel, tristique nibh. Integer orci magna, vehicula sed ullamcorper.'
    },
    {
      step: 10,
      image: icon10,
      title: 'Avaliação e autoavaliação',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius rutrum odio in laoreet. Maecenas quis fringilla nibh. Vestibulum consectetur, odio eget faucibus faucibus, tellus enim scelerisque odio, nec aliquam nibh ipsum sit amet tellus. Aenean semper faucibus quam, in porta metus bibendum sed. Proin a dui tortor. Cras lorem turpis, rhoncus eu elit ut, sollicitudin laoreet sapien. In et libero malesuada, placerat risus vel, tristique nibh. Integer orci magna, vehicula sed ullamcorper.'
    },
  ],
};

export default ProjectContents;
