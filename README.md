<table>
<tr>
<td>
<a href= "https://vale.com/pt/"><img src="https://upload.wikimedia.org/wikipedia/pt/c/cc/Logotipo_Vale.svg" alt="Vale" border="0" width="60%"></a>
</td>
<td><a href= "https://www.inteli.edu.br/"><img src="./inteli-logo.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width="40%"></a>
</td>
</tr>
</table>

# Introdução

O projeto desenvolvido pelo grupo ValeMax tem como objetivo melhorar a logística de distribuição do minério de ferro no sudeste pela Vale. Atráves da utilização de algoritmos de grafos que permitem a minimizar o tempo de entrega e aumentar a eficiência dos percursos.

# Projeto: Aumento da performance logística na distribuição de minério de ferro

# Grupo: _ValeMax_

# Integrantes:

- <a href="https://www.linkedin.com/in/antoniobfm/">Antônio Moraes</a>
- <a href="https://www.linkedin.com/in/felipe-braga-69607126a/">Felipe Braga</a>
- <a href="https://www.linkedin.com/in/isabelle-santos-507067204/">Isabelle Santos</a>
- <a href="https://www.linkedin.com/in/marina-ladeira-867159269/">Marina Ladeira</a>
- <a href="https://www.linkedin.com/in/mauro-das-chagas-junior/">Mauro das Chagas Junior</a>
- <a href="https://www.linkedin.com/in/vitto-mazeto/">Vitto Mazeto</a>

# Descrição

O projeto desenvolvido pelo grupo ValeMax, busca uma solução para otimizar a logística de distribuição de minério de ferro. Este desafio envolve a complexidade de gerenciar uma ampla rede logística, exigindo soluções que não apenas melhorem as operações atuais mas também se adaptem à mudanças futuras no volume de demanda e pontos de distribuição.

A estratégia adotada envolve a modelagem de dados e a construção de um grafo representativo da rede logística, incluindo todos os pontos críticos como minas, ferrovias e portos. Os algoritmos de roteirização são então aplicados para encontrar os caminhos mais eficientes e representá-los por um grafo. Este sistema permite uma tomada de decisão mais ágil e informada, resultando em operações mais sustentáveis e eficazes.

# Código

Esta é a pasta para o código dos componentes de software desenvolvidos pelo grupo.

Para cada novo componente de software, crie uma sub-pasta aqui.

# Configuração de desenvolvimento

Para baixar e executar o código deste projeto, siga os passos abaixo:

Clone o repositório usando:

```
git clone git@github.com:2024M5T7-Inteli/g1.git
```

## Rodando o Backend da aplicação

### Requisitos

- **JDK (Java Development Kit):** Certifique-se de ter o JDK instalado em sua máquina. Você pode baixar e instalar o _JDK_ mais recente a partir do site oficial da [Oracle](https://www.oracle.com/br/java/technologies/downloads/).
- **Apache Maven:** _Maven_ é uma ferramenta de automação de compilação utilizada principalmente para projetos Java. Você pode instalar o _Maven_ baixando-o do [site oficial](https://maven.apache.org/download.cgi) e seguindo as instruções de instalação. Lembre-se de definir o _Maven_ nas variáveis ambiente de seu sistema operacional como `M2_HOME` e adicionar o caminho para a pasta `bin` na variável `Path`.
- **(Recomendação) Extensões para desenvolvimento em Java:** Se estiver utilizando a _IDE Visual Studio Code_ é recomendado fazer a instalação das extensões de desenvolvimento em Java, sendo elas: _Debugger for Java, Extension Pack for Java, Language Support for Java(TM) by Red Hat, Maven for Java, Project Manager for Java, Test Runner for Java_. A aplicação roda sem tais extensões, entretanto elas facilitam o desenvolvimento e a compreensão do código Java feito para o backend.

<br>

#### Rodando o backend através das extensões do Java

1. No repositório clonado, entre no arquivo `ValemaxApplication.java`. Tal aquivo pode ser encontrado seguindo a seguinte estrutura de pastas: `g1/codigo/backend/valemax/src/main/java/com/projeto/valemax/ValemaxApplication.java`
2. No arquivo, utilize o botão no canto superior direito que indica a ação de `Run Java`. Ao clicar neste botão, a aplicação será compilada e executada. Isso permitirá que você veja os resultados das suas modificações em tempo real. Certifique-se de verificar o console de saída para quaisquer mensagens de erro ou informações relevantes sobre o processo de execução.

#### Rodando o backend através do terminal

1. No repositório clonado, vá para a pasta do _backend_ através desse comando no terminal
   ```
   cd ./codigo/backend/valemax/src/main/java/com/projeto/valemax
   ```
2. Dentro desse diretório, execute o seguinte comando para rodar o _backend_ do projeto:
   ```
   mvn spring-boot:run
   ```
3. O terminal exibirá o processamento e, uma vez que o backend estiver totalmente carregado e em execução, você verá mensagens indicando que o servidor está pronto para aceitar conexões. Certifique-se de observar qualquer mensagem de erro ou aviso que possa surgir durante o processo de inicialização.

## Rodando o Frontend da aplicação

### Requisitos

- _Node.js:_ Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixar e instalar a versão mais recente do Node.js a partir do [site oficial](https://nodejs.org/en/download).
- _npm (Node Package Manager):_ npm é o gerenciador de pacotes padrão para o ecossistema Node.js. Ele geralmente é instalado automaticamente junto com o Node.js.

<br>

1. No repositório clonado, vá para a pasta do frontend através desse comando no terminal

   ```bash
   cd ./codigo/frontend/valemax/
   ```

2. Dentro desse diretório, execute o seguinte comando para instalar as dependências necessárias do projeto:

   ```bash
   npm install
   ```

3. Após a conclusão da instalação das dependências, você pode iniciar o servidor de desenvolvimento do Next.js executando o seguinte

   ```bash
   npm run dev
   ```

4. O frontend estará acessível através do endereço: http://localhost:3000.

<br>

&emsp;&emsp;Após a realização desses passos, tanto seu backend quanto seu frontend estarão funcionando e a aplicação web estará rodando.

# Releases

- SPRINT1: 15/02/2024 - Entendimento do problema, negócios e experiência do usuário
- SPRINT2: 29/02/2024 - Modelagem de classes, versão inicial do artigo e definição de algoritmos
- SPRINT3: 14/03/2024 Desenvolvimento protótipo inicial da interface e implementação de algoritmos e testes iniciais
- SPRINT4: 28/03/2024 - Análise de complexidade e aplicação integrada (front-end e algoritmos)
- SPRINT5: 11/04/2024 - Refinamento da aplicação e artigo completo

## 📋 Licença/License

<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">

<a property="dct:title" rel="cc:attributionURL">Grupo</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName">Inteli, [Antônio Moraes](https://www.linkedin.com/in/antoniobfm/), [Felipe Braga](https://www.linkedin.com/in/felipe-braga-69607126a/), [Isabelle Santos](https://www.linkedin.com/in/isabelle-santos-507067204/), [Marina Ladeira](https://www.linkedin.com/in/marina-ladeira-867159269/), [Mauro das Chagas Junior](https://www.linkedin.com/in/mauro-das-chagas-junior/), [Vitto Mazeto](https://www.linkedin.com/in/vitto-mazeto/)</a> is licensed under <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International</a>.</p>
