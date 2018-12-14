import iconIndoors from 'views/activity/images/indoors.svg';
import iconOutdoors from 'views/activity/images/outdoors.svg';

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
