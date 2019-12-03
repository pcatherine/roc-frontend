import React from "react";
import Layout from "../components/Layout/Layout";

export default class Introduction extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Introdução ao Problema</h2>
        <p>A computação afetiva é uma área de pesquisa que compreende a criação de sistemas que são capazes de reconhecer, interpretar e simular emoções através de vários contextos, tais como extração de emoções em vídeo, áudio, imagem e textos (Picard 1997).</p>
        <p>Muitos serviços são avaliados por meio de comentários textuais, que são expressões de sentimentos sobre aquele produto ou serviço. O ser humano normalmente identifica padrões para organizar as informações, reconhecer padrões é de suma importância para que se possa ser compreendido e previsto o comportamento dos dados de uma análise.</p>
        <p>Prever o grau de sucesso de uma série não é uma tarefa trivial, existem muitas variáveis que envolvem essa predição. Atualmente, estamos expostos a um banco de dados gigantesco de informações que podem ou não ser relevantes. Com o avanço do aprendizado de máquinas, que é parte da inteligência artificial, a técnica de extração de informações em bancos de dados não estruturados está se tornando cada vez mais simples. Alguns exemplos de IA são campos tais como mineração de dados e linguística computacional que se complementam para gerar conhecimento a partir das bases textuais.</p>
        <p>Os filmes e séries são por excelência uma forma de arte que envolve atividade afetiva (Oliveira et al. 2011), com a difusão das informações na internet, a grande quantidade de dados faz com que os seres humanos não sejam capazes de processar todas essas informações, sendo necessária a criação de modos automáticos para analisá-los (Liu 2010).</p>
        <p>Este trabalho tem como objetivo a criação de um algoritmo capaz de classificar as frases extraídas do database IMDb (Internet Movie Database) e realizar a predição estimando se a série avaliada tem possibilidade de ser renovada ou cancelada pela produtora, baseando-se em comentários extraídos do IMDb.</p>
      </Layout>
    )
  }
}