import iconPair from './images/types/pair.svg';
import iconGroup from './images/types/group.svg';
import iconIndividual from './images/types/individual.svg';
import iconIndoors from './images/types/indoors.svg';
import iconOutdoors from './images/types/outdoors.svg';

export default function getActivityTypeIcon(type) {
  switch (type) {
    case 'Dupla':
      return iconPair;

    case 'Grupo':
      return iconGroup;

    case 'Individual':
      return iconIndividual;

    case 'Exterior':
      return iconOutdoors;

    case 'Interior':
      return iconIndoors;

    default:
      return null;
  }
}
