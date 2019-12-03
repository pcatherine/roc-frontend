import React from "react";
import Layout from "../components/Layout/Layout";
import DynamicTable from "../components/Table/DynamicTable";


export default class Methodology extends React.Component {
  render() {
    const classifier = [{
      "CLASSIFICADOR": "Random Forest (RF)",
      "ACURÁCIA": "75.36%",
    }, {
      "CLASSIFICADOR": "Support Vector Classifier (SVC)",
      "ACURÁCIA": "79.24%",
    }, {
      "CLASSIFICADOR": "Stochastic Gradient Descent (SGD)",
      "ACURÁCIA": "80.16%",
    }, {
      "CLASSIFICADOR": "Logistic Regression (Log Reg)",
      "ACURÁCIA": "82.6%",
    }, {
      "CLASSIFICADOR": <b>Naive Bayes (NB)</b>,
      "ACURÁCIA": <b>84.11%</b>,
    }];

    return (
      <Layout>
        <h2>Metodologia</h2>
        <p>Nosso trabalho é um estudo exploratório, o qual empregando técnicas de mineração de dados em textos e análise de sentimento dos comentários postados no Internet Movie Database (IMDb), a maior base de dados referente a filmes e séries. A metodologia utilizada neste trabalho consiste em extração dos dados de um dataset rotulado, pré-processamento dos dados, construção de bag of words e divisão dos dados para treinamento e validação e classificação de comentários e predição. Foi utilizado Python 3 para treinamento, classificação e predição, Node JS para construção do backend da aplicação web, ReactJS para construção do frontend da aplicação, Heroku para hospedagem dos serviços (frontend, backend e python) e uma API para recuperar os comentários de usuários do IMDb. Ao final, a arquitetura do sistema ficou de acordo com a figura 1.</p>
        <center>
          <img src={require("../assets/new.jpeg")} alt="arquitetura"
            style={{ height: "300px" }} />
          <div><small>Fig. 1. Arquitetura do classificador de séries </small></div>
        </center>
        <h4 className="pt-4">1. Extração dos Dados </h4>
        <p>A primeira dificuldade encontrada foi em relação a um dataset que fosse relacionado com séries, para que pudéssemos extrair features significativos para a análise. Visto que, até o momento da realização do trabalho não havia uma base como esta disponível e rotulada para uso, optou-se por seguir com um dataset rotulado para filmes, que possui similaridades com séries. Sendo assim, utilizamos o Large Movie Review Dataset v1.0. Este dataset é um conjunto de dados para classificação de sentimentos binários (positivo ou negativo). Contém 25 mil críticas de filmes altamente polares para treinamento e 25 mil para testes. Existem dados adicionais não rotulados para uso também. Além disso, há também um bag of words já processado.</p>
        <p>Assim, os dados baixados e separados em positivos e negativos, para fins de leitura. Inicialmente, foram utilizados somente as 25 mil críticas para treinamento, visto que o código levava muito tempo para leitura destes arquivos.</p>

        <h4 className="pt-4">2. Pré-processamento dos Dados </h4>
        <p>O pré-processamento de dados consiste em deixar os comentários prontos para o treinamento dos classificadores, isto é, remoção de pontuação, tokenização das palavras, remoção de stopwords e part of speech tagging, como mostrado na figura 2.</p>
        <center>
          <img src={require("../assets/pre_processo.png")} alt="Estrutura do pré processamento"
            style={{ height: "300px" }} />
          <div><small>Fig. 2 - Estrutura do pré processamento</small></div>
        </center>
        <p>Assim, para cada comentário, definiu-se que a estrutura da frase só teria letras de A a Z, minúsculas ou maiúsculas. Após isso, realizou-se a tokenização, isto é, decompõe-se o comentário em cada termo que o compõe. Após isto, fez-se a remoção de stopwords, ou seja, remoção de preposições, artigos, advérbios, números e pronomes. Por fim, foi realizada a PoS-tagging, a análise morfológica das palavras que estão na frase. Para este pré-processamento foi preciso baixar alguns corpora do NLTK.</p>

        <h4 className="pt-4">3. Construção de Bag of Words e divisão dos dados</h4>
        <p>Após todo o pré-processamento, optou-se por utilizar o Bag of Words como método de identificação das palavras que são mais importantes para a nossa classificação, ou seja, utilizou-se adjetivos para compor este BoW. </p>
        <p>Esta análise foi feita em 25 mil comentários e, obviamente, há um número enorme de adjetivos nestes dados, por isso, através de um método para descobrir quais são as palavras mais frequentes em determinado conjunto de dados, escolheu-se os 5 mil adjetivos mais frequentes. Estes dados foram salvos em um arquivo, utilizando um módulo do Python chamado pickle, para evitar que essas palavras tivessem que ser geradas novamente.</p>
        <p>Por fim, são gerados as features. Neste caso, um array contendo todos os adjetivos do BoW com um rótulo de true caso esteja presente na frase ou false, caso não esteja. Assim, esses adjetivos, que foram previamente classificados separadamente como positivo ou negativo, são levados em consideração pelo classificador para dizer se aquela frase é positiva ou negativa. Foram utilizados, de forma aleatória, 20 mil comentários para treinamento e cinco mil para validação.</p>

        <h4 className="pt-4">4. Treinamento e validação</h4>
        <p>Nesta etapa, treinamos os classificadores separadamente, visto que eles demoraram, aproximadamente, 30 min cada para treino. Com cada classificador, utilizamos o set de validação, para chegar na acurácia de cada um. Os resultados podem ser observados na tabela 1. Estes classificadores foram escolhidos baseados em uma pesquisa, a qual mostrava quais classificadores eram mais comumente usados em Ensemble Classifiers, pois para a predição final do nosso classificador, utilizamos um Ensemble Classifier.</p>

        <div className="pt-3">
          <small><strong>Tabela 1. Resultados da acurácia dos classificadores</strong></small>
          <DynamicTable
            data={classifier}
            width="500px * *"
            variant="table-striped table-hover table-sm"
          />
        </div>
        <p>Para a predição, utilizou-se um Ensemble Classifier, isto é, um conjunto de classificadores retorna cada um a sua classificação para um comentário específico, após isso, existe um sistema de votação, no qual a classificação que tiver o maior número de votos será a classificação final. A arquitetura de um classificador deste tipo pode ser vista na figura 3.</p>
        <center>
          <img src={require("../assets/Estrutura_classificador.png")} alt="Estrutura do Classificador"
            style={{ height: "300px" }} />
          <div><small>Fig. 3 -  Estrutura do Classificador </small></div>
        </center>
        <p>Assim como com o BoW, os modelos treinados foram salvos em documentos com o auxílio do pickle, para que se evitasse a demora de rodar cada classificador toda vez que quiséssemos fazer a predição para a renovação ou cancelamento de uma série.</p>
        <p>Sendo assim, o preditor faz a análise utilizando os outros classificadores como base e retorna uma predição binária: o comentário é positivo ou negativo, além de retornar a confiança para cada classificador. Entretanto, este último dado não foi utilizado para a predição final. Portanto, o modelo que inicialmente era dimensional, isto é, possuía valência e uma escala de 0 a 100% para essa valência binária, foi substituído somente pela valência dos comentários.</p>
        <p>Para a predição final, então, foram utilizados 25 comentários aleatórios da série que foi pesquisada. Estes comentários eram entrada para cada cada um dos modelos pré-treinados. Cada comentário recebe uma nota de cada modelo e o Ensemble Classifier retorna um voto final, assim como já foi descrito. Esse processo é realizado para cada comentário. </p>
        <p>O script calcula a porcentagem de positivos e negativos e retorna estes valores para o frontend. Portanto, o nosso preditor utiliza estes valores para dizer se determinada série será renovada ou cancelada. Por exemplo, se os valores retornados forem 75% e 25%, respectivamente, para positivos e negativos, isso quer dizer que a série em questão tem 75% de chance de ser renovada e 25% de ser cancelada.</p>
      </Layout>
    )
  }
}