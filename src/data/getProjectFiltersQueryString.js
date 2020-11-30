function getFilterName(type) {
  switch (type) {
    case 'segments':
      return 'segment_ids';

    case 'stages':
      return 'stage_ids';

    case 'years':
      return 'year_ids';

    case 'curricular_components':
      return 'curricular_component_ids';

    case 'sustainable_development_goals':
      return 'sustainable_development_goal_ids';

    case 'knowledge_matrices':
      return 'knowledge_matrix_ids';

    case 'learning_objectives':
      return 'learning_objective_ids';

    case 'axes':
      return 'axis_ids';

    case 'regional_education_boards':
      return 'regional_education_board_id';

    case 'activity_types':
    default:
      return 'activity_type_ids';
  }
}

function getFilterValue(filter) {
  return filter.id;
}

export default function getFiltersQueryString(filters) {
  const params = filters.map(filter => {
    const name = getFilterName(filter.type);
    const value = getFilterValue(filter);
    return `${name}[]=${value}`;
  });
  return params.join('&');
}

export function getSearchQueryString(filters, filtersExtra, query, order) {
  let params = filters.map(filter => {
    const name = getFilterName(filter.type);
    const value = getFilterValue(filter);
    return `${name}[]=${value}`;
  });

  const paramsExtra = filtersExtra.map(filter => {
    const name = getFilterName(filter.type);
    const value = getFilterValue(filter);
    return `${name}[]=${value}`;
  });

  if (paramsExtra.length) {
    params = params.concat(paramsExtra);
  }

  if (query) {
    params.push(`q=${query}`);
  }

  if (order) {
    let orderBy;
    let sort;

    switch (order) {
      case 'newest':
        orderBy = 'created_at';
        sort = 'desc';
        break;
      case 'oldest':
        orderBy = 'created_at';
        sort = 'asc';
        break;
      default:
        orderBy = 'title';
        sort = 'asc';
        break;
    }

    if (orderBy && sort) {
      params.push(`order_by=${orderBy}`);
      params.push(`sort=${sort}`);
    }
  }

  return params.join('&');
}
