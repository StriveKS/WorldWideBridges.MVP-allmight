function criarBaseProjeto() {
  const CONFIG = {
    nomeProjeto: 'Nome do Projeto Aqui',
    pastaMemoriaId: 'COLE_AQUI_O_ID_DA_PASTA_MEMORIA',
    pastaPlanilhasId: 'COLE_AQUI_O_ID_DA_PASTA_PLANILHAS'
  };

  validarConfig_(CONFIG);

  const pastaMemoria = DriveApp.getFolderById(CONFIG.pastaMemoriaId);
  const pastaPlanilhas = DriveApp.getFolderById(CONFIG.pastaPlanilhasId);
  const dataHoje = new Date().toISOString().slice(0, 10);
  const nome = CONFIG.nomeProjeto;

  const arquivos = [
    [`${nome} - PROJECT_HISTORY.md`, criarProjectHistory_(nome, dataHoje)],
    [`${nome} - CONTEXTO_LLM.md`, criarContextoLLM_(nome)],
    [`${nome} - DECISOES.md`, criarDecisoes_(nome)],
    [`${nome} - PROMPTS.md`, criarPrompts_(nome)]
  ];

  const links = [];

  arquivos.forEach(([fileName, content]) => {
    const file = pastaMemoria.createFile(fileName, content, MimeType.PLAIN_TEXT);
    links.push([fileName, file.getUrl()]);
  });

  const ss = SpreadsheetApp.create(`${nome} - Acompanhamento`);
  const spreadsheetFile = DriveApp.getFileById(ss.getId());
  pastaPlanilhas.addFile(spreadsheetFile);
  DriveApp.getRootFolder().removeFile(spreadsheetFile);

  configurarPlanilha_(ss, nome, dataHoje, links);

  Logger.log('Base criada para: ' + nome);
  Logger.log('Planilha: ' + ss.getUrl());
  links.forEach(([fileName, url]) => Logger.log(fileName + ': ' + url));
}

function validarConfig_(config) {
  if (!config.nomeProjeto || config.nomeProjeto === 'Nome do Projeto Aqui') {
    throw new Error('Defina CONFIG.nomeProjeto antes de executar.');
  }
  if (!config.pastaMemoriaId || config.pastaMemoriaId.indexOf('COLE_AQUI') >= 0) {
    throw new Error('Defina CONFIG.pastaMemoriaId com o ID da pasta Memoria.');
  }
  if (!config.pastaPlanilhasId || config.pastaPlanilhasId.indexOf('COLE_AQUI') >= 0) {
    throw new Error('Defina CONFIG.pastaPlanilhasId com o ID da pasta Planilhas.');
  }
}

function criarProjectHistory_(nome, dataHoje) {
  return `# PROJECT_HISTORY - ${nome}\n\n## Identidade do projeto\n- Nome: ${nome}\n- Objetivo:\n- Publico-alvo:\n- Problema que resolve:\n- Proposta de valor:\n- Status atual: Inicio\n- Stack atual:\n- Links importantes:\n\n## Linha do tempo\n\n### ${dataHoje} - Registro inicial\n**O que foi feito:**\nBase operacional criada.\n\n**Problemas encontrados:**\n\n**Solucoes aplicadas:**\n\n**Decisoes tomadas:**\nUsar Google Drive como hub de memoria e planilhas como acompanhamento.\n\n**Arquivos criados ou alterados:**\n\n**Ferramentas usadas:**\nGoogle Drive, Google Apps Script.\n\n**Proximos passos:**\n\n**Pontos de atencao:**\n\n---\n\n## Oportunidade para colony-brain\n\n- Tipo:\n- Nome sugerido:\n- Motivo:\n- Processo reutilizavel:\n- Arquivos possiveis:\n- Status: Ideia\n`;
}

function criarContextoLLM_(nome) {
  return `# CONTEXTO_LLM - ${nome}\n\n## Resumo do projeto\n\n## Estado atual\n\n## O que ja foi decidido\n\n## O que nao deve ser refeito\n\n## Ferramentas em uso\n\n## Arquivos importantes\n\n## Proxima tarefa recomendada\n\n## Prompt de transferencia\nVoce e uma LLM auxiliando neste projeto. Leia este contexto e continue a partir do estado atual, sem refazer decisoes ja tomadas. Priorize solucoes simples, gratuitas, conectaveis e rapidas de implementar.\n`;
}

function criarDecisoes_(nome) {
  return `# DECISOES - ${nome}\n\n| Data | Tipo | Decisao | Motivo | Impacto | Revisar quando |\n|---|---|---|---|---|---|\n`;
}

function criarPrompts_(nome) {
  return `# PROMPTS - ${nome}\n\n## Continuar projeto\nLeia o PROJECT_HISTORY.md e o CONTEXTO_LLM.md. Continue o projeto a partir do estado atual.\n\n## Arquitetura\nAnalise este projeto e proponha uma stack 100% gratuita e uma stack de menor custo possivel.\n\n## Marketing\nCom base no projeto, gere plano de landing page, criativos, videos curtos, copy e captura de leads.\n\n## Oportunidade colony-brain\nAnalise este workflow e diga se ele deve virar uma nova Skill, aprimoramento de Skill existente ou nota experimental para colony-brain.\n`;
}

function configurarPlanilha_(ss, nome, dataHoje, links) {
  const abas = [
    'Visao Geral',
    'Backlog',
    'Tarefas',
    'Ferramentas e Conexoes',
    'Custos',
    'Marketing',
    'Entrega',
    'Problemas',
    'Proximos Passos',
    'colony-brain Opportunities'
  ];

  ss.getSheets()[0].setName(abas[0]);
  for (let i = 1; i < abas.length; i++) ss.insertSheet(abas[i]);

  preencherAba_(ss, 'Visao Geral', [
    ['Campo', 'Valor'],
    ['Projeto', nome],
    ['Fase atual', 'Inicio'],
    ['Criado em', dataHoje],
    ['Proxima acao', 'Definir objetivo e stack inicial'],
    ['PROJECT_HISTORY', links.find(row => row[0].indexOf('PROJECT_HISTORY') >= 0)?.[1] || ''],
    ['CONTEXTO_LLM', links.find(row => row[0].indexOf('CONTEXTO_LLM') >= 0)?.[1] || '']
  ]);

  preencherAba_(ss, 'Backlog', [['ID', 'Item', 'Categoria', 'Prioridade', 'Status', 'Observacoes']]);
  preencherAba_(ss, 'Tarefas', [['ID', 'Fase', 'Tarefa', 'Prioridade', 'Status', 'Responsavel', 'Ferramenta', 'Proximo passo', 'Data']]);
  preencherAba_(ss, 'Ferramentas e Conexoes', [['Categoria', 'Ferramenta', 'Uso', 'Custo', 'Status', 'Conexao nativa?', 'LLM consegue operar?', 'Observacoes']]);
  preencherAba_(ss, 'Custos', [['Ferramenta', 'Plano', 'Custo', 'Necessario agora?', 'Alternativa gratuita', 'Observacoes']]);
  preencherAba_(ss, 'Marketing', [['Canal', 'Ativo', 'Objetivo', 'Status', 'Ferramenta', 'Link', 'Proximo passo']]);
  preencherAba_(ss, 'Entrega', [['Entregavel', 'Usuario/Cliente', 'Status', 'Ferramenta', 'Link', 'Problema', 'Proximo passo']]);
  preencherAba_(ss, 'Problemas', [['Problema', 'Impacto', 'Prioridade', 'Solucao possivel', 'Status', 'Revisar em']]);
  preencherAba_(ss, 'Proximos Passos', [['Passo', 'Por que importa', 'Ferramenta', 'Responsavel', 'Status']]);
  preencherAba_(ss, 'colony-brain Opportunities', [['Tipo', 'Skill/Aprimoramento sugerido', 'Workflow reutilizavel', 'Status', 'Observacoes']]);

  abas.forEach(nomeAba => formatarAba_(ss.getSheetByName(nomeAba)));
  aplicarValidacoes_(ss);
}

function preencherAba_(ss, nomeAba, rows) {
  const sheet = ss.getSheetByName(nomeAba);
  sheet.getRange(1, 1, rows.length, rows[0].length).setValues(rows);
}

function formatarAba_(sheet) {
  sheet.setFrozenRows(1);
  const lastColumn = Math.max(sheet.getLastColumn(), 1);
  sheet.getRange(1, 1, 1, lastColumn).setFontWeight('bold');
  sheet.autoResizeColumns(1, lastColumn);
}

function aplicarValidacoes_(ss) {
  const statusRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Not started', 'In progress', 'Blocked', 'Needs review', 'Done', 'Archived'], true)
    .build();

  const priorityRule = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Critical', 'High', 'Medium', 'Low'], true)
    .build();

  const tarefas = ss.getSheetByName('Tarefas');
  tarefas.getRange('D2:D200').setDataValidation(priorityRule);
  tarefas.getRange('E2:E200').setDataValidation(statusRule);

  const backlog = ss.getSheetByName('Backlog');
  backlog.getRange('D2:D200').setDataValidation(priorityRule);
  backlog.getRange('E2:E200').setDataValidation(statusRule);

  const problemas = ss.getSheetByName('Problemas');
  problemas.getRange('C2:C200').setDataValidation(priorityRule);
  problemas.getRange('E2:E200').setDataValidation(statusRule);
}
