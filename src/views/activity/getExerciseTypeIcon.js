import iconAtividadePratica from './images/exercises/atividade-pratica.svg';
import iconCalcule from './images/exercises/calcule.svg';
import iconFiqueAtento from './images/exercises/fique-atento.svg';
import iconLabDeInformatica from './images/exercises/lab-de-informatica.svg';
import iconMusica from './images/exercises/musica.svg';
import iconOucaOProfessor from './images/exercises/ouca-o-professor.svg';
import iconParaSaberMais from './images/exercises/para-saber-mais.svg';
import iconRecitacaoNumerica from './images/exercises/recitacao-numerica.svg';
import iconRodaDeConversa from './images/exercises/roda-de-conversa.svg';
import iconSalaDeLeitura from './images/exercises/sala-de-leitura.svg';
import iconTomeNota from './images/exercises/tome-nota.svg';
import iconVamosPesquisar from './images/exercises/vamos-pesquisar.svg';

export default function getExerciseTypeIcon(type) {
  switch (type) {
    case 'Atividade prática':
      return iconAtividadePratica;
      
    case 'Calcule':
      return iconCalcule;

    case 'Fique atento':
      return iconFiqueAtento;

    case 'Laboratório de informática':
      return iconLabDeInformatica;

    case 'Música':
      return iconMusica;

    case 'Ouça o professor':
      return iconOucaOProfessor;

    case 'Para saber mais':
      return iconParaSaberMais;

    case 'Recitação numérica':
      return iconRecitacaoNumerica;

    case 'Roda de conversa':
      return iconRodaDeConversa;

    case 'Sala de leitura':
      return iconSalaDeLeitura;

    case 'Tome nota':
      return iconTomeNota;

    default:
      return iconVamosPesquisar;
  }
}
