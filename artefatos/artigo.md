---
title: Modelo para o artigo
author: Inteli
date: Fevereiro de 2024
abstract: Escreva aqui o resumo deste artigo.
---

# Introdução

&emsp;&emsp;O conceito de _supply chain_, definido pela McKinsey (2022), engloba o processo integrado desde a aquisição de matéria-prima até a entrega do produto ao consumidor final, incluindo produção, armazenamento e transporte. Este sistema conecta uma rede de produtores, fornecedores, armazéns, centros de distribuição e varejistas, visando a produção e entrega eficiente, econômica e sustentável dos produtos. A gestão efetiva deste sistema é vital para reduzir custos, otimizar recursos, aumentar a eficiência operacional e a satisfação do cliente, sendo especialmente crítica na indústria de minérios devido à complexidade logística e à escala global das operações.

&emsp;&emsp;A otimização do _supply chain_ na indústria de minérios enfrenta desafios únicos, incluindo a gestão de uma diversificada malha logística e a necessidade de práticas sustentáveis, pressionada por custos operacionais elevados e a demanda por resposta rápida a imprevistos. Este estudo busca desenvolver soluções inovadoras para melhorar a eficiência logística e a tomada de decisão, focando na redução do tempo de espera e na otimização do planejamento logístico através de um algoritmo de grafos otimizado, implementado em Java, destinado à região sudeste do Brasil.

&emsp;&emsp;A revisão da literatura revela importantes contribuições na utilização de algoritmos de grafos para a otimização de cadeias de suprimentos, enfatizando a capacidade desses algoritmos em aprimorar a eficiência das rotas, gerir riscos e se adaptar a mudanças. Os estudos de Gonçalves (2018), que explora o Neo4j para otimização do _supply chain_; Ahuja e Orlin (2005), com sua discussão teórica sobre a otimização de redes e grafos; e Luo, Sallinen e Ripeanu (2023), que propõem um algoritmo para fluxo máximo em grafos dinâmicos, são particularmente relevantes, pois formam a base teórica para o desenvolvimento de um novo algoritmo otimizado que visa melhorar a operação nas complexas cadeias de suprimentos da indústria mineradora. Através dessas fundamentações, destaca-se a importância da inovação algorítmica na gestão eficaz de _supply chain_, sublinhando o potencial de tais abordagens em contribuir significativamente para a eficiência logística e a capacidade de resposta rápida a desafios operacionais.

&emsp;&emsp;O desenvolvimento deste algoritmo para maximização do fluxo de cadeias de suprimentos na indústria mineradora adota uma metodologia iterativa incremental, permitindo refinamentos contínuos através da análise de requisitos, desenvolvimento, simulações, testes e otimização. A escolha do Java como linguagem de programação é estratégica, dada sua robustez e capacidade de processamento de dados complexos, além do amplo suporte para implementação de algoritmos de grafos. Este trabalho foca em algoritmos clássicos de fluxo máximo, adaptando-os para atender às especificidades e desafios logísticos da indústria de mineração. O objetivo é aprimorar a eficiência operacional e reduzir custos.

&emsp;&emsp;A essência deste algoritmo reside na construção e aplicação de modelos matemáticos complexos que definem e manipulam restrições específicas, assim como na avaliação detalhada das necessidades de cada nó — representando os pontos de origem, destino, ou pontos intermediários de armazenamento — e aresta — representando as conexões ou fluxos entre esses pontos — dentro da cadeia de suprimentos mineradora. Este processo de modelagem é uma etapa fundamental na resolução deste problema, pois permite uma representação precisa da complexidade inerente às operações de mineração, incluindo variáveis como capacidade de transporte, tempo de entrega, custo e estoque. Ao implementar modelos matemáticos, o algoritmo deste trabalho permite uma representação precisa da complexidade inerente às operações de mineração, incluindo variáveis como capacidade de transporte, tempo de entrega, custo e estoque.

&emsp;&emsp;Este estudo apresenta uma contribuição significativa tanto para a ciência da computação, através do desenvolvimento de um algoritmo otimizado, quanto para a gestão de _supply chain_, oferecendo uma ferramenta prática para a indústria de mineração. A estrutura deste artigo, abordando a revisão de trabalhos relacionados, descrição dos algoritmos, resultados obtidos e conclusões principais, visa fornecer uma visão clara e detalhada do processo de desenvolvimento e avaliação do algoritmo proposto neste estudo, destacando sua relevância e potencial para a indústria mineradora

# Motivação

&emsp;&emsp;A otimização da cadeia logística na distribuição de minério de ferro é um desafio crucial para empresas do setor mineral, especialmente em um contexto onde, de acordo com previsões da consultoria de matérias-primas Raw Materials, a demanda por minério de ferro será de 3,5 bilhões de toneladas anuais em 2030, por IBRAM (2012). Logo, a eficiência na conexão entre minas e clientes, por meio de uma malha logística complexa, é essencial para garantir a competitividade e a sustentabilidade das operações, suprindo a crescente demanda global. Por esse motivo, o projeto de aumento de performance logística usando grafos surge em resposta à necessidade de aprimorar a eficiência operacional e atender às demandas dos clientes das mineradoras de forma mais precisa e oportuna.

&emsp;&emsp;Considerando a diversidade de minérios produzidos, cada um com características específicas, e a multiplicidade de modalidades de transporte envolvidas, a modelagem em grafos emerge como uma abordagem promissora para a resolução desse desafio complexo. No entanto, é importante salientar que o problema que este artigo visa solucionar se enquadra na categoria de problemas em que é muito custoso computacionalmente determinar uma solução ótima. Isso significa que, embora possamos fazer uso de algoritmos e técnicas avançadas, encontrar a solução mais eficiente pode exigir um tempo de processamento considerável, o que pode ser um desafio em si. Nesse contexto, este artigo apresenta uma análise detalhada do projeto, abordando sua importância estratégica, objetivos fundamentais e metodologias propostas, com foco na maximização do atendimento aos clientes das mineradoras, otimização da alocação de recursos e minimização dos custos operacionais. Além das dores logísticas tradicionais enfrentadas por empresas do setor de mineração, outras questões cruciais foram identificadas como motivadoras para a implementação deste projeto. A gestão desafiadora de dados simboliza um obstáculo significativo para a eficiência operacional, fator que dificulta o planejamento eficaz da cadeia logística.

&emsp;&emsp;Fica evidente que a busca por soluções alternativas e eficientes é de suma importância para superar esses desafios e aprimorar a eficiência operacional das mineradoras. Nesse sentido, a implementação de um algoritmo de grafos otimizado, adaptado especificamente para resolver o problema do aumento da performance logística na distribuição de minério de ferro, juntamente com a aplicação de um algoritmo clássico de fluxo máximo, ambos desenvolvidos em Java, emerge como uma resposta estratégica fornecida pela Valemax — equipe responsável pela implementação da solução em questão —. Idealmente, essa abordagem mitigará essas dificuldades, proporcionando uma solução eficaz para aprimorar a gestão da cadeia logística da indústria de mineração.

&emsp;&emsp;Portanto, a mineradora que adotar essa abordagem inovadora conseguirá enfrentar esses obstáculos não só poderá melhorar a performance logística, mas também fortalecerá sua posição como líder global na indústria de mineração e recursos naturais. Essa perspectiva ressalta a importância e a essência das motivações subjacentes a este projeto.

&emsp;&emsp;Salienta-se que este artigo não apenas registra a implementação prática do projeto, mas também tem uma finalidade acadêmica, sendo desenvolvido por alunos da graduação de Ciência da Computação do Instituto de Tecnologia e Liderança (Inteli), os quais integram a Valemax. Dessa forma, contribui para o enriquecimento do conhecimento na área de otimização logística e reforça o compromisso da instituição com a formação de profissionais qualificados e inovadores.

# Metodologia

&emsp;&emsp;O problema de fluxo máximo apresentado, questão central para a otimização da gestão de _supply chain_, consiste em encontrar a quantidade máxima de fluxo que pode ser enviado via uma rede, isso considerando as respectivas capacidades de cada aresta e, no caso específico, também ressaltando os possíveis estoques presentes em cada vértice do grafo em questão. No contexto da indústria mineradora, tal maximização do fluxo é crucial para a garantia de operações eficientes, redução de custos logísticos e melhoria na gestão de recursos.

&emsp;&emsp;No contexto do projeto, o problema de _supply chain_ de mineração apresentado pelo parceiro envolvia diversos desafios adicionais que extrapolavam as capacidades do algoritmo de Edmonds-Karp. A natureza multiproduto do cenário significa que a rede não apenas transporta um único tipo de produto, mas sim vários, cada um com suas próprias demandas, capacidades e restrições. Além disso, o aspecto multimodal refere-se à utilização de diferentes modos de transporte (como caminhões, trens e navios) dentro da mesma rede, cada um com suas próprias características e limitações.

&emsp;&emsp;Os *lead times* e as demandas variáveis ao longo do tempo adicionam outra camada de complexidade, pois exigem a consideração de dinâmicas temporais no fluxo da rede. O algoritmo de Edmonds-Karp, por outro lado, é tradicionalmente aplicado a problemas de fluxo máximo em redes estáticas, onde as capacidades das arestas são fixas e não há consideração para aspectos como estoques em vértices, variações de demanda ou diferentes modos de transporte.

&emsp;&emsp;Diante dessas limitações, foi necessário adotar uma abordagem simplificada, focando em aspectos mais gerenciáveis do problema, com uma pequena inclusão do aspecto temporal considerando os estoques nos nós. Isso permitiu a aplicação de técnicas de otimização mais tradicionais, como o próprio algoritmo de Edmonds-Karp, para obter *insights* valiosos e soluções práticas, mesmo que não abarcassem toda a complexidade do cenário real. A simplificação do escopo foi uma decisão estratégica para viabilizar a análise e otimização dentro das limitações metodológicas e computacionais disponíveis.

&emsp;&emsp;O estudo inicial foi conduzido com base em uma representação aninhada dos dados do fluxo de produtos da mineradora em formato ".XML". Os arquivos no formato _Extensible Markup Language_ oferecem a possibilidade de definir etiquetas para os dados, assim garantindo uma forma eficiente de integração para as informações em sistemas distintos. A representação dos dados consistia em algumas subdivisões que representam cada aspecto envolvido no fluxo da mineradora, englobando dados da cadeia produtiva, locais de tratamento e refino dos minérios, demandas de cada cliente, fluxo e movimentações através da rede, além de informações sobre produtos e suas respectivas propriedades. A análise, seleção e tratamento de cada um desses conjuntos considerou critérios que influenciariam de maneira significativa a eficiência e maximização dos produtos que chegam até seus respectivos clientes.

&emsp;&emsp;Após a extração e compreensão dos dados fornecidos, procedeu-se com a criação de um modelo computacional através da plataforma _neo4j_. A plataforma utiliza da teoria de grafos para estabelecer um banco de dados baseado em nós com atributos, tipos e respectivos relacionamentos via arestas, assim possibilitando a criação de uma rede complexa de informações que comporta o grafo para o problema de fluxo máximo a ser solucionado.

&emsp;&emsp;Através da criação do grafo, iniciou-se o desenvolvimento da estrutura de classes para cada componente essencial da rede de fluxo, tal processo foi realizado com a linguagem de programação _Java_, escolhida pela sua versatilidade, robustez e ampla adoção na implementação de sistemas complexos. As classes foram projetadas para representar cada elemento do grafo de forma modular e eficiente, permitindo uma manipulação precisa dos dados e facilitando a implementação de algoritmos de otimização.

&emsp;&emsp;Como etapa inicial do desenvolvimento da solução para o problema apresentado, deliberou-se pela implementação do algoritmo de fluxo máximo _Edmonds-Karp_. Essa escolha foi fundamentada em sua eficácia amplamente reconhecida em problemas de otimização em redes de fluxo. O algoritmo se destaca pela sua capacidade de encontrar o fluxo máximo em uma rede de forma eficiente, utilizando a técnica da busca em largura. Esta abordagem, por sua vez, resulta em caminhos mais curtos dentro do grafo, mas que ainda são capazes de maximizar o fluxo através das arestas.

&emsp;&emsp;O algoritmo de _Edmonds-Karp_ é uma variação do algoritmo de _Ford-Fulkerson_, sendo aprimorado para encontrar o caminho mais curto possível a cada iteração, garantindo assim uma complexidade temporal mais eficiente. Isso é especialmente crucial em problemas de grande escala, como o gerenciamento de _supply chain_ em uma indústria mineradora, onde a rapidez na resolução do problema é tão importante quanto a precisão da solução.

&emsp;&emsp;O funcionamento do algoritmo pode ser explicado de maneira simplificada: ele realiza uma busca em largura na rede de fluxo a partir do nó de origem (_source_) em direção ao nó de destino (_sink_), encontrando o caminho mais curto possível. Este caminho é então utilizado para enviar o máximo de fluxo possível através das arestas, de acordo com suas capacidades. Esse processo é repetido até que não seja mais possível encontrar caminhos adicionais, indicando que o fluxo máximo foi alcançado. Abaixo segue seu pseudocódigo que detalha seu funcionamento em cada etapa.

```
algoritmo EdmondsKarp é
    entrada:
        graph   (graph[v] deve ser a lista de arestas saindo do vértice v no
                 grafo original e suas respectivas arestas reversas construídas
                 que são usadas para o fluxo de retorno.
                 Cada aresta deve ter uma capacidade 'cap', fluxo, fonte 's' e sumidouro 't' 
                 como parâmetros, além de um ponteiro para a aresta reversa 'rev'.)
        s       (Vértice de origem)
        t       (Vértice de destino)
    saída:
        fluxo    (Valor do fluxo máximo)
    
    fluxo := 0   (Inicializa o fluxo como zero)
    repita
        (Executa uma busca em largura (bfs) para encontrar o caminho mais curto s-t.
         Usamos 'pred' para armazenar a aresta tomada para chegar a cada vértice,
         assim podemos recuperar o caminho depois)
        q := fila()
        q.enfileirar(s)
        pred := array(graph.length)
        enquanto não vazia(q) e pred[t] = null
            cur := q.desenfileirar()
            para cada Aresta e em graph[cur] faça
                se pred[e.t] = null e e.t ≠ s e e.cap > e.flow então
                    pred[e.t] := e
                    q.enfileirar(e.t)

        se não (pred[t] = null) então
            (Encontramos um caminho aumentativo.
             Veja quanto fluxo podemos enviar) 
            df := ∞
            para (e := pred[t]; e ≠ null; e := pred[e.s]) faça
                df := min(df, e.cap - e.flow)
            (E atualize as arestas com essa quantidade)
            para (e := pred[t]; e ≠ null; e := pred[e.s]) faça
                e.flow  := e.flow + df
                e.rev.flow := e.rev.flow - df
            fluxo := fluxo + df

    até pred[t] = null  (ou seja, até que nenhum caminho aumentativo seja encontrado)
    retorne fluxo
```
(CORMEN et al., 2012)

&emsp;&emsp;O pseudocódigo fornecido detalha os passos essenciais desse algoritmo, desde a inicialização até a atualização do fluxo ao longo do caminho encontrado. É importante ressaltar que, embora o algoritmo de _Edmonds-Karp_ seja eficaz em muitos cenários, sua aplicabilidade pode variar dependendo das características específicas da rede em questão. No entanto, para o contexto da indústria mineradora, suas propriedades são particularmente adequadas, dada a natureza complexa e interconectada das operações de transporte e distribuição de minérios.

&emsp;&emsp;A aplicação do algoritmo _Edmonds-Karp_, conforme apresentado em forma de pseudocódigo anteriormente, foi realizada por meio de uma implementação em _Java_. Inicialmente, foram criadas classes para representar os vértices e arestas do grafo, fornecendo uma estrutura organizada e modular para a manipulação dos elementos do grafo direcionado. Essa abordagem permitiu uma representação clara e eficiente do problema de fluxo máximo, facilitando o desenvolvimento e a compreensão do código.

&emsp;&emsp;Ademais, foi criada uma classe dedicada à realização da _breadth-first search_, fundamental para encontrar os caminhos mais curtos dentro do grafo. Essa classe foi projetada para percorrer o grafo de forma sistemática, identificando os caminhos possíveis entre o nó de origem e o nó de destino. A busca em largura desempenha um papel crucial no algoritmo de _Edmonds-Karp_, pois é responsável por encontrar o caminho mais curto possível em cada iteração, contribuindo assim para a eficiência do processo de maximização do fluxo.

&emsp;&emsp;Para a implementação do próprio algoritmo de _Edmonds-Karp_, foi desenvolvida uma classe específica, que aplicou a lógica descrita no pseudocódigo. Essa classe foi projetada para iterar sobre os caminhos encontrados pela busca em largura, atualizando o fluxo ao longo das arestas conforme a capacidade disponível. Para otimizar o desempenho do algoritmo, foram utilizadas estruturas de dados eficientes, como _HashMaps_, para armazenar informações sobre os nós e arestas do grafo. Essas implementações foram cuidadosamente projetadas visando não apenas a funcionalidade, mas também a eficiência e a escalabilidade do código. O uso de classes e estruturas de dados adequadas permitiu uma abordagem modular e flexível, facilitando futuras extensões e adaptações do sistema.

&emsp;&emsp;Além da implementação clássica do algoritmo, algumas modificações ainda em etapa de testes foram feitas para adaptar o _Edmonds-Karp_ para às particularidades do problema em questão. A principal alteração consistiu na incorporação da capacidade de estoque nos vértices do grafo. Isso permitiu que os nós intermediários também pudessem armazenar uma quantidade determinada de produtos em períodos específicos. Essa modificação foi implementada por meio da introdução de um novo parâmetro no grafo, representando a capacidade de estoque de cada nó.

&emsp;&emsp;Adicionalmente, foram introduzidas condições específicas para controlar o processo de estocagem e esvaziamento dos nós do grafo. Durante a busca por caminhos de fluxo máximo, foi incorporada uma lógica que permite a estocagem de produtos nos nós de destino, caso haja capacidade disponível e seja necessário para otimizar o fluxo. Da mesma forma, em períodos subsequentes, foi implementada uma rotina para esvaziar os estoques dos nós, a fim de garantir que os produtos armazenados fossem devidamente distribuídos ao longo do tempo.

&emsp;&emsp;Essas alterações visam melhorar a eficiência e a precisão do algoritmo, tornando-o mais adequado para lidar com as nuances do problema em questão. Ao considerar a capacidade de estoque dos nós do grafo, torna-se possível modelar de forma mais precisa o fluxo de produtos ao longo do tempo, levando em conta as restrições operacionais e logísticas da cadeia de suprimentos. Essa abordagem permite uma otimização mais refinada do processo de distribuição de produtos, contribuindo para a melhoria geral da gestão de _supply chain_ na indústria mineradora.

# Resultados obtidos

&emsp;&emsp;Para este estudo, procurou-se otimizar ao máximo o sistema de distribuição da empresa sobre seus minérios e pontos de distribuição. O cenário considerado envolve a região Sudeste, focando no produto AF40 (pelota), com um período de análise de 7 dias para simular uma semana. Foram feitas algumas simplificações, como a consideração de apenas um produto, a seleção de clientes da malha com demanda para o produto específico, baseado nos dados enviados pelo cliente e um sistema de estoque que prioriza o esvaziamento diário e o preenchimento sempre que houver oportunidade. Além disso, o volume transportado foi considerado apenas para o AF40.

&emsp;&emsp;Inicialmente, foi desenvolvido o algoritmo de Ford-Fulkerson como ferramenta de comparação com o algoritmo efetivamente implementado, o Edmonds-Karp. Este último foi especialmente adaptado para atender às exigências dos estoques e pontos de distribuição específicos da empresa.

&emsp;&emsp;O algoritmo de Ford-Fulkerson foca na busca de fluxo máximo e sua complexidade é O(fE), onde `f` representa o fluxo máximo encontrado e `E` é o número de arestas no grafo. Já o algoritmo de Edmonds-Karp, uma evolução do Ford-Fulkerson que utiliza busca em largura para encontrar caminhos aumentantes, é determinada por O(VE^2), considerando E o número de arestas e `V` o número de vértices do grafo. Após a execução de ambos os algoritmos, foi escolhido o Edmonds-Karp por sua rapidez e maior eficiência para as necessidades do projeto. O algoritmo selecionado aumentou o fluxo em aproximadamente 8% em relação ao Ford-Fulkerson, sendo capaz de processar um estoque de 201 mil, enquanto Ford-Fulkerson processou um estoque de 186 mil.

&emsp;&emsp;Tal diferença de processamento de dados deve-se às diferentes capacidades de produção e armazenamento das Usinas de Beneficiamento. Assim, quando a produção excede a capacidade de armazenamento, recorre-se aos estoques externos. Além disso, o algoritmo calcula a rota mais eficiente para a entrega dos minérios aos clientes, levando em consideração as demandas de cada um para o produto específico.

# Conclusão

&emsp;&emsp;O desenvolvimento de uma solução de alta performance utilizando grafos, com foco na otimização da cadeia logística na distribuição de minério de ferro, revelou resultados significativos e perspectivas promissoras para a indústria mineradora. Através da implementação dos algoritmos de Ford-Fulkerson e Edmonds-Karp, foi possível avaliar a eficácia e a eficiência de cada abordagem na maximização do fluxo de minério, levando em consideração as capacidades de produção e armazenamento das usinas de beneficiamento, bem como os requisitos de entrega dos clientes.

&emsp;&emsp;Uma das principais conclusões derivadas deste trabalho é a importância da adaptação de algoritmos clássicos para atender às necessidades específicas de cada aplicação. O aprimoramento do algoritmo de Edmonds-Karp para considerar capacidades de estoque e pontos de distribuição revelou-se essencial para a eficácia da solução proposta. Isso ressalta a relevância da flexibilidade e da personalização no desenvolvimento de soluções de otimização logística.

&emsp;&emsp;Assim, verifica-se a eficácia do algoritmo de Edmonds-Karp na maximização do fluxo, assegurando uma gestão mais eficiente dos recursos e uma distribuição mais precisa para atender às demandas dos clientes. Além disso, a abordagem modular adotada na implementação do algoritmo de Edmonds-Karp, juntamente com a modelagem precisa dos dados logísticos, proporcionou uma solução robusta e escalável para os desafios enfrentados por grandes empresas do setor de mineração.

&emsp;&emsp;Conclui-se, portanto, que para trabalhos futuros, seja interessante explorar ainda mais a aplicação de algoritmos de otimização em outros aspectos da cadeia logística, como a gestão de estoques, o planejamento de rotas e a previsão de demanda. Adicionalmente, seria vantajoso investigar a integração de técnicas de _machine learning_ e inteligência artificial para aprimorar ainda mais a precisão e eficiência das soluções desenvolvidas.

&emsp;&emsp;Consequentemente, infere-se que este projeto representa um avanço significativo na gestão de _supply chain_ na indústria mineradora. Pois, ao oferecer uma solução prática e eficaz para otimizar a distribuição de minério de ferro, ele demonstrou resultados promissores e perspectivas de aplicação em larga escala. Com o contínuo desenvolvimento e aprimoramento de técnicas e algoritmos de otimização logística, espera-se alcançar ainda mais progressos na gestão de _supply chain_ na indústria de mineração.

&emsp;&emsp;É importante ressaltar, no entanto, que o estudo apresenta algumas limitações que devem ser consideradas. As simplificações adotadas, como a consideração de um único produto e a generalização do volume transportado, podem impactar a aplicabilidade dos resultados em cenários mais complexos e diversificados. Além disso, a abordagem adotada para o gerenciamento de estoques, assumindo a necessidade de esvaziamento diário e preenchimento sempre que possível, pode não ser ideal para todas as situações na prática. Essas limitações sugerem a necessidade de futuras investigações para explorar abordagens mais flexíveis e adaptativas que possam lidar com a complexidade e a dinâmica do setor de mineração.

# Referências Bibliográficas

CORMEN, Thomas H. et al. Algoritmos: Teoria e Prática. 3. ed. Porto Alegre: Bookman, 2012.

IBRAM. Demanda por minério de ferro será de 3,5 bi de toneladas anuais em 2030. Disponível em: https://ibram.org.br/noticia/demanda-por-minerio-de-ferro-sera-de-35-bi-de-toneladas-anuais-em-2030/. Acesso em: 6 mar. 2024.

Luo, J.; Sallinen, S.; Ripeanu, M. Maximum Flow on Highly Dynamic Graphs. University of British Columbia, Vancouver, Canada. ArXiv, 2023. Disponível em: https://arxiv.org/abs/2311.07016. Acesso em: 24 fev. 2024.

McKinsey & Company. What is supply chain. 2022. Disponível em: https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-supply-chain. Acesso em: 18 fev. 2024.

Neo4j Developer. GDS Supply Chain Pathfinding Optimization. 2018. Disponível em: https://neo4j.com/developer-blog/gds-supply-chain-pathfinding-optimization/. Acesso em: 21 fev. 2024.
