import React from "react";
import Layout from "../components/Layout/Layout";
import DynamicTable from "../components/Table/DynamicTable";

export default class Results extends React.Component {
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
    }]

    const tvshows = [{
      "SÉRIE": "Game of Thrones",
      "PREDIÇÃO %": "Pos: 0.72  Neg: 0.28",
      "STATUS ATUAL": "Finalizada",
    }, {
      "SÉRIE": "V (2009)",
      "PREDIÇÃO %": "Pos: 0.48 Neg: 0.52",
      "STATUS ATUAL": "Cancelada",
    }, {
      "SÉRIE": "The Secret Circle",
      "PREDIÇÃO %": "Pos: 0.60 Neg: 0.40",
      "STATUS ATUAL": "Cancelada",
    }, {
      "SÉRIE": "Dear White People",
      "PREDIÇÃO %": "Pos: 0.36 Neg: 0.64",
      "STATUS ATUAL": "Renovada (Última Temporada)",
    }, {
      "SÉRIE": "The Handmaid's Tale",
      "PREDIÇÃO %": "Pos: 0.48 Neg: 0.52",
      "STATUS ATUAL": "Renovada",
    }, {
      "SÉRIE": "Thirteen Reasons Why",
      "PREDIÇÃO %": "Pos: 0.16 Neg: 0.84",
      "STATUS ATUAL": "Renovada (Última Temporada)",
    }]

    return (
      <Layout>
        <h2>Análise dos resultados</h2>
        <p>As séries foram escolhidas, para a análise do classificador, devido ao seu conteúdo mais polêmico e com assuntos que podem ser considerados tabu na sociedade, pois assim, pode-se avaliar comentários que são mais clusterizados, ao contrário de uma série que cai no gosto do público, que tende a ter somente comentários positivos de uma base grande de fãs.</p>
        <p>Na análise, utilizou-se um Ensemble Classifier, isto é, um conjunto de classificadores retorna cada um a sua classificação para o comentário específico, após isso, existe um sistema de votação, no qual a classificação que tiver o maior número de votos será a classificação final. Na tabela 1 é possível verificar a acurácia de cada um dos classificadores utilizados. Estes classificadores foram escolhidos baseados em uma pesquisa, a qual mostrava quais classificadores eram mais comumente usados em Ensemble Classifiers.</p>

        <div className="pt-3">
          <small><strong>Tabela 1. Resultados da acurácia dos classificadores</strong></small>
          <DynamicTable
            data={classifier}
            width="500px * *"
            variant="table-striped table-hover table-sm"
          />
        </div>

        <div className="pt-3">
          <small><strong>Tabela 2. Resultados da acurácia da classificação das séries</strong></small>
          <DynamicTable
            data={tvshows}
            width="500px * *"
            variant="table-striped table-hover table-sm"
          />
        </div>

      </Layout>
    )
  }
}