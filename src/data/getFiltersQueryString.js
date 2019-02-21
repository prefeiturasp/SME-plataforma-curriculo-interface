function getFilterName(type) {
  switch (type) {
    case 'years':
      return 'years';

    case 'curricular_components':
      return 'curricular_component_slugs';

    case 'sustainable_development_goals':
      return 'sustainable_development_goal_ids';

    case 'knowledge_matrices':
      return 'knowledge_matrix_ids';

    case 'learning_objectives':
      return 'learning_objective_ids';

    case 'axes':
      return 'axis_ids';

    case 'activity_types':
    default:
      return 'activity_type_ids';
  }
}

function getFilterValue(filter) {
  switch (filter.type) {
    case 'curricular_components':
      return filter.slug;

    default:
      return filter.id;
  }
}

export default function getFiltersQueryString(filters) {
  const params = filters.map(filter => {
    const name = getFilterName(filter.type);
    const value = getFilterValue(filter);
    return `${name}[]=${value}`;
  });
  return params.join('&');
}
