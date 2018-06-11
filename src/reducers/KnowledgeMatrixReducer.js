const initialState = {
  items: [
    {
      id: 1,
      index: 1,
      name: 'Pensamento Científico, Crítico e Criativo',
      know: 'Acessar, selecionar e organizar o conhecimento com curiosidade, pensamento científico, criticidade e criatividade;',
      to: 'Observar, questionar, investigar causas, elaborar e testar hipóteses; refletir, interpretar e analisar ideias e fatos em profundidade; produzir e utilizar evidências.',
    },
    {
      id: 2,
      index: 2,
      name: 'Resolução de Problemas',
      know: 'Acessar, selecionar e organizar o conhecimento com curiosidade, pensamento científico, criticidade e criatividade;',
      to: 'Observar, questionar, investigar causas, elaborar e testar hipóteses; refletir, interpretar e analisar ideias e fatos em profundidade; produzir e utilizar evidências.',
    },
    {
      id: 3,
      index: 3,
      name: 'Comunicação',
      know: 'Acessar, selecionar e organizar o conhecimento com curiosidade, pensamento científico, criticidade e criatividade;',
      to: 'Observar, questionar, investigar causas, elaborar e testar hipóteses; refletir, interpretar e analisar ideias e fatos em profundidade; produzir e utilizar evidências.',
    },
    {
      id: 4,
      index: 4,
      name: 'Autoconhecimento e Autocuidado',
      know: 'Acessar, selecionar e organizar o conhecimento com curiosidade, pensamento científico, criticidade e criatividade;',
      to: 'Observar, questionar, investigar causas, elaborar e testar hipóteses; refletir, interpretar e analisar ideias e fatos em profundidade; produzir e utilizar evidências.',
    },
    {
      id: 5,
      index: 5,
      name: 'Autonomia e Determinação',
      know: 'Acessar, selecionar e organizar o conhecimento com curiosidade, pensamento científico, criticidade e criatividade;',
      to: 'Observar, questionar, investigar causas, elaborar e testar hipóteses; refletir, interpretar e analisar ideias e fatos em profundidade; produzir e utilizar evidências.',
    },
    {
      id: 6,
      index: 6,
      name: 'Abertura à Diversidade',
      know: 'Acessar, selecionar e organizar o conhecimento com curiosidade, pensamento científico, criticidade e criatividade;',
      to: 'Observar, questionar, investigar causas, elaborar e testar hipóteses; refletir, interpretar e analisar ideias e fatos em profundidade; produzir e utilizar evidências.',
    },
  ],
  currItem: null,
};

initialState.currItem = initialState.items[0];

function KnowledgeMatrixReducer(state = initialState, action) {
  return state;
}

export default KnowledgeMatrixReducer;
