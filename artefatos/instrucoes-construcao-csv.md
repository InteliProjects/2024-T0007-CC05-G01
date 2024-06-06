# Instruções para a construção da estrutura do _CSV_ baseada no _XML_

## 1. Introdução

&emsp;&emsp;Com intuito de maximizar o desenvolvimento do algoritmo de maximização de fluxo e todas as suas modificações necessárias para garantir a adequação ao problema apresentado pelo cliente, tomou-se a decisão de fazer com que a aplicação web e o algoritmo sejam adaptados para a leitura de uma estrutura específica dos dados disponibilizados pelo cliente em formato _CSV_. Abaixo, seguem instruções sobre como construir tal arquivo baseado nos dados disponibilizados.

## 2. Construção do _CSV_ baseado no _XML_

&emsp;&emsp;O primeiro passo para a adaptação do _XML_ para a estrutura do _CSV_ é sua conversão para algum formato que permita sua manipulação com maior facilidade. O processo seguido nesse pipeline foi sua conversão para o formato _JSON_ mantendo a hierarquia dos dados e seus relacionamentos. É válido ressaltar que com uma ferramenta apropriada de manipulação de _XML_, tal processo pode não precisa ser feito, podendo seguir com o formato original.

&emsp;&emsp;A partir da estrutura do _JSON_ um _CSV_ foi criado para cada uma das partes dos dados, visando percorrer as informações até seu maior nível de profundidade dos relacionamentos originais do _XML_.

&emsp;&emsp;Vários _CSVs_ serão criados a partir desse pipeline, logo apenas os arquivos relacionados com a produção de materiais e seus trechos de transporte deverão ser obtidos, tais dados podem ser obtidos a partir das informações de **Cadeia** e **Fluxo** presentes na hierarquia original do _XML_.

&emsp;&emsp;A partir desses dados de **Cadeia** e **Fluxo** as informações relevantes podem ser cruzadas a partir das colunas de _idElo_, que são as informações que permitem com que as informações sejam relacionadas entre diferentes hierarquias da estrutura original dos dados.

&emsp;&emsp;Com isso, as colunas da tabela que devem ser montadas a partir desses dados são, nessa ordem: idEloCadeiaProducaoOrigem,descricao, categorizacaoOrigem, capacidadeArmMaxOrigem, idEloCadeiaProducaoDestino, descricaoDestino, categorizacaoDestino, capacidadeArmMaxDestino, codigoSubModal, codigoProduto, pesoMedio.

&emsp;&emsp;O tópico seguinte apresenta uma explicação detalhada do que cada uma dessas informações significa e como serão usadas dentro da aplicação para rodar o algoritmo e a exibição dos dados.

## 3. Explicação da estrutura final do _CSV_ de dados

&emsp;&emsp;Os dados são apresentados através das seguintes colunas com suas respectivas descrições:

- **Identificação do Elo na Cadeia de Produção de Origem:** identificação do ponto de partida da conexão na rede.  
- **Descrição:** representação textual do ponto de partida conforme indicado na tabela.  
- **Categorização da Origem:** classificação do ponto de partida conforme especificado na tabela, caracterizando esses pontos.  
- **Capacidade Máxima de Armazenamento na Origem:** limite máximo de armazenamento no ponto de partida. Caso seja 0, indica falta de capacidade de armazenamento.  
- **Identificação do Elo na Cadeia de Produção de Destino:** identificação do ponto de chegada da conexão na rede.  
- **Descrição do Destino:** representação textual do ponto de chegada conforme indicado na tabela.  
- **Categorização do Destino:** classificação do ponto de chegada conforme especificado na tabela, caracterizando esses pontos.  
- **Capacidade Máxima de Armazenamento no Destino:** limite máximo de armazenamento no ponto de chegada. Caso seja 0, indica falta de capacidade de armazenamento.  
- **Código do Submodal:** código que identifica o tipo de submodal usado para enviar produtos por uma rota (rota = ponto de partida -> ponto de chegada).  
- **Peso Médio:** peso médio de material que um determinado submodal pode transportar.
- **Código do Produto:** irrelevante, apenas indica o produto que será trabalhado nesta situação; todos os valores são iguais nesta coluna.  

### 3.1. Utilização dos dados:

&emsp;&emsp;As identificações dos Elos na Cadeia de Produção de Origem e de Destino serão utilizadas para determinar os pontos na rede de transporte, cada um com seus atributos (conforme descrito anteriormente). Se um ponto de partida e um ponto de chegada estiverem na mesma linha da tabela, isso indica uma conexão entre eles, ou seja, uma aresta para o grafo. As colunas de categorização e descrição são usadas como atributos de filtragem e visualização dos dados no lado do _frontend_. O código do Submodal é usado para definir o tipo de submodal usado em uma rota, estando na mesma linha de sua respectiva rota. Ele possui o atributo peso médio, que varia para cada tipo de submodal e é utilizado para definir o peso das arestas na estrutura do grafo.