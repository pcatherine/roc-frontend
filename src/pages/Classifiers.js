import React from "react";
import Layout from "../components/Layout/Layout";

export default class Classifiers extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Classificadores</h2>
        <p>Foram utilizados 5 classificadores neste trabalho: Logistic Regression, Naïve Bayes, Random Forest, Stochastic Gradient Descent, Support Vector Classifier. Suas  funcionalidades estão resumidas nesta seção.</p>
        
        <h4 className="pt-4">1. Logistic Regression</h4>
        <p>Logistic regression, ou regressão logística, é uma técnica estatística que permite modelar a probabilidade, a partir de um conjunto de fatores, utilizando uma séries variáveis. Ela é uma generalização da regressão linear, cujo modelo matemático  relaciona uma variável “x” com uma variável “y” através de uma condição “h”. Dada uma sequência de pontos (x,y) a função define uma reta onde há uma mínima distância entre todos os pontos, dada por:</p>
        <center>
          <img src={require("../assets/f1.png")} alt="Formula 1"
            style={{ height: "25px" }} />
          <div><small>(1)</small></div>
        </center>
        <p>Essa minimização é feita através da média dos erros ao quadrado, onde o erro é a distância mínima entre cada ponto e a reta. Assim podemos definir a regressão logística como sendo: </p>
        <center>
          <img src={require("../assets/f2.png")} alt="Formula 2"
            style={{ height: "25px" }} />
          <div><small>(2)</small></div>
        </center>
        <center>
          <img src={require("../assets/f3.png")} alt="Formula 3"
            style={{ height: "50px" }} />
          <div><small>(3)</small></div>
        </center>
        <p>Onde g representa uma função logística (ou Sigmoid) e θ representa um vetor de parâmetros. Uma função logística é uma função que tem como saída sempre valores entre 0 e 1, conforme gráfico abaixo.</p>
        <center>
          <img src={require("../assets/grafico_logistica.png")} alt="Gráfico função logística "
            style={{ height: "300px" }} />
          <div><small>Fig. 3. Gráfico função logística </small></div>
        </center>

        <h4 className="pt-4">2. Naïve Bayes </h4>
        <p>Naïve Bayes é um algoritmo probabilístico de classificação relativamente simples. O algoritmo se baseia no teorema de bayes e recebe o nome naive (ingênuo) por assumir algumas fortes hipóteses de independência entre os preditores. Este algoritmo se baseia que os preditores não tem nenhuma característica em comum com outros grupos, o modelo Naive Bayes é fácil de construir e particularmente útil para grandes volumes de dados, além de simples, Naïve Bayes é conhecido por ganhar de métodos de classificação altamente sofisticados. </p>
        <p>Abaixo temos a equação que possibilita o cálculo da probabilidade posterior P(C/X):</p>
        <center>
          <img src={require("../assets/possibilita.png")} alt="Gráfico função logística "
            style={{ height: "300px" }} />
          <div><small>Fig. 3. Gráfico função logística </small></div>
        </center>
        <p>Onde temos: </p>
        <ul>
          <li>P (c | x) é a probabilidade posterior da classe (c, alvo) dada preditor (x, atributos);</li>
          <li>P (c) é a probabilidade original da classe;</li>
          <li>P (x | c) é a probabilidade que representa a probabilidade de preditor dada a classe;</li>
          <li>P (x) é a probabilidade original do preditor.</li>
        </ul>

        <h4 className="pt-4">3. Random Forest</h4>
        <p>Random Forest (floresta aleatória) é um algoritmo de aprendizagem supervisionada que pode ser utilizado para classificação e regressão. Na figura 4 é apresentado um exemplo de modelo de classificação por floresta aleatória.  A “floresta” que ele cria é uma combinação (ensemble) de árvores de decisão, na maioria dos casos treinados com o método de bagging. Este método combina modelos de aprendizado o que aumentam a acurácia geral. Seu diferencial em relação ao método de árvore de decisão é que é evitado overfitting dos dados de treinamento.</p>
        <center>
          <img src={require("../assets/floresta_aleatoria.png")} alt="Floresta aleatória com duas árvores"
            style={{ height: "300px" }} />
          <div><small>Fig. 4. Floresta aleatória com duas árvores</small></div>
        </center>

        <h4 className="pt-4">4. Stochastic Gradient Descent</h4>
        <p>O Stochastic Gradient Descent (Descida Estocástica do Gradiente) é um algoritmo muito usado em machine learning baseado em redes neurais. Descida estocástica do gradiente significa literalmente descer até o ponto mais baixo para alcançar o menor valor nessa superfície. É possível fazer uma comparação entre regressão linear e o SGD, a regressão linear tem por objetivo diminuir a soma do quadrado dos resíduos, é sabido que função atinge seu menor valor quando a inclinação da reta é igual a 0. O SGD é capaz de resolver esse problema de minimização de uma forma melhor, usa-se como amostragem um pequeno número de pontos de dados ao invés de apenas um ponto, o que é nomeado mini-lote, que é o equilíbrio entre a qualidade do SGD e a velocidade.</p>


        <h4 className="pt-4">5. Support Vector Classifier</h4>
        <p>O SVC é uma categoria de SVM (Support Vector Machine) cuja função é analisar dados e reconhecer padrões, sendo utilizado para classificação. Tomando como entrada um conjunto de dados, o SVM prediz a qual das duas classes impostas esta entrada pertence, o que o torna um classificador binário. Primeiramente o algoritmo necessita de treinamento com um conjunto de exemplos rotulados sendo de uma ou outra categoria, em seguida ele constrói um modelo matemático que é capaz de classificar novos exemplos. </p>
        <p>Matematicamente, o modelo criado pela SVM representa a distribuição dos pontos das duas categorias no espaço, onde o algoritmo traça a reta (hiperplano) que seja capaz de distanciar tais pontos ao máximo, como apresentado na figura 5.</p>
        <center>
          <img src={require("../assets/SVM_treinada.png")} alt="SVM de classificação linear treinada com duas classes." style={{ height: "300px" }} />
          <div><small>Fig. 5. Exemplo de margem  alcançada por um hiperplano para uma SVM de classificação linear treinada com duas classes.</small></div>
        </center>


      </Layout>
    )
  }
}