import React from "react";
import Layout from "../components/Layout/Layout";

export default class Introduction extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Introdução</h2>
        <p>A computação afetiva é uma área de pesquisa que compreende a criação de sistemas que são capazes de reconhecer, interpretar e simular emoções através de vários contextos, tais como extração de emoções em vídeo, áudio, imagem e textos (Picard 1997).</p>
        <p>Prever o grau de sucesso de uma série não é uma tarefa trivial e fácil, existem muitas variáveis que envolvem essa predição, atualmente estamos expostos a um banco de dados gigantesco de informações relevantes. Com o avanço do aprendizado de máquinas, que é parte da inteligência artificial, a técnica de extração de informações em bancos de dados não estruturados está se tornando cada vez mais simples, vários outros campos tais como mineração de dados e linguística computacional se complementam para gerar conhecimento a partir das bases textuais.</p>
        <p>Muitos serviços são avaliados por meio de comentários textuais que são expressões de sentimentos naquele produto ou serviço. O ser humano normalmente identifica padrões para organizar as informações, reconhecer padrões é a capacidade de descrever semelhanças entre ações ou estímulos, processando e atribuindo-o a um cluster.</p>
        <p>Através da análise de sentimentos podemos usar a técnica de mineração de sentimentos ou opiniões, essa técnica visa classificar não por tópicos e sim pelo sentimentos ou opiniões, esses sentimentos podemos classificá-los como binários (0,1) ou por valência sendo positivo, negativo ou neutro.</p>
      </Layout>
    )
  }
}