import React, { Component } from 'react';
import { a } from 'react-router-dom';
import Page from 'components/layout/Page';
import iconKnowledgeMatrix from 'images/illustrations/knowledgeMatrix.svg';
import iconLearningObjectives from 'images/illustrations/learningObjectives.svg';
import iconSustainableDevGoals from 'images/illustrations/sustainableDevGoals.svg';
import Collapse from '@material-ui/core/Collapse';
import styles from './Medium.scss';
import medium from './medium.jpg';
import schoolsImage from './schools-image.jpg';
import iconPlus from 'images/icons/plus1.svg';
import minus from 'images/icons/minus.svg';

class Medium extends Component {

	constructor(props) {
		super(props);

		this.state = {
			schools: false,
			history: false,
			curriculum: false,
			law: false,
			education: false
		}

		this.collapseTextSchools = this.collapseTextSchools.bind(this);
		this.collapseTextHistory = this.collapseTextHistory.bind(this);
		this.collapseTextCurriculum = this.collapseTextCurriculum.bind(this);
		this.collapseTextLaw = this.collapseTextLaw.bind(this);
    this.collapseTextEducation = this.collapseTextEducation.bind(this);
	}

	collapseTextSchools(){
		this.setState({ schools: !this.state.schools });
	}

	collapseTextHistory(){
		this.setState({ history: !this.state.history });
	}

	collapseTextCurriculum(){
		this.setState({ curriculum: !this.state.curriculum });
 	}

	collapseTextLaw(){
		this.setState({ law: !this.state.law });
	}

	collapseTextEducation(){
		this.setState({ education: !this.state.education });
	}

  render() {
    return (
      <Page>
        <header className={styles.header}>
          <div>
						<img className={styles.image} src={medium}></img>
					</div>
          <div className={styles.wrapperText + " row"}>
            <div className="col-md-8 offset-md-2">
              <p className={styles.doubleLineHeight}>
              	O Ensino Médio, última etapa da Educação Básica, está presente em 9 (nove)
								Unidades Educacionais da Rede Municipal de Ensino, que atendem 2.409
								estudantes (dados fornecidos em maio do presente ano pela Coordenadoria
								de Informações Educacionais – CIEDU). Dessas Unidades Educacionais,
								8 (oito) atendem estudantes em anos iniciais e finais do Ensino Fundamental e
								são denominadas de Escolas Municipais de Ensino Fundamental e Médio (EMEFM).
								Também temos a Escola Municipal de Educação Bilíngue para Surdos, a
								EMEBS Helen Keller que, desde 2019, também possui atendimento a esta etapa,
								comtemplando estudantes da Educação Infantil, do Ensino Fundamental e do
								Ensino Médio passando a ser a primeira escola pública a oferecer todas as etapas
								da Educação Básica Bilíngue.
              </p>
              <p className={styles.doubleLineHeight}>
								Temos um grande diferencial no que se refere à nossa Matriz Curricular,
								pois na Área de conhecimento das Linguagens e suas Tecnologias, oferecemos o
								componente curricular de Língua Espanhola, além da Língua Inglesa.
              </p>

 							<button className={styles.collapseButton} onClick={this.collapseTextSchools}>
								{ this.state.schools ? <img src={minus} alt="Expandir escolas" /> : <img src={iconPlus} alt="Minimizar escolas" />}
								<span id="schools" className={styles.buttonText}>
									Conhecendo mais sobre as escolas
								</span>
							</button>

							<Collapse in={this.state.schools}>
								<br></br><br></br>
								<div>
									<img src={schoolsImage}></img>
								</div>
								<br></br><br></br>
								<p className={styles.doubleLineHeight}>
									Nossas Unidades Educacionais que oferecem Ensino Médio estão em
									diferentes regiões da capital paulista. São elas: EMEFM Antônio
									Alves Veríssimo, localizada no bairro Jaraguá e EMEFM Guiomar
									Cabral, localizada no bairro Jardim Cidade Pirituba – ambas
									pertencentes à Diretoria Regional de Educação  Pirituba/Jaraguá
									– DRE P/J; EMEFM Professor Derville Allegretti e EMEFM Vereador
									Antônio Sampaio, ambas localizadas no bairro de Santana –
									Diretoria Regional de Educação  Jaçanã/Tremembé – DRE J/T;
									EMEFM Darcy Ri beiro, localizada no bairro de São Miguel
									Paulista - Diretoria Regional de Educação  São Miguel – DRE MP;
									EMEFM Oswaldo Aranha Bandeira de Mello, localizada na Cidade
									Tiradentes - Diretoria Regional de Educação  Guaianases –
									DRE G; EMEFM Professor Lin neu Prestes, localizada no bairro
									de Santo Amaro - Diretoria Regional de Educação  Santo Amaro
									– DRE SA; EMEFM Rubens Paiva, localizada no bairro Jardim Ângela -
									Diretoria Regional de Educação  São Mateus – DRE SM e EMEBS
									Helen Keller, localizada no bairro da Aclimação – Diretoria
									Regional de Educação  Ipiranga – DRE IP.
								</p>
							</Collapse>

							<button className={styles.collapseButton} onClick={this.collapseTextHistory}>
								{ this.state.history ? <img src={minus} alt="Expandir escolas" /> : <img src={iconPlus} alt="Minimizar escolas" />}
								<span id="history" className={styles.buttonText}>
									Histórico das EMEFM e da EMEBS Helen Keller
								</span>
							</button>
							<Collapse in={this.state.history}>
								<br></br><br></br>
								<div>
									<p className={styles.doubleLineHeight}>
										As 8 (oito) Es colas Municipais de Ensino Fundamental e Médio
										(EMEFM), assim como a EMEBS Helen Keller, ultrapassam os
										territórios nos quais estão inseridas, recebendo estudantes
										dos diferentes bairros da capital paulista e de diversos
										municípios na Grande São P aulo, como Guarulhos, Itaquaquecetuba,
										Santo André etc. Cada uma delas possui características ímpares,
										projetos próprios e grande reconhecimento da comunidade atendida,
										sendo procuradas pela qualidade de suas propostas pedagógicas.
									</p>
								</div>
								<br></br>
								<div>
									<p className={styles.doubleLineHeight}>
										<i className={styles.credit}>EMEFM Antônio Alves Veríssimo </i>
									</p>
									<p className={styles.doubleLineHeight}>
										Criada em 1985 a partir da doação de um prédio construído e
										equipada para  instalação de uma escola de Educação Infantil,
										como resultado de um acordo com a Prefeitura do Município de
										São Paulo, recebeu o nome do fundador da rede que havia
										ofertado o prédio. A Escola Municipal de Primeiro Grau
										Antônio Alves Veríssimo pa ssa a oferecer 2º Grau a partir
										de 1992, sendo, posteriormente, denominada EMEFM Antônio Alves
										Veríssimo. Oferece o Ensino Fundamental e o Ensino Médio Regular.
									</p>
									<a target="_blank" href="https://www.facebook.com/pages/EMEFM-Ant%C3%B4nio-Alves-Ver%C3%ADssimo/1596070194015226?ti=as">
										Antônio Alves Veríssimo
									</a>
								</div>
								<br></br>
								<br></br>
								<div>
									<p className={styles.doubleLineHeight}>
										<i className={styles.credit}>
											EMEFM Vereador Antônio Sampaio
										</i>
									</p>
									<p className={styles.doubleLineHeight}>
										Inaugurada em julho de 1996 no terreno utilizado, anteriormente,
										pelo c Clube Desportivo Municipal de Santana - CDMS, a E.M.P.G.
										"Vereador Antônio Sampaio" teve sua nomenclatura alterada em
										setembro do mesmo ano para E.M.P.S.G. “Vereador Antônio Sampaio”,
										ao ser autorizada a oferecer o curso de Técnico em Processamento
										de Dados, descontinuado posteriormente. Atualmente, oferta o
										Ensino Fundamental e o Ensino Médio Regular.
									</p>
									<a target="_blank" href="https://www.facebook.com/emefmVAS/?ti=as">
										Vereador Antônio Sampaio
									</a>
								</div>
								<br></br>
								<br></br>
								<div>
									<p className={styles.doubleLineHeight}>
										<i className={styles.credit}>
											EMEFM Darcy Ribeiro
										</i>
									</p>
									<p className={styles.doubleLineHeight}>
										Anteriormente denominada E.M.P.S.G "São Miguel Paulista",
										foi criada em outubro de 1996, ofertando o curso secundário
										com habilitação específica para o Magistério. Teve seu nome
										alterado no ano de 1997 para EMEFM Darcy Ribeiro. Posteriormente,
										o curso de Magistério foi descontinuado, mantendo a oferta do
										Ensino Fundamental e o Ensino Médio Regular.
									</p>
									<a target="_blank" href="https://www.facebook.com/pages/EMEFM-Darcy-Ribeiro/405753949612280?ti=as">
										Darcy Ribeiro
									</a>
								</div>
								<br></br>
								<br></br>
								<div>
									<p className={styles.doubleLineHeight}>
										<i className={styles.credit}>
											EMEFM Professor Derville Allegretti
										</i>
									</p>
									<p className={styles.doubleLineHeight}>
										Fundada na Baixada do Glicério, em março de 1968, com a
										denominação de Escola Técnica de Comércio Municipal, oferecia
										os cursos de Taquigrafia, Vitrinismo e Guia de Turismo.
										Transferida para o endereço atual, no bairro de Santana,
										em 1970. Em 1973 recebe o nome de Centro Interescolar
										Municipal de São Paulo e, em 1979, passa a se chamar
										Escola Municipal de Primeiro e Segundo Graus Professor
										Derville Allegretti. A partir de 1982 começa a ofertar também
										o curso de Magistério e, em 1998, recebe o nome utilizado
										atualmente. Mantém o curso Normal de Nível Médio (antigo Magistério),
										além do Ensino Médio Regular e do Ensino Fundamental.
									</p>
									<a target="_blank" href="https://www.facebook.com/allegrettiderville">
										Derville Allegretti
									</a>
								</div>
								<br></br>
								<br></br>
								<div>
									<p className={styles.doubleLineHeight}>
										<i className={styles.credit}>
											EMEFM Guiomar Cabral
										</i>
									</p>
									<p className={styles.doubleLineHeight}>
										A Escola Municipal de Primeiro e Segundo Graus de "Pirituba"
										foi criada em julho de 1996. Iniciou o funcionamento dos cursos
										profissionalizantes com habilitação plena nos cursos de
										Processamento de Dados e Administração, em 1997. Recebe, em
										seguida, o nome de E.M.P.S.G. Guiomar Cabral e, a partir de
										2002, recebe o nome atual. Continua ofertando o Ensino Fundamental
										e o Ensino Médio Regular.
									</p>
									<a target="_blank" href="https://www.facebook.com/EMEFMGUIOMARCABRAL/">
										Guiomar Cabral
									</a>
								</div>
								<br></br>
								<br></br>
								<div>
									<p className={styles.doubleLineHeight}>
										<i className={styles.credit}>
											EMEFM Professor Linneu Prestes
										</i>
									</p>
									<p className={styles.doubleLineHeight}>
										Fundada em janeiro de 1960, recebeu o nome de Escolas Agrupadas
										Municipais Professor Linneu Prestes. Em 1970 passa a ser
										denominada Escola Municipal "Professor Linneu Prestes", e, em
										1975, Escola Municipal de Primeiro Grau "Professor Linneu Prestes".
										Passa a oferecer o Segundo Grau, a partir de 1981, e o curso com habilitação
										para o Magistério em 1995. Oferece, atualmente, o Ensino Fundamental,
										na modalidade regular e para a Educação de Jovens e Adultos - EJA e o
										Ensino Médio Regular.
									</p>
									<a target="_blank" href="https://www.facebook.com/EMEFM-Professor-Linneu-Prestes-192377137452899/?ti=as">
										Professor Linneu Prestes
									</a>
								</div>
								<br></br>
								<br></br>
								<div>
									<p className={styles.doubleLineHeight}>
										<i className={styles.credit}>
											EMEFM Oswaldo Aranha Bandeira de Melo
										</i>
									</p>
									<p className={styles.doubleLineHeight}>
										Inaugurada no ano de 1984 com o nome de E.M.P.G. "Oswaldo Aranha Bandeira de Melo",
										foi instalada provisoriamente em um prédio adaptado no Centro
										Comercial do Conjunto Habitacional Cidade Tiradentes. Em 1985 foi
										transferida para o prédio atual. Passa a oferecer, no ano de 1996,
										os cursos de Segundo Grau com habilitação em Magistério e em Contabilidade,
										e a ser designada Escola Municipal de Primeiro e Segundo Graus Oswaldo
										Aranha Bandeira de Mello, passando depois a ser conhecida pelo nome
										atual. Oferece Ensino Fundamental e Ensino Médio Regular.
									</p>
									<a target="_blank" href="https://www.facebook.com/pages/Emefm-Oswaldo-Aranha-Bandeira-de-Mello/114308731972371?ti=as">
										Oswaldo Aranha Bandeira de Melo
									</a>
								</div>
								<br></br>
								<br></br>
								<div>
									<p className={styles.doubleLineHeight}>
										<i className={styles.credit}>
											EMEFM Rubens Paiva
										</i>
									</p>
									<p className={styles.doubleLineHeight}>
										Fundada em 1995 sob o nome de E.M.P.G.Jardim Ângela, foi
										autorizada em 1996 a oferecer o Curso de 2° Grau, além do
										Curso de 2° Grau Profissionalizante em Processamento de Dados
										e Administração, passando a ser denominada E.M.P.S.G. "Rubens Paiva".
									</p>
									<a target="_blank" href="https://www.facebook.com/escolarubenspaiva/?ti=as">
										Rubens Paiva
									</a>
								</div>
								<br></br>
								<br></br>
								<div>
									<p className={styles.doubleLineHeight}>
										<i className={styles.credit}>
											EMEBS Helen Keller
										</i>
									</p>
									<p className={styles.doubleLineHeight}>
										Criado em 1951, o Núcleo Educacional para Crianças Surdas –
										NECS, dedicava-se inicialmente a atividades de recreação.
										A partir do ano de 1958, passa a ser denominado Instituto Municipal
										de Educação de Surdos.  Em 1969 tem sua denominação alterada para Instituto
										de Crianças Excepcionais "Helen Keller" e, a partir de 1979,
										para Escola Municipal de Educação de Deficientes Auditivos
										"Helen Keller", atendendo, desde então, a faixa etária dos 3
										(três) aos 14 (catorze) anos, abrangendo assim, desde a Educação Infantil
										até os anos finais do Ensino Fundamental. A partir de 2019,
										foi autorizado o funcionamento do Ensino Médio Bilíngue,
										em regime experimental, para posterior avaliação do
										Conselho Municipal de Educação (Parecer CME nº 540/18 –
											aprovado em 06/12/18 e publicado no D.O.C de 11/12/18, pág.12),
											passando a ser a primeira escola pública a oferecer a Educação
											Infantil, o Ensino Fundamental, a Educação de Jovens e Adultos
											e o Ensino Médio Bilíngues.
										</p>
										<a target="_blank" href="https://www.facebook.com/emebshk/?ti=as">
											Helen Keller
										</a>
								</div>
								<br></br>
								<br></br>

							</Collapse>
							<button className={styles.collapseButton} onClick={this.collapseTextCurriculum}>
								{ this.state.curriculum ? <img src={minus} alt="Expandir escolas" /> : <img src={iconPlus} alt="Minimizar escolas" />}
								<span id="curriculum" className={styles.buttonText}>
									O Currículo do Ensino Médio da Rede Municipal de Ensino de São Paulo
								</span>
							</button>
							<Collapse in={this.state.curriculum}>
								<br></br><br></br>
								<p className={styles.doubleLineHeight}>
									A elaboração curricular do documento do Ensino Médio da Cidade
									 de São Paulo é a última etapa de um processo que se iniciou,
									 em 2017, com a elaboração do Currículo da Cidade: Ensino
									 Fundamental. Em 2018, houve a elaboração dos Currículos da
									 Cidade: Educação Infantil,  Educação de Jovens e Adultos,
									 Língua Brasileira de Sinais e Língua Portuguesa para Surdos -
									 Libras. Para saber mais sobre estes documentos acesse:
								</p>
								<br></br>
								<div>
									<a target="_blank" href="https://educacao.sme.prefeitura.sp.gov.br/curriculo-da-cidade/ ">
										Curriculo da Cidade
									</a>
								</div>
								<br></br>
								<p className={styles.doubleLineHeight}>
									O Currículo da Cidade do Ensino Médio, assim como os outros
									documentos curriculares da SME, tem como Princípios
									Norteadores: a Educação Inclusiva, a Equidade e a Educação
									Integral. Além disso, os materiais trazem também uma Matriz
									de Saberes que contempla princípios Éticos, Políticos e
									Estéticos, orientados para o exercício da cidadania responsável,
									tendo em vista possibilitar a construção de uma sociedade mais
									igualitária, justa, democrática e solidária,  e também os
									Objetivos de Desenvolvimento Sustentável – ODS pactuados na
									Agenda 2030, em que buscamos relacionar os Objetivos de
									Aprendizagem e Desenvolvimento a cada um dos 17 ODS, por meio
									de temas prementes, como: direitos humanos, meio ambiente,
									desigualdades sociais e regionais, intolerâncias culturais e
									religiosas, abusos de poder, populações excluídas, avanços
									tecnológicos e seus impactos, política, economia, educação
									financeira, consumo e sustentabilidade, entre outros, a fim de
									formar cidadãos globais, entendendo que todos (governos,
									agências da ONU, sociedade civil organizada, setor privado e
									cada cidadão do país) têm responsabilidade para que o mundo
									consiga atingir os ODS, adotados em 2015 pela Assembleia Geral
									da ONU e inseridos de maneira inovadora, desde 2017, em nossos
									currículos.
								</p>
								<p className={styles.doubleLineHeight}>
									O município de São Paulo, mesmo antes da homologação da última
									versão da Base Nacional Comum Curricular (BNCC), mobilizou
									esforços para rever seus materiais curriculares. Em 14 de
									dezembro de 2018, foi homologada pelo Ministério da Educação,
									a Base Nacional Comum Curricular do Ensino Médio. Pela primeira
									vez, o país passou a ter um documento normativo que define o
									conjunto de conhecimentos essenciais que todos os estudantes
									devem desenvolver, progressivamente, ao longo da Educação Básica.
								</p>
								<p className={styles.doubleLineHeight}>
									Atendendo à demanda da própria rede e à determinação legal de
									que os municípios deveriam rever seus currículos, em 2017, a
									Secretaria Municipal de Educação retomou as discussões que
									vinham acontecendo nos grupos de formação, entre 2015 e 2016,
									com vários atores do Ensino Médio: professores, coordenadores
									pedagógicos, diretores e demais profissionais da Rede Municipal
									de Ensino - RME.
								</p>
								<p className={styles.doubleLineHeight}>
									No final do ano de 2019, ocorreu o 1º Encontro do Novo Ensino
									Médio, que contou com a participação de Professores,
									Coordenadores Pedagógicos e Diretores das EMEFMs, Supervisores
									de Ensino, técnicos da SME, Coordenadora da Coordenadoria
									Pedagógica - COPED e Membros do Conselho Municipal de Educação
									de São Paulo. Esta reunião teve como objetivo iniciar o diálogo
									acerca do processo de construção do Currículo do Ensino Médio.
								</p>
								<p className={styles.doubleLineHeight}>
									Em 2020, efetivamente, colocou-se em prática a elaboração do
									Currículo da Cidade: Ensino Médio, tendo como base os documentos
									federais, publicados a fim de nortear o Novo Ensino Médio.
									Foram organizados Grupos de Trabalho compostos por especialistas
									e professores de todas as UEs que possuem Ensino Médio,
									contemplando todos os componentes curriculares. A produção
									dos documentos curriculares buscou elucidar os pilares
									norteadores da SME: a Educação Inclusiva, a Equidade e a
									Educação Integral, os quais relacionam-se diretamente com o
									previsto na BNCC ao assegurar para nossos estudantes o
									desenvolvimento das dez competências gerais (conhecimento;
									pensamento científico, crítico e criativo; repertório cultural;
									comunicação; cultura digital; trabalho e projeto de vida;
									argumentação; autoconhecimento e autocuidado; empatia e
									cooperação; responsabilidade e cidadania), que consubstanciam,
									no âmbito pedagógico, os Direitos de Aprendizagem e
									Desenvolvimento. Também foram considerados os dados levantados
									sobre demandas e necessidades das escolas, profissionais e
									estudantes; a Base Nacional Comum Curricular, Diretrizes
									Curriculares e outros documentos federais; Especialistas dos
									componentes e áreas curriculares para assessorar os Grupos de
									Trabalho e professores de todos os componentes curriculares do
									Ensino Médio; e a escuta feita junto aos estudantes, por meio
									de rodas de conversa. Desta forma, coletivamente, estudantes,
									professores e demais profissionais da RME construíram,
									paulatinamente, um novo documento orientador da rede para o
									Ensino Médio.
								</p>
								<p className={styles.doubleLineHeight}>
									A partir do ano de 2020, a SME, em articulação com as Unidades
									Educacionais que possuem EM, passa a atender a nova matriz
									curricular do Novo Ensino Médio, em cumprimento às diretrizes
									da Base Nacional Curricular Comum Ensino Médio (BNCC- EM) que
									estabelece que o Currículo do Ensino Médio será composto pelas
									aprendizagens essenciais definidas pela Base Nacional Comum
									Curricular e por Percursos de Estudo e Formação - nomenclatura
									dada pela RME aos Itinerários Formativos previstos na BNCC,
									DCNEM e demais documentos norteadores, conforme a relevância
									para o contexto local e a possibilidade dos sistemas de ensino
									que deverão ser organizados por meio da oferta de diferentes
									arranjos curriculares.
								</p>
								<p className={styles.doubleLineHeight}>
									A Lei Federal determinou um prazo para início da implantação
									do Novo Médio no ano de 2020 e a SME decidiu realizar a
									implantação desta robusta mudança, de forma parcial, apenas
									nas escolas diurnas, transformando-as em período integral,
									com 9 aulas de 45 minutos e colocando o Itinerário Integrador
									como primeiro contato dos estudantes com a ideia de
									aprendizagem por área do conhecimento.
								</p>
								<p className={styles.doubleLineHeight}>
									O documento estabelece especificamente para o ano de 2020 uma
									matriz curricular composta por 900 horas de parte comum, ou
									seja, de BNCC, além de 450 horas de Itinerários Integradores.
									Assim, as Escolas Municipais de Ensino Fundamental e Médio
									(EMEFMs), que oferecem esta etapa da Educação Básica no
									período diurno, passam, a partir desse ano, a ofertar o Ensino
									Médio em tempo integral com 45 aulas semanais, ou seja, 9
									(nove) aulas diárias, de 45 minutos cada.
								</p>
								<p className={styles.doubleLineHeight}>
									A Reforma do Ensino Médio propõe que o currículo tenha um
									equilíbrio tanto da parte comum quanto dos itinerários
									formativos. O caminho escolhido pela Secretaria Municipal de
									Educação, especificamente, no ano de 2020, por meio do
									“Novo Ensino Médio - Educação Integral” foi de oferecer além
									dos componentes curriculares da BNCC, os Itinerários
									Integradores: Cultura dos Países de Língua Espanhola;
									Práticas Esportivas; Expressões Culturais e Artísticas;
									Tecnologias para a Aprendizagem; Produção Textual; Sala de
									Leitura e Investigação Científica e Processos Matemáticos,
									atendendo assim, ao proposto pela BNCC. Para o ano de 2021,
									já com os documentos curriculares finalizados, a SME pretende
									que os estudantes do Ensino Médio tenham como escolher seu
									trajeto formativo a partir dos diversos Percursos de Estudo e
									Formação das diferentes áreas.
								</p>
							</Collapse>
							<button className={styles.collapseButton} onClick={this.collapseTextLaw}>
								{ this.state.law ? <img src={minus} alt="Expandir escolas" /> : <img src={iconPlus} alt="Minimizar escolas" />}
								<span id="law" className={styles.buttonText}>
									Legislação sobre o Novo Ensino Médio
								</span>
							</button>
							<Collapse in={this.state.law}>
								<br></br><br></br>
								<p className={styles.doubleLineHeight}>
									A Lei nº13.415, de 16 de fevereiro de 2017 que, dentre outras
									ações, altera a Lei de Diretrizes e Bases da Educação Nacional
									(nº 9.394 de 20 de dezembro de 1996), estabelece mudanças para
									a estruturação do Ensino Médio, atribuindo aos Estados e ao
									Distrito Federal a responsabilidade pela implementação das novas
									Diretrizes Nacionais – Novo Ensino Médio.
								</p>
								<p className={styles.doubleLineHeight}>
									A base para esta implementação deve estar pautada em uma série de documentos, como:
								</p>
								<ul className={styles.lawListFirst}>
									<li>
										<p className={styles.doubleLineHeight}>Resolução CNE/CEB nº 3 de 21 de novembro de 2018 –
											atualização das Diretrizes Curriculares Nacionais para o
											Ensino Médio;
										</p>
									</li>
									<li>
										<p className={styles.doubleLineHeight}>
											Resolução CNE/CP nº 4 de 17 de dezembro de 2018 – aprova
											a Base Nacional Comum Curricular (BNCC);
										</p>
									</li>
									<li>
										<p className={styles.doubleLineHeight}>
											Portaria nº 1432 de 28 de dezembro 2018 que traz os
											referenciais para os itinerários formativos para o Ensino Médio.
										</p>
									</li>
								</ul>
								<p className={styles.doubleLineHeight}>
									O currículo do Ensino Médio, de acordo com a referida Lei Federal, será composto por:
								</p>
								<ul className={styles.lawListSecond}>
									<li>
										<p className={styles.doubleLineHeight}>
											BNCC – formação geral básica, que tem por objetivo, com
											equidade e qualidade, garantir a todos os estudantes as
											aprendizagens essenciais, com um total não superior a 1800
											h; define dez competências gerais e um conjunto de objetivos
											de aprendizagem, sendo que as aprendizagens essenciais
											introduzidas no Ensino Fundamental deverão ser consolidadas
											e aprofundadas. Os componentes de Língua Portuguesa e
											Matemática deverão estar presentes em todos os anos.
										</p>
									</li>
									<li>
										<p className={styles.doubleLineHeight}>
											Itinerários Formativos: conjunto de unidades curriculares
											que possibilitam ao estudante aprofundar seus conhecimentos
											e se preparar para o prosseguimento de estudos e para o
											mundo do trabalho, organizados por área de conhecimento:
										</p>
										<ul className={styles.lawListThird}>
											<li><p className={styles.doubleLineHeight}>Linguagens e suas Tecnologias;</p></li>
											<li><p className={styles.doubleLineHeight}>Matemática e suas Tecnologias;</p></li>
											<li><p className={styles.doubleLineHeight}>Ciências da Natureza e suas Tecnologias;</p></li>
											<li><p className={styles.doubleLineHeight}>Ciências Humanas e Sociais Aplicadas.</p></li>
										</ul>
									</li>
								</ul>
								<p className={styles.doubleLineHeight}>
									O Currículo do Ensino Médio prevê a formação integral do
									estudante, de forma a contribuir com a construção de seu
									projeto de vida e com o seu desenvolvimento em todas as
									dimensões (física, intelectual, social, emocional e cultural).
								</p>
							</Collapse>
							<button className={styles.collapseButton} onClick={this.collapseTextEducation}>
								{ this.state.education ? <img src={minus} alt="Expandir escolas" /> : <img src={iconPlus} alt="Minimizar escolas" />}
								<span id="education" className={styles.buttonText}>
									Percursos de Estudo e Formação
								</span>
							</button>
							<Collapse in={this.state.education}>
								<br></br><br></br>
								<p className={styles.doubleLineHeight}>
									É sabido que os Itinerários Formativos propostos pela BNCC
									para o Ensino Médio seguem cinco grandes áreas de
									conhecimento: Linguagens e suas Tecnologias; Matemática e
									suas Tecnologias; Ciências da Natureza e suas Tecnologias;
									Ciências Humanas e Sociais Aplicadas e Formação Técnica e
									Profissional, que compõem as possibilidades de escolha das
									disciplinas a serem cursadas pelos estudantes. Na Rede
									Municipal de Ensino de São Paulo, dado o seu histórico e
									especificidades, a opção por criarmos Percursos de Estudo e
									Formação no lugar de Itinerários Formativos, como os
									indicados pela BNCC, ocorreu  não só devido a uma diferenciação
									semântica, na qual a ideia de um Percurso de Estudo e Formação
									estava em maior consonância com as concepções, premissas e
									princípios já explicitados no Currículo da Cidade, mas também
									por optarmos por uma proposição que permitisse às escolas
									estabelecer uma inter-relação com temáticas diversas como:
									ética, cidadania, democracia, relações étnico-raciais, direitos
									humanos, diversidade, juventudes, tecnologias e cultura digital,
									relações interpessoais, meio ambiente e sustentabilidade,
									inclusão de pessoas com deficiência e transtornos globais do
									desenvolvimento, gênero e sexualidade, mundo do trabalho,
									saúde e bem-estar, saúde pública, projeto de vida,
									desenvolvimento tecnológico-científico, entre outras temáticas
									emergentes.
								</p>
								<p className={styles.doubleLineHeight}>
									Além dos 4 eixos que já constavam dos Itinerários Formativos
									da BNCC (Empreendedorismo, Processos Criativos, Investigação
									Científica e Mediação e Intervenção Sociocultural), outros 3
									eixos foram acrescidos nos Percursos de Estudo e Formação:
									Mediação e intervenção política econômica; Multiculturalismo
									e Multiletramentos, Gestão de conteúdos e informações.
								</p>
								<p className={styles.doubleLineHeight}>
									Sendo assim, os adolescentes e jovens poderão ter acesso a
									uma noção mais ampliada acerca do conhecimento de mundo, em
									nível médio, de modo que poderão aprofundar o contato,
									refletir e debater sobre  diversos aspectos da vida em
									sociedade, assim como também com temas que lhes permitam
									construir e compreender seus processos identitários de forma
									crítica, interdisciplinar, contextualizada, com vistas à sua
									educação integral, numa perspectiva emancipatória que respeite
									seus centros de interesse.
								</p>
								<div className={styles.wrapperBox}>
									<p className={styles.doubleLineHeight}>
										Em 2020, durante o período de isolamento social, devido ao
										fechamento das escolas e à necessidade de fornecer aos
										estudantes material que pudesse minimizar os prejuízos
										pedagógicos causados pela suspensão de aulas, a Secretaria
										Municipal de Educação produziu o material didático “Trilhas
										de aprendizagem para o Ensino Médio”. Trata-se de um caderno,
										dividido em dois volumes, com atividades de todos os componentes
										curriculares, organizadas de forma integrada, ultrapassando
										a fronteira das séries e, por vezes, do próprio componente
										curricular.
									</p>
									<a target="_blank" href={'https://educacao.sme.prefeitura.sp.gov.br/trilhas-de-aprendizagens/'}>
										Trilhas de aprendizagem
									</a>
								</div>
								<br></br><br></br>
								<p className={styles.doubleLineHeight + " listTitle"}><b>Coordenação geral – Secretaria Municipal de Educação</b></p>
								<div className={styles.contribuitorsList}>
									<ul className={styles.educationList}>
										<li>
											<p className={styles.doubleLineHeight}><b>Wagner Barbosa de Lima Palanch</b> – Diretor do Núcleo Técnico de Currículo (NTC)</p>
										</li>
										<li>
											<p className={styles.doubleLineHeight}><b>Claudio Maroja</b> – Diretor do Núcleo Técnico de Avaliação (NTA)</p>
										</li>
										<li>
											<p className={styles.doubleLineHeight}><b>Carla da Silva Francisco</b> – Diretora da Divisão de Ensino Fundamental e Médio (DIEFEM)</p>
										</li>
									</ul>
								</div>

								<p className={styles.doubleLineHeight + " listTitle"}><b>Equipe Técnica – Secretaria Municipal de Educação</b></p>
								<div className={styles.contribuitorsList}>
									<ul className={styles.educationList}>
										<li>
											<p className={styles.doubleLineHeight}><b>Lisandra Paes</b> – Assistente Técnico do NTC</p>
										</li>
										<li>
											<p className={styles.doubleLineHeight}><b>Clodoaldo Gomes Alencar Junior</b> – Assistente Técnico do NTC</p>
										</li>
										<li>
											<p className={styles.doubleLineHeight}><b>Márcia Vivancos Mendonça da Silva</b> – Assistente Técnico da DIEFEM</p>
										</li>
										<li>
											<p className={styles.doubleLineHeight}><b>Patrícia Ferreira da Silva</b> – Assistente Técnico do NTC</p>
										</li>
										<li>
											<p className={styles.doubleLineHeight}><b>Viviane Aparecida Costa</b> – Assistente Técnico do NTC</p>
										</li>
									</ul>
								</div>
							</Collapse>
            </div>
          </div>
        </header>
        <hr />
        <div className={styles.slogan}>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <p>
                O direito à educação implica a garantia das condições e
                oportunidades necessárias para que os estudantes tenham acesso a
                uma formação indispensável para a sua realização pessoal,
                formação para a vida produtiva e pleno exercício da cidadania.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <ul className={styles.list}>
          <li className={styles.sustainableDevGoals}>
            <a target="_blank" href="/ods">
              <img
                src={iconSustainableDevGoals}
                alt="Objetivos de Desenvolvimento Sustentável (ODS)"
              />
              <h2>Objetivos de Desenvolvimento Sustentável (ODS)</h2>
            </a>
            <p className={styles.doubleLineHeight}>
              O Currículo da Cidade foi um dos primeiros do mundo a se alinhar
              aos ODS da Organização das Nações Unidas. Os 17 objetivos e 169
              metas buscam concretizar os direitos humanos de todos e alcançar a
              igualdade de gênero. Aqui você pode conhecê-los em detalhe, além
              de encontrar as sequências didáticas relacionadas.
            </p>
            {/* <a className={styles.btn} to="/ods">
              Explore e encontre sequências
            </a> */}
          </li>
          <li className={styles.knowledgeMatrix}>
            <a target="_blank" href="/matriz-de-saberes">
              <img src={iconKnowledgeMatrix} alt="Matriz de Saberes" />
              <h2>Matriz de Saberes</h2>
            </a>
            <p className={styles.doubleLineHeight}>
              A Matriz de Saberes tem como propósito formar cidadãos éticos,
              responsáveis e solidários que fortaleçam uma sociedade mais
              inclusiva, democrática, próspera e sustentável. Aqui você pode
              conhecer as dimensões da matriz e encontrar as sequências
              relacionadas.
            </p>
            {/* <a className={styles.btn} to="/matriz-de-saberes">
              Explore e encontre sequências
            </a> */}
          </li>
          <li className={styles.learningObjectives}>
            <a target="_blank" href="/objetivos-de-aprendizagem">
              <img
                src={iconLearningObjectives}
                alt="Objetivos de Aprendizagem"
              />
              <h2>Objetivos de Aprendizagem</h2>
            </a>
            <p className={styles.doubleLineHeight}>
              No Currículo da Cidade, os objetivos de aprendizagem e
              desenvolvimento orientam-se pela Educação Integral a partir da
              matriz de saberes e indicam o que os estudantes devem alcançar a
              cada ano como resultado das experiências de ensino e de
              aprendizagem intencionalmente previstas para esse fim.
            </p>
            {/* <a className={styles.btn} to="/objetivos-de-aprendizagem">
              Explore e encontre sequências
            </a> */}
          </li>
        </ul>
      </Page>
    );
  }
}

export default Medium;
