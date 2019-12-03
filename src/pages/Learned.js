import React from "react";
import Layout from "../components/Layout/Layout";

export default class Learned extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Lições Aprendidas</h2>
        <p>Neste trabalho pudemos praticar o uso de classificação de emoções em texto, especificamente a análise de valência, além de realizar o treinamento de classificadores. Além disso, pudemos trabalhar com novas APIs e ir mais a fundo na busca por dados de treinamento. Tivemos algumas dificuldades, como a mudança de backend, limitações com API, dificuldade de encontrar datasets rotulados e até mesmo a análise das palavras, visto que o classificador não estava preparado para receber gírias, emojis ou abreviaturas. Entretanto, isso fica como aprendizado para trabalhos futuros.</p>
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