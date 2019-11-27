import React from "react";
import Layout from "../components/Layout/Layout";

export default class Motivation extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Motivação</h2>
        <p>A indústria cinematográfica investe bilhões em filmes e séries em todo o mundo, somente nos EUA são investidos anualmente mais de 20 bilhões de dólares segundo a Motion Picture Association of America (MPAA), que coordena as 5 maiores produtoras de séries e filmes dos EUA, com base nessas informações é de suma importância minimizar os riscos envolvidos na continuação de uma série, através dos comentários e da repercussão é possível determinar como o público está reagindo a determinada série. Sites como Imdb, que é uma base de dados de comentários de filmes e séries, fornecem informação que implica em maior previsibilidade de performance das séries, o que representa ganhos significativos, tendo em vista os altos valores investidos. Com base nessas informações foi criado um classificador de Séries capaz de predizer qual a probabilidade de uma série ser renovada ou cancelada nas próximas temporadas.</p>
      </Layout>
    )
  }
}