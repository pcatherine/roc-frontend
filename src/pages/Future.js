import React from "react";
import Layout from "../components/Layout/Layout";

export default class Motivation extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Trabalho Futuros</h2>
        <p>Permanecem abertas algumas questões que dão oportunidades à desenvolvimentos futuros:</p>
        <ul>
          <li> Refazer o estudo proposto com um database em outro idioma. O algoritmo naive bayes, por exemplo, é considerado um ótimo algoritmo para mineração de texto, e mesmo assim gerou performances relativamente boa mas com alto índice de de melhorar a sua classificação isso se deve ao pequeno database de treinamento. Isso abre caminho para que outras técnicas e algoritmos sejam testados e tenham suas performances comparadas com os resultados apresentados aqui;</li>
          <li>Refazer o estudo proposto usando uma base de comentários específica para séries, visto que as palavras que farão parte do bag of words podem ser mais específicas e trazer mais valor para a classificação;</li>
          <li>Realizar classificação por semelhança de enredo;</li>
          <li>Fazer comparação com o pacote bem estabelecido VADER, visto que este foi pensado para analisar gírias, palavras abreviadas, emojis e até mesmo a quantidade de pontuação que pode mudar a intensidade do comentário;</li>
          <li>Realizar um estudo temporal dos comentários, isto é, analisar se a quantidade de temporadas de uma série influencia no gosto popular da mesma e, com isso, na sua probabilidade de ser renovada ou não baseada nestes comentários.</li>
        </ul>
      </Layout>
    )
  }
}