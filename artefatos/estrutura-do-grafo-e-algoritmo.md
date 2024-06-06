# Estrutura do Grafo e Algoritmo

## 1. Introdução

&emsp;&emsp;Este documento visa fornecer uma visão abrangente sobre o desenvolvimento dos algoritmos relacionados ao projeto e artefato em questão. O principal objetivo é apresentar uma explicação clara do funcionamento dos algoritmos, suas implementações e as modificações feitas para atender às demandas do problema de fluxo máximo apresentado pelo cliente. Ademais, serão discutidos os motivos por trás dessas modificações, e dados os devidos destaques para como contribuem para uma solução mais eficiente.

## 2. Estrutura de pastas

&emsp;&emsp;Com intuito de organizar os algoritmos desenvolvidos para a solução, dentro da pasta _backend/valemax/src/main/java/com/projeto/valemax/_ do projeto, foi criada uma pasta _Algorithms_, que organiza toda a estrutura de pastas que envolvem os algoritmos utilizados, abaixo segue uma explicação sobre cada uma.

### 2.1. dataTests

&emsp;&emsp;A pasta _dataTests_ contempla todos os arquivos ".csv" utilizados para a realização dos testes para a construção da estrutura do grafo. Dentro da pasta, existem arquivos nomeados como "test" seguido de um número, tais arquivos contém estruturas de grafos mais simples e com os fluxos máximos já conhecidos, assim possibilitando que a verificação da acuracidade dos algoritmos implementados possa ser feita via testes unitários.

&emsp;&emsp;Ademais, tal pasta também contempla o arquivo "valeData.csv" que contem os dados para a criação do grafo adquirido após o tratamento dos dados fornecidos pelo cliente do projeto. Tais dados passaram por adaptações para poderem ser lidos pelos algoritmos implementados. A principal alteração foi a identificação dos nós que apenas funcionam como fontes e nunca como destinos, sendo eles ligados a uma "superfonte", enquanto os que são sempre destinos e nunca fontes foram ligados a um nó "supersorvedouro" para garantir a otimização do fluxo máximo. Além disso, o intervalo numérico dos _ids_ dos nós foram alterados para ficarem entre 0 e 209, assim totalizando 210 nós na rede.

&emsp;&emsp;Devido a dificuldades técnicas na leitura de arquivos ".csv" pelo JUnit, a equipe decidiu, em acordo com o orientador, realizar os testes do algoritmo de fluxo máximo com estocagem diretamente na _main_. Esta abordagem, mais alinhada com os dados reais do projeto, assegura a acurácia e a eficiência do algoritmo. Posteriormente, planeja-se modificar o sistema para permitir testes reais utilizando arquivos XML fornecidos pelo parceiro, visando uma integração ainda mais precisa com os processos do parceiro.

### 2.2. EdmondskarpClassicImplementation

&emsp;&emsp;Na pasta _EdmondskarpClassic_, encontra-se a implementação clássica do algoritmo _Edmonds-Karp_. Este algoritmo é uma variação do algoritmo de _Ford-Fulkerson_, que utiliza uma busca em largura (BFS) para encontrar o caminho aumentante que maximiza o fluxo de uma rede. A implementação clássica do algoritmo de _Edmonds-Karp_ foi escolhida devido à sua eficiência e velocidade para encontrar caminhos até o fluxo máximo.

### 2.3. EdmondskarpStockmodeling

&emsp;&emsp;Na pasta _EdmondskarpStockmodeling_, encontra-se uma implementação modificada do algortmo _Edmonds-Karp_. Tais modificações foram feitas com o intuito de adaptar o algoritmo para o problema específico a ser solucionado. As principais modificações feitas estão relacionadas com a implementação da maximização por períodos, além da possibilidade de estoque de produtos nos vértices do grafo.

## 3. Modelagem de estoque no algoritmo clássico

&emsp;&emsp;O algoritmo clássico foi modificado para realizar a otimização de fluxo mediante um período passado como parâmetro para o método, tais períodos simulam a passagem de tempo pelo qual o fluxo máximo será definido. Tal alteração foi feita pensando na lógica de funcionamento da estocagem de produtos, já que adicionar a possibilidade de estoque nos vértices pressupõe que eles precisem ser esvaziados posteriormente, sendo assim, tal modificação foi alterada visando aproximar o algoritmo da situação real do projeto. Ademais, precisamente foram adicionados propriedades e métodos dedicados para ser possível estocar parte do fluxo nos vértices do grafo, assim fazendo com que seja possível aumentar a quantidade de produtos que saem dos nós de origem.