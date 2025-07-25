# Meu Contador React

Este é um projeto simples em React que demonstra a criação e integração de componentes básicos: um contador funcional e botões com cores personalizadas. O projeto foi criado utilizando o Create React App.

## Funcionalidades

* **Contador Simples**: Um contador que permite incrementar um valor a cada clique.
* **Botões Coloridos**: Componentes de botão reutilizáveis que aceitam uma propriedade de cor e texto para personalização.

## Tecnologias Utilizadas

* **React**: Biblioteca JavaScript para construção de interfaces de usuário.
* **Create React App**: Ferramenta oficial para configurar um ambiente de desenvolvimento React moderno.

## Estrutura do Projeto

* `src/App.js`: Componente principal que integra o Contador e os Botões Coloridos.
* `src/Contador.js`: Componente funcional que implementa a lógica do contador utilizando `useState`.
* `src/BotaoColorido.js`: Componente funcional para criar botões com estilos de cor personalizados.
* `public/index.html`: O arquivo HTML base onde o aplicativo React é injetado.

## Como Executar o Projeto Localmente

Siga estas instruções para configurar e rodar o projeto em sua máquina:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) e o [npm](https://www.npmjs.com/) (ou [Yarn](https://yarnpkg.com/)) instalados em seu sistema.

### Passos

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/SEU_USUARIO/Meu-Contador-React.git](https://github.com/SEU_USUARIO/Meu-Contador-React.git)
    ```
    (Substitua `SEU_USUARIO` pelo seu nome de usuário no GitHub e `Meu-Contador-React` pelo nome do seu repositório, se for diferente).

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd Meu-Contador-React
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm start
    # ou
    yarn start
    ```

    O aplicativo será aberto automaticamente no seu navegador padrão em [http://localhost:3000](http://localhost:3000). A página será recarregada automaticamente quando você fizer alterações no código.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

* ### `npm start`
    Executa o aplicativo no modo de desenvolvimento. Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no seu navegador. A página será recarregada quando você fizer alterações.

* ### `npm test`
    Inicia o executor de testes no modo de observação interativo.

* ### `npm run build`
    Compila o aplicativo para produção na pasta `build`. Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

* ### `npm run eject`
    **Observação: Esta é uma operação unidirecional. Depois de `ejetar`, você não pode voltar atrás!**
    Se não estiver satisfeito com a ferramenta de compilação e as opções de configuração, você pode `ejetar` a qualquer momento. Isso copiará todos os arquivos de configuração e dependências diretamente para o seu projeto para que você tenha controle total.

## Saiba Mais

Você pode aprender mais sobre o React e o Create React App nas documentações oficiais:

* [Documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
* [Documentação do React](https://reactjs.org/)

---
 
 
