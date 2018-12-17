import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import ClassroomItem from './ClassroomItem';
import ModalPage from 'components/layout/ModalPage';
import SimpleFooter from 'components/footer/SimpleFooter';
import SimpleHeader from 'components/header/SimpleHeader';
import styles from './EditCollection.scss';

class EditCollection extends Component {
  state = {
    name: 'Favoritos',
  };

  onChangedName = e => {
    this.setState({
      name: e.target.value,
    });
  };

  onClickedSave = () => {};

  render() {
    const classrooms = [
      {
        color: '#70b279',
        level: 'EJA',
        name: '[2018] Ciências Naturais',
        school: 'EMEF Maria da Silva',
        year: '1A',
      },
      {
        color: '#70b279',
        level: 'EF',
        name: '[2018] Ciências Naturais',
        school: 'EMEF João de Deus',
        year: '2D',
      },
      {
        color: '#70b279',
        level: 'EJA',
        name: '[2018] História',
        school: 'EMEF Maria da Silva',
        year: '1A',
      },
      {
        color: '#70b279',
        level: 'EF',
        name: '[2018] Matemática',
        school: 'EMEF João de Deus',
        year: '2D',
      },
      {
        color: '#70b279',
        level: 'EF',
        name: '[2018] Matemática',
        school: 'EMEF João de Deus',
        year: '3A',
      },
      {
        color: '#70b279',
        level: 'EJA',
        name: '[2018] Matemática',
        school: 'EMEF Maria da Silva',
        year: '3A',
      },
      {
        color: '#70b279',
        level: 'EJA',
        name: '[2017] Ciências Naturais',
        school: 'EMEF Maria da Silva',
        year: '1A',
      },
      {
        color: '#70b279',
        level: 'EF',
        name: '[2017] Ciências Naturais',
        school: 'EMEF João de Deus',
        year: '2D',
      },
    ];

    const items = classrooms.map((classroom, i) => {
      return (
        <ClassroomItem
          key={i}
          color={classroom.color}
          level={classroom.level}
          name={classroom.name}
          school={classroom.school}
          year={classroom.year}
        />
      );
    });

    const isInvalid = this.state.name.length <= 0;
    const message = isInvalid ? 'Campo obrigatório' : '';

    return (
      <ModalPage>
        <SimpleHeader back={true} title="Editar coleção" />
        <header className={styles.header}>
          <TextField
            error={isInvalid}
            fullWidth={true}
            helperText={message}
            label="Nome da coleção"
            onChange={this.onChangedName}
            value={this.state.name}
          />
        </header>
        <div className={styles.list}>
          <h3>Selecionar turmas (opcional)</h3>
          {items}
        </div>
        <SimpleFooter label="Salvar alterações" onClick={this.onClickedSave} />
      </ModalPage>
    );
  }
}

EditCollection.propTypes = {};

export default EditCollection;
