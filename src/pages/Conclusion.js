import React from "react";
import Layout from "../components/Layout/Layout";

export default class Conclusion extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Conclusão</h2>
        <p>Foram utilizadas nesse trabalho, técnicas de mineração de textos, os dados foram coletados do database IMDb, com o intuito de predizer qual a probabilidade de uma série ser ou não renovada para a próxima temporada, uma variedade de técnicas de pré processamento e processamento de dados foram utilizadas nesse trabalho a fim de avaliar quais foram os impactos no domínio dos comentários, que por sua vez é compostos por gírias, abreviações e jargões, os resultados foram satisfatórios, indicando que o caminho seguido ainda pode ser explorado em trabalhos futuros.</p>
      </Layout>
    )
  }
}