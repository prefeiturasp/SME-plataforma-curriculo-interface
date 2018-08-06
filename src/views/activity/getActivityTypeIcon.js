import iconPair from '../../images/iconPair.svg';
import iconGroup from '../../images/iconGroup.svg';
import iconIndividual from '../../images/iconIndividual.svg';
import iconIndoors from '../../images/iconIndoors.svg';
import iconOutdoors from '../../images/iconOutdoors.svg';

export default function getActivityTypeIcon(activityType) {
  switch (activityType) {
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
