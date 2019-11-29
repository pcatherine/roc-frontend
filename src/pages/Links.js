import React from "react";
import Layout from "../components/Layout/Layout";

export default class Motivation extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Links Relacionados</h2>
        <a href="https://github.com/pcatherine/roc-frontend">Frontend</a><br/>
        <a href="https://github.com/pcatherine/roc-backend">Backend</a><br/>
        <a href="https://github.com/pcatherine/roc-python">Classificador</a>
      </Layout>
    )
  }
}