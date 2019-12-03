import React from "react";
import Layout from "../components/Layout/Layout";

export default class Learned extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Lições Aprendidas</h2>
        <p>Esse trabalho nos permitiu conhecer a fundo algumas ferramentas de classificação de emoções em textos, durante a realização desse trabalho tivemos algumas mudanças a fim de melhorar o resultado, no início iriamos usar o Firebase como front end, mas vimos que o React se enquadrou melhor no trabalho, também mudamos a arquitetura do classificador a fim de melhorar a velocidade de processamento, com a exclusão de uma etapa que seria a comparação por semelhança, abaixo temos as arquiteturas.</p>
        <div className="row pt-3">
          <div className="col-md-6">
            <center>
              <img src={require("../assets/old.jpeg")} alt="Antiga arquitetura"
                style={{ height: "400px" }} />
              <div><small> Fig. 5. Arquitetura Antiga</small></div>
            </center>
          </div>
          <div className="col-md-6">
            <center>
              <img src={require("../assets/new.jpeg")} alt="Nova arquitetura"
                style={{ height: "400px" }} />
              <div><small>Fig. 6. Nova Arquitetura</small></div>
            </center>
          </div>
        </div>
      </Layout>
    )
  }
}