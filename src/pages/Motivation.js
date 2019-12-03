import React from "react";
import Layout from "../components/Layout/Layout";

export default class Motivation extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Motivação</h2>
        <p>A indústria cinematográfica investe bilhões em filmes e séries em todo o mundo, somente nos EUA são investidos anualmente mais de 20 bilhões de dólares segundo a Motion Picture Association of America (MPAA), que coordena as 5 maiores produtoras de séries e filmes dos EUA. Estas informações implicam na importância de minimizar os riscos envolvidos na continuação de uma série. Uma das maneiras de avaliar o impacto de uma série na audiência é através da análise da repercussão dela em sites sobre cinema e cultura pop. Sites como ImDb (base de dados de comentários de filmes e séries) fornecem informação que implica em maior previsibilidade de performance das séries, representando ganhos significativos, tendo em vista os altos valores investidos. </p>
        <p>Analisando de maneira probabilística, quanto mais comentários sobre determinada série forem coletados, maior é a capacidade de se prever tendências nas valências dessas opiniões.  A coleção desses comentários gera uma base de dados que pode ser muito útil para qualquer organização que tenha interesse em avaliar seu próprio conteúdo.</p>
        <p>Com base nessas informações foi criado um classificador de Séries capaz de predizer qual a probabilidade de uma série ser renovada ou cancelada para próximas temporadas.</p>
      </Layout>
    )
  }
}