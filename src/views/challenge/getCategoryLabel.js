export default function getCategoryLabel(slug) {
  switch (slug) {
    case 'games':
      return 'Jogos';

    case 'investigation':
      return 'Investigação';

    case 'make_and_remake':
      return 'Fazer e refazer';

    case 'project':
      return 'Projeto';

    default:
      return slug;
  }
}
