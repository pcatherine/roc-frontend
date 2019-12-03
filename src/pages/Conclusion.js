import React from "react";
import Layout from "../components/Layout/Layout";

export default class Conclusion extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Conclusão</h2>
        <p>Foram utilizadas nesse trabalho, técnicas de mineração de textos e análise de sentimento em texto. Os dados foram coletados do IMDb, tanto dataset de treinamento, teste e validação, com o intuito de predizer qual a probabilidade de uma série ser renovada ou cancelada para a próxima temporada. Uma variedade de técnicas de pré-processamento e treinamento de dados foram utilizadas, a fim de avaliar quais foram os impactos de comentários de usuários do IMDb. </p>
        <p>É possível predizer se uma série será cancelada ou renovada baseando-se apenas pelos comentários de usuários do IMDb? A resposta é: depende. Há outros fatores que devem ser levados em consideração, já que falamos de uma área que envolve muito dinheiro e o apelo do público. Além disso, é necessário entender o contexto que os comentários são feitos, pois a classificação baseada somente em palavras, pode retornar falsos negativos, como no caso de Dear White People.</p>
        <p>Porém, este tipo de predição pode ser sim utilizada, mas não isoladamente. Ela pode ser mais um dos pontos levados em consideração para a renovação ou não de séries, o que imagino que já deva acontecer, visto que vivemos em uma época em que todos os nossos dados são analisados e, com certeza, os dados do IMDb não está lá à toa.</p>

      </Layout>
    )
  }
}