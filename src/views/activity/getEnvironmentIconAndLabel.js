import iconIndoors from './images/types/indoors.svg';
import iconOutdoors from './images/types/outdoors.svg';

export default function getEnvironmentIconAndLabel(type) {
  switch (type) {
    case 'exterior':
      return {
        icon: iconOutdoors,
        label: 'Externo',
      };

    case 'interior':
      return {
        icon: iconIndoors,
        label: 'Interno',
      };

    default:
      return null;
  }
}
