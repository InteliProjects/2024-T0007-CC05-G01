# Complexidade e corretude do algoritmo

## Complexidade do Algoritmo

### Introdução à Complexidade e Sua Importância

&emsp;&emsp;A **complexidade de um algoritmo** refere-se à quantidade de recursos computacionais que o algoritmo consome à medida que o tamanho de sua entrada aumenta. Geralmente, esses recursos são o tempo (complexidade de tempo) e a memória (complexidade de espaço). A complexidade é expressa usando a notação Big O, que descreve o limite superior do crescimento do algoritmo, ajudando a prever seu comportamento em cenários de pior caso. A análise de complexidade é crucial para comparar algoritmos, otimizar o desempenho e garantir a escalabilidade das aplicações.

### O Algoritmo Edmonds-Karp

&emsp;&emsp;O **algoritmo Edmonds-Karp** é uma implementação específica do algoritmo de Ford-Fulkerson para encontrar o fluxo máximo em uma rede. O algoritmo resolve o problema de fluxo máximo iterativamente, usando a busca em largura (BFS) para encontrar o caminho de aumento mais curto no grafo residual. A escolha do caminho de aumento mais curto garante a terminação do algoritmo em tempo polinomial, diferenciando-o de outras implementações de Ford-Fulkerson que podem ter desempenho exponencial em alguns casos.

### Motivação do Algoritmo

&emsp;&emsp;A motivação por trás do uso do algoritmo Edmonds-Karp é sua eficiência e confiabilidade para encontrar o fluxo máximo em redes. Ele é especialmente útil em aplicações como redes de transporte, onde é necessário maximizar o *throughput* (vazão) ou minimizar o custo de operação, e em problemas de *matching*, onde se busca a maior correspondência possível entre elementos de dois conjuntos.

### Alterações do Valemax no Algoritmo

&emsp;&emsp;O grupo implementou alterações no algoritmo Edmonds-Karp para incluir a gestão de estoques em vértices específicos da rede. Essas alterações permitem que certos nós acumulem ou liberem produtos (representados por um aumento ou diminuição do fluxo) em períodos específicos. Essa funcionalidade é particularmente útil para modelar os problemas de logística e cadeia de suprimentos da Vale, que envolvem o armazenamento e transporte de minérios e outros produtos.

### Análise de Complexidade do Algoritmo Implementado

#### Análise Passo a Passo Principal do Código

&emsp;&emsp;O código passa por várias fases principais:
1. **Leitura de Dados**: A complexidade é linear $O(E + V)$ em relação ao número de arestas $E$ e vértices $V$ devido à leitura dos dados do grafo e dos estoques.
2. **Execução de Edmonds-Karp com Estoque**: A complexidade principal é 
$ O(V \cdot E^2)$ 
devido ao uso da busca em largura (BFS) repetida para encontrar caminhos de aumento.

#### Análise Matemática da Complexidade

- **Geral**: A complexidade geral permanece $O(V \cdot E^2)$, onde $V$ é o número de vértices e $E$ o número de arestas. As operações adicionais para gerenciar estoques são realizadas em um número constante de vezes por aresta visitada, não alterando a complexidade assintótica.

- **Pior Caso**: Ocorre quando o algoritmo precisa iterar o máximo possível de vezes para encontrar o caminho de aumento, mantendo-se em $O(V \cdot E^2)$.
  
- **Melhor Caso**: Se um caminho de aumento não é encontrado rapidamente, a complexidade é dominada pela construção inicial do grafo e leitura dos dados, o que é $O(E + V)$.

&emsp;&emsp;Para justificar a complexidade de $O(V \cdot E^2)$ na execução do algoritmo Edmonds-Karp com gestão de estoques, será detalhado o processo passo a passo de maneira simplificada:

1. **Inicialização**: O algoritmo começa com um fluxo inicial de 0 e constrói um grafo residual baseado nas capacidades das arestas do grafo original.

2. **Busca em Largura (BFS)**: Em cada iteração, o Edmonds-Karp utiliza a busca em largura para encontrar o caminho de aumento mais curto do vértice fonte ao sumidouro no grafo residual. A busca em largura tem uma complexidade de $O(E)$, onde $E$ é o número de arestas.

3. **Atualização do Fluxo**: Após encontrar um caminho de aumento, o algoritmo atualiza o fluxo ao longo desse caminho e modifica o grafo residual, reduzindo as capacidades das arestas no caminho de aumento e adicionando arestas reversas para refletir a possibilidade de "desfazer" parte do fluxo se necessário. Essa etapa tem uma complexidade de $O(V)$ no pior caso, pois pode envolver a atualização de uma aresta por vértice no caminho.

4. **Repetição**: O algoritmo repete as etapas 2 e 3 até que não seja possível encontrar mais caminhos de aumento, o que significa que o fluxo máximo foi alcançado.

5. **Gestão de Estoques**: Durante cada iteração, ao ajustar o fluxo, o algoritmo também verifica e manipula o estoque nos vértices conforme necessário. Essa manipulação é feita em tempo constante por aresta visitada e não altera a complexidade assintótica geral do algoritmo.

**Justificativa da Complexidade $O(V \cdot E^2)$**:
- A busca em largura (BFS) é $O(E)$, e cada aresta pode ser atualizada até $V$ vezes no pior caso (uma vez por cada vértice no caminho de aumento), pois o caminho de aumento mais curto garante que não aumentaremos indevidamente a contagem de arestas atualizadas em uma única iteração.
- Dado que o algoritmo pode realizar uma busca em largura até $O(E)$ vezes (uma vez para cada atualização de aresta no pior caso), a complexidade total torna-se $O(V \cdot E^2)$.

### Exemplo de Execução do Algoritmo

&emsp;&emsp;Vamos considerar uma rede simples para ilustrar como o Edmonds-Karp modificado funciona:

- **Entrada**: Uma rede com 4 vértices (incluindo fonte e sumidouro), e cada vértice, exceto a fonte e o sumidouro, tem capacidade de estoque. Existem arestas conectando a fonte ao vértice 1, vértice 1 ao vértice 2, e vértice 2 ao sumidouro, cada uma com capacidade de fluxo.

- **Processo**: O algoritmo começa encontrando um caminho de aumento usando BFS. Suponha que o caminho da fonte ao sumidouro através dos vértices 1 e 2 seja encontrado. O algoritmo calcula o fluxo máximo através deste caminho e atualiza as capacidades de arestas no grafo residual.

- **Estoque**: Durante o processo, se o algoritmo está num período de armazenamento, ele tentará armazenar produtos no vértice 1 ou 2, diminuindo o fluxo nessa aresta e aumentando o estoque no vértice correspondente.

- **Iteração**: O processo se repete para cada período, alternando entre armazenamento e não armazenamento, até que nenhum caminho de aumento possa ser mais encontrado, indicando que o fluxo máximo foi alcançado.

Este exemplo simplificado mostra como o algoritmo Edmonds-Karp modificado opera, incorporando lógicas específicas de gestão de estoques enquanto busca o fluxo máximo na rede da Vale.

## Corretude do Algoritmo

### Introdução à Corretude e Sua Importância

&emsp;&emsp;A **corretude** de um algoritmo é a propriedade que assegura que o algoritmo funciona conforme especificado, ou seja, para todas as entradas válidas, ele produz a saída correta. A corretude é essencial para garantir que os algoritmos realizem suas tarefas previstas de maneira confiável, sendo fundamental na ciência da computação teórica e na engenharia de software, especialmente em aplicações críticas onde falhas podem ter consequências graves.

### O que é Invariante de Laço

&emsp;&emsp;Um **invariante de laço** é uma propriedade ou condição que se mantém verdadeira antes e depois de cada iteração de um laço (loop) durante a execução de um algoritmo. Invariantes são cruciais para a análise de corretude, pois ajudam a provar que o algoritmo respeita certas condições esperadas ao longo de sua execução, contribuindo para garantir que o algoritmo alcance o resultado desejado.

### Invariante do Laço Principal do Algoritmo Edmonds-Karp

&emsp;&emsp;No algoritmo de Edmonds-Karp, um invariante de laço fundamental é que **o fluxo na rede ao final de cada iteração é o máximo possível dado o grafo residual atual**. Isso significa que, para o grafo residual construído a partir das capacidades remanescentes das arestas, não há outro caminho de aumento que possa ser encontrado para aumentar o fluxo sem violar as restrições de capacidade das arestas.

**Justificativa**: A justificativa para este invariante baseia-se no fato de que o algoritmo só atualiza o fluxo quando encontra um caminho de aumento, o qual é definido como um caminho da fonte ao sumidouro no grafo residual onde todas as arestas têm capacidade positiva. Ao ajustar o fluxo ao longo deste caminho pelo valor mínimo de capacidade encontrada nele (o gargalo), maximiza-se o fluxo até esse ponto. Como o algoritmo continua a buscar caminhos de aumento até que nenhum possa ser encontrado, garante-se que o fluxo não pode ser aumentado sem exceder as capacidades das arestas do grafo residual.

### Demonstração Formal da Corretude do Algoritmo

**Base da Indução**: Inicialmente, antes de qualquer iteração do algoritmo, o fluxo é zero, o que é trivialmente o fluxo máximo possível para o grafo residual inicial, pois não foram feitas modificações. Assim, o invariante é verdadeiro.

**Passo de Indução**: Suponha que, após $k$ iterações do algoritmo (onde $k \geq 0$), o fluxo na rede seja máximo para o grafo residual atual. É preciso mostrar que, após a $(k+1)$-ésima iteração, o fluxo ainda é máximo para o novo grafo residual.

&emsp;&emsp;Na $(k+1)$-ésima iteração, o algoritmo encontra um caminho de aumento e ajusta o fluxo ao longo desse caminho pelo valor do gargalo. Esse ajuste é feito reduzindo a capacidade das arestas no caminho de aumento e aumentando a capacidade das arestas reversas correspondentes no grafo residual. Isso reflete a nova situação em que o fluxo máximo possível, considerando as restrições de capacidade, foi alcançado até este ponto.

&emsp;&emsp;Se existisse um caminho de aumento que pudesse aumentar ainda mais o fluxo sem violar as capacidades das arestas, isso contradiria a suposição de que o fluxo era máximo após $k$ iterações. Portanto, após a $(k+1)$-ésima iteração, não há caminho de aumento disponível sem exceder as capacidades, o que significa que o fluxo é máximo para o grafo residual atual. Assim, o invariante se mantém.

&emsp;&emsp;Para incluir a gestão de estoques na sua demonstração de corretude do Algoritmo Edmonds-Karp modificado para o caso da Vale, é detalhado a seguir como o estoque interfere na lógica do algoritmo e é fornecida a demonstração para abordar essas mudanças.

### Demonstração de Corretude com a Gestão de Estoques

#### Variáveis e Condições Adicionais:
- **d**: a diferença calculada entre o gargalo $c$ e a capacidade de estoque em um vértice específico, influenciando o fluxo entre vértices.
- **e(v)**: o estoque disponível no vértice $v$ antes da iteração.
- **s(v)**: a capacidade de estoque do vértice $v$.

#### Simplificação do Código do Algoritmo com Gestão de Estoques:
Considerando $f$ como o fluxo máximo acumulado, $g$ o aumento de fluxo em uma iteração, e $d$ a diferença ajustada por estoque:
1. Inicialize $f = 0$, $g = 0$, e para cada vértice $v$, $e(v) = 0$.
2. Para cada período, faça:
   1. Enquanto existir um caminho de aumento, faça:
   2. Encontre o gargalo $c$ no caminho.
   3. Se o vértice atual tiver capacidade de estoque $s(v)$ e estoque disponível $e(v)$, ajuste $d$ e $g$ conforme a capacidade de estocagem.
   4. Atualize $g = c$ e então $f = f + g$, considerando ajustes de $d$.
   5. Se o estoque for utilizado ou modificado, ajuste $e(v)$ conforme a operação.
3. Repita para o próximo período após resetar variáveis se necessário.

#### Indução Matemática Incluindo Gestão de Estoques:
**Passo Básico**: Com $f = 0$, $g = 0$, e $e(v) = 0$ para todos $v$, a condição $f ≥ g$ é trivialmente verdadeira.

**Hipótese de Indução**: Suponha que $f_k ≥ g_k$ e o estoque $e(v)$ é corretamente gerenciado até a iteração/ período $k$.

**Passo de Indução**: Mostrar que $f_{k+1} ≥ g_{k+1}$ e $e(v)$ é corretamente ajustado em $k+1$.

Na iteração $k+1$:
- Quando $g_{k+1} = c$ é calculado, o ajuste por $d$ baseado em $e(v)$ e $s(v)$ pode alterar $g$.
- $f_{k+1} = f_k + g_{k+1}$, considerando o estoque antes e depois da iteração, assim como a adição ou subtração do estoque em $e(v)$.

&emsp;&emsp;Demonstrando que, com a inclusão de estoques, $f_{k+1} ≥ g_{k+1}$ se mantém e que $e(v)$ reflete corretamente as mudanças de estoque:
- **Com Estoque**: Se um vértice armazena parte do fluxo como estoque, $g_{k+1}$ pode ser reduzido pela quantidade armazenada, mas essa quantidade é "recuperada" em futuras iterações quando o estoque é utilizado, assegurando que o fluxo total $f$ ainda represente o máximo possível.
- **Sem Estoque Adicional**: Se não há mudança no estoque ou o estoque é esgotado, a lógica original de Edmonds-Karp é aplicada, e $f_{k+1}$ ≥ $g_{k+1}$.

#### Conclusão:
&emsp;&emsp;Incorporando a gestão de estoques na demonstração de corretude do Algoritmo Edmonds-Karp modificado, demonstra-se que, apesar das complexidades adicionais, o algoritmo mantém sua corretude. O fluxo máximo encontrado pelo algoritmo, ajustado pela gestão de estoques nos vértices, continua sendo o máximo possível, e o estoque é gerenciado de maneira a complementar essa busca pelo fluxo máximo. Isso garante que, ao final do algoritmo, tanto o fluxo quanto os estoques são otimizados dentro das restrições da rede.
