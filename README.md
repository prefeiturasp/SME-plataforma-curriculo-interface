[![Maintainability](https://api.codeclimate.com/v1/badges/3842251818c3439863ca/maintainability)](https://codeclimate.com/github/prefeiturasp/SME-plataforma-curriculo-interface/maintainability)

# Pátio Digital


_“Recurso público retorna ao público”._

Nós somos o **pátio digital**, uma iniciativa da Secretaria Municipal de Educação de São Paulo que, por meio do fortalecimento da transparência, da participação social e do desenvolvimento de novas tecnologias, aproxima diferentes grupos da sociedade civil por um objetivo maior: a melhoria da educação na cidade de São Paulo. 

# Plataforma Currículo Digital


## Conteúdo

1. [Sobre o curriculo digital](#sobre-o-curriculo-digital)
2. [Comunicação](#comunicação)
3. [Como contribuir](#como-contribuir)
4. [Instalação](#instalação)

## Sobre o Curriculo Digital
Para que docentes e comunidade tenham acesso as orientações didáticas e materiais de apoio propostos nas escolas Municipais da Cidade de São Paulo atraves de uma platafoma informatizada, a Secretária Municipal de educação, por meio da iniciativa de governo aberto [Pátio Digital](http://patiodigital.prefeitura.sp.gov.br/), está em processo de implantação digital do curriculo da cidade.

### Nossos outros repositórios
1. [Plataforma curriculo](https://github.com/prefeiturasp/SME-plataforma-curriculo)
2. [Plataforma curriculo API](https://github.com/prefeiturasp/SME-plataforma-curriculo-API)

## Comunicação

| Canal de comunicação | Objetivos |
|----------------------|-----------|
| [Issues do Github](https://github.com/prefeiturasp/SME-plataforma-curriculo-interface/issues) | - Sugestão de novas funcionalidades<br> - Reportar bugs<br> - Discussões técnicas |
| [Telegram](https://t.me/patiodigital ) | - Comunicar novidades sobre os projetos<br> - Movimentar a comunidade<br>  - Falar tópicos que **não** demandem discussões profundas |

Qualquer outro grupo de discussão não é reconhecido oficialmente.

## Como contribuir

Contribuições são **super bem vindas**! Se você tem vontade de construir o
curriculo digital conosco, veja o nosso [guia de contribuição](./CONTRIBUTING.md)
onde explicamos detalhadamente como trabalhamos e de que formas você pode nos
ajudar a alcançar nossos objetivos. Lembrando que todos devem seguir 
nosso [código de conduta](./CODEOFCONDUCT.md).

## Instalação

Front-end desenvolvido com React.

### `npm start`

Executa a aplicação em modo de desenvolvimento [http://localhost:3000](http://localhost:3000).

### `npm run build`

Cria um `build` otimizado para produção na pasta `build`.

### Setup do ambiente

1. Configurar as variáveis de ambiente APP_ENV e APP_ROOT

` export APP_ENV=production `
` export APP_ROOT=diretorio raiz da aplicação `

2. Criar/Editar os arquivos .env.api, .env.elasticsearch, .env.interface e .env.postgresql

---

Baseado no Readme do [i-educar](https://github.com/portabilis/i-educar)
