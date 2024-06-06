const commandRoutes = [
  {
    name: "Arquivo",
    routes: [
      {
        // Details in page 491 of the manual
        name: "Criar Cenário",
        path: "Arquivo > Criar Cenário",
      },
      {
        name: "Abrir...",
        path: "Arquivo > Abrir...",
      },
      {
        name: "Abrir Cenário Publicado",
        path: "Arquivo > Abrir Cenário Publicado",
      },
      {
        name: "Fechar",
        path: "Arquivo > Fechar",
      },
      {
        name: "Salvar",
        path: "Arquivo > Salvar",
      },
      {
        name: "Salvar Como...",
        path: "Arquivo > Salvar Como...",
      },
      {
        name: "Publicar Cenário",
        path: "Arquivo > Publicar Cenário",
      },
      {
        name: "Propriedades",
        path: "Arquivo > Propriedades",
      },
      {
        name: "Log",
        path: "Arquivo > Log",
      },
      {
        name: "Sair",
        path: "Arquivo > Sair",
      },
    ],
  },
  {
    name: "Otimização",
    routes: [
      {
        name: "Parâmetros",
        path: "Otimização > Parâmetros",
      },
      {
        name: "Longo Prazo",
        path: "Otimização > Longo Prazo",
      },
      {
        name: "Médio Prazo",
        path: "Otimização > Médio Prazo",
      },
      {
        name: "Produtos",
        path: "Otimização > Produtos",
      },
      {
        name: "Operações de Cadeia",
        path: "Otimização > Operações de Cadeia",
      },
      {
        name: "Fluxos de Produtos",
        path: "Otimização > Fluxos de Produtos",
      },
      {
        name: "Importar Médio Prazo",
        path: "Otimização > Importar Médio Prazo",
      },
      {
        name: "Importar Curto Prazo",
        path: "Otimização > Importar Curto Prazo",
      },
      {
        name: "Otimizar",
        path: "Otimização > Otimizar",
      },
      {
        name: "Cancelar Otimização",
        path: "Otimização > Cancelar Otimização",
      },
    ],
  },
  {
    name: "Servidor",
    routes: [
      {
        name: "Configuração",
        path: "Servidor > Configuração",
      },
      {
        name: "Fila",
        path: "Servidor > Fila",
      },
    ],
  },
  {
    name: "Administração do Sistema",
    routes: [
      {
        name: "Parâmetros",
        path: "Administração do Sistema > Parâmetros",
      },
      {
        name: "Cadastros",
        routes: [
          {
            name: "Demandas",
            path: "Administração do Sistema > Cadastros > Demandas",
            routes: [
              {
                name: "Longo Prazo",
                path: "Administração do Sistema > Cadastros > Demandas > Longo Prazo",
                routes: [
                  {
                    name: "Programa de Vendas Plurianual",
                    path: "Administração do Sistema > Cadastros > Demandas > Longo Prazo > Programa de Vendas Plurianual",
                  },
                  {
                    name: "Feed para Pelotização Anual",
                    path: "Administração do Sistema > Cadastros > Demandas > Longo Prazo > Feed para Pelotização Anual",
                  },
                ],
              },
              {
                name: "Médio Prazo",
                path: "Administração do Sistema > Cadastros > Demandas > Médio Prazo",
                routes: [
                  {
                    name: "Programa de Vendas Mensal",
                    path: "Administração do Sistema > Cadastros > Demandas > Médio Prazo > Programa de Vendas Anual",
                  },
                  {
                    name: "Feed para Pelotização Mensal",
                    path: "Administração do Sistema > Cadastros > Demandas > Médio Prazo > Feed para Pelotização Mensal",
                  },
                ],
              },
              {
                name: "Curto Prazo",
                path: "Administração do Sistema > Cadastros > Demandas > Curto Prazo",
                routes: [
                  {
                    name: "Previsão de Vendas Agregada",
                    path: "Administração do Sistema > Cadastros > Demandas > Curto Prazo > Previsão de Vendas Agregada",
                  },
                  {
                    name: "Previsão de Vendas Diária",
                    path: "Administração do Sistema > Cadastros > Demandas > Curto Prazo > Previsão de Vendas Diária",
                  },
                  {
                    name: "Feed para Pelotização Agregada",
                    path: "Administração do Sistema > Cadastros > Demandas > Curto Prazo > Feed para Pelotização Agregada",
                  },
                ],
              },
            ],
          },
          {
            name: "Produtos",
            routes: [
              {
                name: "Categorias de Produtos",
                path: "Administração do Sistema > Cadastros > Produtos > Categorias de Produtos",
              },
              {
                name: "Subcategorias de Produtos",
                path: "Administração do Sistema > Cadastros > Produtos > Subcategorias de Produtos",
              },
              {
                name: "Produtos",
                path: "Administração do Sistema > Cadastros > Produtos > Produtos",
              },
              {
                name: "Grupos de Produtos Afins",
                path: "Administração do Sistema > Cadastros > Produtos > Grupos de Produtos Afins",
              },
              {
                name: "Regras de Blendagem de Produtos",
                path: "Administração do Sistema > Cadastros > Produtos > Regras de Blendagem de Produtos",
              },
              {
                name: "Mapa de Análise",
                path: "Administração do Sistema > Cadastros > Produtos > Mapa de Análise",
              },
              {
                name: "Especificação de Planejamento",
                path: "Administração do Sistema > Cadastros > Produtos > Especificação de Planejamento",
              },
            ],
          },
          {
            name: "Operações da Cadeia",
            routes: [
              {
                name: "Sistema de Produção",
                path: "Administração do Sistema > Cadastros > Operações da Cadeia > Sistema de Produção",
              },
              {
                name: "Complexo",
                path: "Administração do Sistema > Cadastros > Operações da Cadeia > Complexo",
              },
              {
                name: "Site",
                path: "Administração do Sistema > Cadastros > Operações da Cadeia > Site",
              },
              {
                name: "Mina",
                path: "Administração do Sistema > Cadastros > Operações da Cadeia > Mina",
              },
              {
                name: "Fornecedor",
                path: "Administração do Sistema > Cadastros > Operações da Cadeia > Fornecedor",
              },
              {
                name: "Usina de Beneficiamento",
                path: "Administração do Sistema > Cadastros > Operações da Cadeia > Usina de Beneficiamento",
              },
              {
                name: "Tipo de Pátio",
                path: "Administração do Sistema > Cadastros > Operações da Cadeia > Tipo de Pátio",
              },
              {
                name: "Pátio",
                // The routes below are Available after a Pátio is selected
                // So, they are specific to a Pátio
                path: "Administração do Sistema > Cadastros > Operações da Cadeia > Pátio",
                specificRoutes: [
                  {
                    name: "Sistemas de Produção",
                  },
                  {
                    name: "Categorias",
                  },
                  {
                    name: "Produtos",
                  },
                  {
                    name: "pontos de Carga",
                  },
                  {
                    name: "Pontos de Descarga",
                  },
                  {
                    name: "Taxa de Descarga/Empilhamento por Submodal",
                  },
                  {
                    name: "Taxa de Descarga/Empilhamento por Ponto de Descarga",
                  },
                  {
                    name: "Capacidade de Estocagem por Categorias",
                  },
                  {
                    name: "Capacidade de Estocagem por Produtos",
                  },
                  {
                    name: "Taxa de Recuperação/Expedição por Submodal",
                  },
                  {
                    name: "Taxa de Recuperação/Expedição por Ponto de Carga",
                  },
                  {
                    name: "Manutenção LP",
                  },
                  {
                    name: "Manutenção MP",
                  },
                  {
                    name: "Manutenção CP",
                  },
                  {
                    name: "Custos de Operação por Categoria",
                  },
                  {
                    name: "Custos de Operação por Produto",
                  },
                  {
                    name: "Custos de Estocagem por Categoria",
                  },
                  {
                    name: "Estoques Estratégicos",
                  },
                ],
              },
              {
                name: "Porto",
                path: "Administração do Sistema > Cadastros > Operações da Cadeia > Porto",
                specificRoutes: [
                  {
                    name: "Sistemas de Produção",
                  },
                  {
                    name: "Categorias",
                  },
                  {
                    name: "Produtos",
                  },
                  {
                    name: "Pontos de Carga",
                  },
                  {
                    name: "Pontos de Descarga",
                  },
                  {
                    name: "Taxa de Descarga/Empilhamento por Submodal",
                  },
                  {
                    name: "Taxa de Descarga/Empilhamento por Ponto de Descarga",
                  },
                  {
                    name: "Capacidade de Estocagem por Categorias",
                  },
                  {
                    name: "Capacidade de Estocagem por Produtos",
                  },
                  {
                    name: "Taxa de Recuperação/Expedição por Submodal",
                  },
                  {
                    name: "Taxa de Recuperação/Expedição por Ponto de Carga",
                  },
                  {
                    name: "Manutenção LP",
                  },
                  {
                    name: "Manutenção MP",
                  },
                  {
                    name: "Manutenção CP",
                  },
                  {
                    name: "Custos de Operação por Categoria",
                  },
                  {
                    name: "Custos de Operação por Produto",
                  },
                  {
                    name: "Custos de Estocagem por Categoria",
                  },
                  {
                    name: "Estoques Estratégicos",
                  },
                ],
              },
              {
                name: "Recursos e Equipamentos",
                path: "Administração do Sistema > Cadastros > Operações da Cadeia > Recursos e Equipamentos",
                specificRoutes: [
                  {
                    name: "Canais",
                  },
                  {
                    name: "Pieres Gêmeos",
                  },
                  {
                    name: "Píeres",
                  },
                  {
                    name: "Carregadores de Navio",
                  },
                  {
                    name: "Interdição de Recursos",
                  },
                  {
                    name: "Manutenção de Equipamentos",
                  },
                  {
                    name: "Restrição Taxa de Equipamentos",
                  },
                  {
                    name: "Número de Rebocadores para Manobra",
                  },
                  {
                    name: "Restrições de Manobra",
                  },
                  {
                    name: "Parâmetros da Filas de Navios",
                  },
                ],
              },
              {
                name: "Usina de Pelotização",
                path: "Administração do Sistema > Cadastros > Operações da Cadeia > Usina de Pelotização",
                specificRoutes: [
                  {
                    name: "Sistemas de Produção",
                  },
                  {
                    name: "Capacidade de Produção",
                  },
                  {
                    name: "Produtos",
                  },
                  {
                    name: "Custos por Produto",
                  },
                  {
                    name: "Produção LP",
                  },
                  {
                    name: "Produção MP",
                  },
                  {
                    name: "Produção CP",
                  },
                ],
              },
              {
                name: "Peneiramento",
                path: "Administração do Sistema > Cadastros > Operações da Cadeia > Peneiramento",
              },
              {
                name: "Cliente",
                path: "Administração do Sistema > Cadastros > Operações da Cadeia > Cliente",
                specificRoutes: [
                  {
                    name: "Sistemas de Produção",
                  },
                  {
                    name: "Categorias",
                  },
                  {
                    name: "Produtos",
                  },
                  {
                    name: "Pontos de Carga",
                  },
                  {
                    name: "Pontos de Descarga",
                  },
                  {
                    name: "Taxa de Descarga/Empilhamento por Submodal",
                  },
                  {
                    name: "Taxa de Descarga/Empilhamento por Ponto de Descarga",
                  },
                  {
                    name: "Capacidade de Estocagem por Categorias",
                  },
                  {
                    name: "Receita FInanceira",
                  },
                  {
                    name: "Receita FInanceira por Produto",
                  },
                  {
                    name: "Manutenção CP",
                  },
                  {
                    name: "Especificações de Planejamento",
                  },
                ],
              },
            ],
          },
          {
            name: "Fluxos de Produtos",
            routes: [
              {
                name: "Tipo de Modal",
                path: "Administração do Sistema > Cadastros > Fluxos de Produtos > Tipo de Modal",
              },
              {
                name: "Submodal",
                path: "Administração do Sistema > Cadastros > Fluxos de Produtos > Submodal",
              },
              {
                name: "Trecho",
                specificRoutes: [
                  {
                    name: "Variação da Capacidade de Vazão",
                  },
                  {
                    name: "Vazão Mínima Obrigatória LP",
                  },
                  {
                    name: "Vazão Mínima Obrigatória MP",
                  },
                  {
                    name: "Vazão Mínima Obrigatória CP",
                  },
                  {
                    name: "Custos por Categoria",
                  },
                  {
                    name: "Custos por Produto",
                  },
                  {
                    name: "Fator de Manuseio",
                  },
                ],
              },
              {
                name: "Transfêrencia para Longo Prazo",
                path: "Administração do Sistema > Cadastros > Fluxos de Produtos > Transfêrencia para Longo Prazo",
              },
              {
                name: "Transfêrencia para Médio Prazo",
                path: "Administração do Sistema > Cadastros > Fluxos de Produtos > Transfêrencia para Médio Prazo",
              },
              {
                name: "Transfêrencia para Curto Prazo",
                path: "Administração do Sistema > Cadastros > Fluxos de Produtos > Transfêrencia para Curto Prazo",
              },
              {
                name: "Sub-rede",
                path: "Administração do Sistema > Cadastros > Fluxos de Produtos > Sub-rede",
                specificRoutes: [
                  {
                    name: "Variação da Capacidade de Vazão",
                  },
                  {
                    name: "Vazão Mínima Obrigatória LP",
                  },
                  {
                    name: "Vazão Mínima Obrigatória MP",
                  },
                  {
                    name: "Vazão Mínima Obrigatória CP",
                  },
                ],
              },
              {
                name: "Grafo de Rede",
                path: "Administração do Sistema > Cadastros > Fluxos de Produtos > Grafo de Rede",
              },
            ],
          },
        ],
      },
    ],
  },
];

export { commandRoutes };
