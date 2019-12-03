import React from "react";
import Layout from "../components/Layout/Layout";
import DynamicTable from "../components/Table/DynamicTable";

export default class Results extends React.Component {
  render() {

    const classifier = [{
      "CLASSIFICADOR": "Random Forest (RF)",
      "ACURÁCIA": "75.36%",
    }, {
      "CLASSIFICADOR": "Support Vector Classifier (SVC)",
      "ACURÁCIA": "79.24%",
    }, {
      "CLASSIFICADOR": "Stochastic Gradient Descent (SGD)",
      "ACURÁCIA": "80.16%",
    }, {
      "CLASSIFICADOR": "Logistic Regression (Log Reg)",
      "ACURÁCIA": "82.6%",
    }, {
      "CLASSIFICADOR": <b>Naive Bayes (NB)</b>,
      "ACURÁCIA": <b>84.11%</b>,
    }]

    const tvshows = [{
      "SÉRIE": "Game of Thrones",
      "PREDIÇÃO %": "Pos: 0.72  Neg: 0.28",
      "STATUS ATUAL": "Finalizada",
    }, {
      "SÉRIE": "V (2009)",
      "PREDIÇÃO %": "Pos: 0.48 Neg: 0.52",
      "STATUS ATUAL": "Cancelada",
    }, {
      "SÉRIE": "The Secret Circle",
      "PREDIÇÃO %": "Pos: 0.60 Neg: 0.40",
      "STATUS ATUAL": "Cancelada",
    }, {
      "SÉRIE": "Dear White People",
      "PREDIÇÃO %": "Pos: 0.36 Neg: 0.64",
      "STATUS ATUAL": "Renovada (Última Temporada)",
    }, {
      "SÉRIE": "The Handmaid's Tale",
      "PREDIÇÃO %": "Pos: 0.48 Neg: 0.52",
      "STATUS ATUAL": "Renovada",
    }, {
      "SÉRIE": "Thirteen Reasons Why",
      "PREDIÇÃO %": "Pos: 0.16 Neg: 0.84",
      "STATUS ATUAL": "Renovada (Última Temporada)",
    }]

    return (
      <Layout>
        <h2>Análise dos resultados</h2>
        <p>As séries foram escolhidas, para a análise do classificador, devido ao seu conteúdo mais polêmico e com assuntos que podem ser considerados tabu na sociedade, pois assim, pode-se avaliar comentários que são mais clusterizados, ao contrário de uma série que cai no gosto do público, que tende a ter somente comentários positivos de uma base grande de fãs.</p>
        <p>Para a análise consideramos, como dito anteriormente, que a porcentagem de comentários positivos quer dizer a probabilidade desta série ser renovada e o mesmo vale para os comentários negativos, em relação ao cancelamento.</p>
        <p>Utilizamos as seguintes séries para análise:</p>

        <center><h4>Game of Thrones</h4></center>
        <div className="row">
          <div className="col-md-2">
            <center>
              <img src={require("../assets/got.jpg")} alt="Game Of Thrones"
                style={{ width: "100%" }}
              />
            </center>
          </div>
          <div className="col-md-5">
            <h5>Sinopse</h5>
            <p>Situada nos continentes fictícios de Westeros e Essos, a série centra-se no Trono de Ferro dos Sete Reinos e segue um enredo de alianças e conflitos entre as famílias nobres dinásticas, seja competindo para reivindicar o trono ou lutando por sua independência. Uma série popular, mas que teve em sua última temporada muitos comentários negativos.</p>
          </div>
          <div className="col-md-5">
            <h5>Resultados</h5>
            <div>Série: <b>Game of Thrones</b></div>
            <div>Status atual: <b>Finalizada</b></div>
            <div>divredição: <b>72% renovada, 28% cancelada</b></div>
          </div>
        </div>

        <center><h4>V (2009)</h4></center>
        <div className="row">
          <div className="col-md-2">
            <center>
              <img src={require("../assets/v_2009.jpg")} alt="V (2009)"
                style={{ width: "100%" }}
              />
            </center>
          </div>
          <div className="col-md-5">
            <h5>Sinopse</h5>
            <p>Ocorre a aparição de naves gigantes nas 29 principais cidades de todo o mundo e Anna, a bonita e carismática líder dos "Visitantes" ou "V's", afirma vir em paz. Apesar de aparentemente benevolentes, um pequeno número de seres humanos começam a duvidar da sinceridade dos Visitantes, e Erica Evans descobre que os alienígenas agora estão na fase final do seu plano para assumir a Terra. Érica se junta ao movimento de resistência, denominada Quinta Coluna, que inclui Ryan, um Visitante que quer salvar a humanidade.</p>
          </div>
          <div className="col-md-5">
            <h5>Resultados</h5>
            <div>Série: <b>V (2009)</b></div>
            <div>Status atual: <b>Cancelada</b></div>
            <div>divredição: <b>48% renovada, 52% cancelada</b></div>
          </div>
        </div>

        <center><h4>The Secret Circle</h4></center>
        <div className="row">
          <div className="col-md-2">
            <center>
              <img src={require("../assets/The_Secret_Circle.jpg")} alt="The Secret Circle"
                style={{ width: "100%" }}
              />
            </center>
          </div>
          <div className="col-md-5">
            <h5>Sinopse</h5>
            <p>Situado na cidade fictícia de Chance Harbor, Washington, a série mostra uma adolescente da Califórnia, Cassie Blake, que vivia com sua mãe Amelia, até que a mãe morre em um trágico acidente. Cassie vai morar com sua avó Jane na pequena cidade Chance Harbor, Washington, onde os habitantes parecem saber mais sobre ela do que ela sabe sobre si própria. Quando Cassie conhece seus novos colegas, coisas perigosas e estranhas começam a ocorrer e aparentemente seus amigos estão envolvidos. O grupo explica a Cassie que eles são descendentes de bruxas, e que estavam esperando por ela, para se juntar e completar a nova geração do Círculo Secreto.</p>
          </div>
          <div className="col-md-5">
            <h5>Resultados</h5>
            <div>Série: <b>The Secret Circle</b></div>
            <div>Status atual: <b>Finalizada</b></div>
            <div>divredição: <b>60% renovada, 40% renovada</b></div>
          </div>
        </div>

        <center><h4>Dear White People</h4></center>
        <div className="row">
          <div className="col-md-2">
            <center>
              <img src={require("../assets/Dear_White_People.jpg")} alt="Dear White People"
                style={{ width: "100%" }}
              />
            </center>
          </div>
          <div className="col-md-5">
            <h5>Sinopse</h5>
            <p>A série acompanha um grupo de estudantes negros de uma importante universidade dos Estados Unidos, pertencente à Ivy League, cuja maioria dos alunos é branca. Dear White People retrata como esses personagens lidam com o racismo no campus da universidade. Depois de uma festa de Halloween, com a temática blackface, organizada por um grupo de alunos brancos, várias tensões raciais se desenrolam no ambiente acadêmico</p>
          </div>
          <div className="col-md-5">
            <h5>Resultados</h5>
            <div>Série: <b>Dear White People</b></div>
            <div>Status atual: <b>Renovada para última temporada</b></div>
            <div>divredição: <b>36% renovada, 64% cancelada</b></div>
          </div>
        </div>

        <center><h4>The Handmaid’s Tale</h4></center>
        <div className="row">
          <div className="col-md-2">
            <center>
              <img src={require("../assets/The_Handmaid_Tale.jpg")} alt="The Handmaid’s Tale"
                style={{ width: "100%" }}
              />
            </center>
          </div>
          <div className="col-md-5">
            <h5>Sinopse</h5>
            <p>Depois que um atentado terrorista ceifa a vida do Presidente dos Estados Unidos e de grande parte dos outros políticos eleitos, uma facção católica toma o poder com o intuito declarado de restaurar a paz. Série com conteúdo feminista.</p>
          </div>
          <div className="col-md-5">
            <h5>Resultados</h5>
            <div>Série: <b>The Handmaid’s Tale</b></div>
            <div>Status atual: <b>Renovada</b></div>
            <div>divredição: <b>48% renovada, 52% cancelada</b></div>
          </div>
        </div>

        <center><h4>13 Reasons Why</h4></center>
        <div className="row">
          <div className="col-md-2">
            <center>
              <img src={require("../assets/13_Reasons_Why.jpg")} alt="13 Reasons Why"
                style={{ width: "100%" }}
              />
            </center>
          </div>
          <div className="col-md-5">
            <h5>Sinopse</h5>
            <p>Uma caixa de sapatos é enviada para Clay (Dylan Minnette) por Hannah (Katherine Langford), sua amiga e paixão platônica secreta de escola. O jovem se surpreende ao ver o remetente, pois Hannah acabara de se suicidar. Dentro da caixa, há várias fitas cassete, onde a jovem lista os 13 motivos que a levaram a interromper sua vida - além de instruções para elas serem passadas entre os demais envolvidos. A série retrata a depressão e suicídio na adolescência.</p>
          </div>
          <div className="col-md-5">
            <h5>Resultados</h5>
            <div>Série: <b>13 Reasons Why</b></div>
            <div>Status atual: <b>Renovada para última temporada</b></div>
            <div>divredição: <b>16% renovada, 84% cancelada</b></div>
          </div>
        </div>

        <center><h4>Euphoria</h4></center>
        <div className="row">
          <div className="col-md-2">
            <center>
              <img src={require("../assets/Euphoria.jpg")} alt="Euphoria"
                style={{ width: "100%" }}
              />
            </center>
          </div>
          <div className="col-md-5">
            <h5>Sinopse</h5>
            <p>O dia-a-dia de um grupo de estudantes do ensino médio, a medida que eles exploram novos amores e amizades em um mundo de sexo, drogas, traumas e mídias sociais.</p>
          </div>
          <div className="col-md-5">
            <h5>Resultados</h5>
            <div>Série: <b>Euphoria</b></div>
            <div>Status atual: <b>Renovada</b></div>
            <div>divredição: <b>72% renovada, 28% cancelada</b></div>
          </div>
        </div>

    <p>Analisando os resultados, podemos inferir alguns pontos interessantes. Primeiro, Game of Thrones, apesar de ter tido muitos comentários negativos em sua última temporada, muito devido ao episódio da série, que não agradou muitos fãs da série, ainda assim seria renovada, caso o critério fossem os comentários dos espectadores.</p>
    <p>Comparando duas séries já canceladas com os resultados do nosso classificador, verificamos que para V (2009), ele acertaria o cancelamento da série, mas para The Secret Circle, não. Isso se deve, em parte, ao fato de que a segunda é uma série adolescente, uma modalidade que possui sempre bases de fãs empenhadas em demonstrar que as séries são boas. Os comentários devem ser em sua maior parte positivos devido a esse fato.</p>
    <p>A série Dear White People, que foi renovada para a sua última temporada, em nosso classificador, teríamos que a mesma seria cancelada. Aqui é interessante notar que o assunto da série, racismo, pode ser entendido pelo classificador de diversas formas, isto é, comentários que podem ser positivos, mas possuem palavras negativas (como o próprio racismo) podem levar a classificação para um falso negativo e, assim, resultar em números expressivos como 64% de chance de cancelamento.</p>
    <p>The Handmaid’s Tale segue o mesmo caminho, pois o nosso classificador predisse que a mesma seria cancelada, mas por uma margem muito pequena. O que nos leva a pensar que comentários, mesmo que positivos, também são entendidos de forma errônea pelo classificador.</p>
    <p>Para 13 Reasons Why e Euphoria temos resultados opostos, mesmo as duas séries sendo adolescentes e falando sobre assuntos mais polêmicos. Entretanto, a primeira possui uma probabilidade de 84% de ser cancelada, o que de fato aconteceu, pois a série só terá mais uma temporada para evitar que a mesma acabe sem um final. O classificador, aqui, consegue transmitir em sua predição o que realmente aconteceu, pois o público entendeu que a série passou por um assunto polêmico de forma errônea, e não de uma forma que trouxesse uma discussão saudável aos assunto abordados. Já Euphoria é o oposto. Isso se deve ao fato de que a série, mesmo com temática adolescente, é voltada ao público adulto e retrata de forma coesa e sensata assuntos polêmicos. E, aqui, o classificador prediz que a série tem 72% de chance de ser renovada, o que aconteceu de fato.</p>
    <p>Interessante ainda notar, que os resultados são satisfatórios levando em consideração apenas as opiniões de espectadores das séries. Entretanto, estes mesmos resultados poderiam ser muito mais robustos, caso outro pontos fossem levados em consideração, como por exemplo, um número maior de comentários, comentários de um determinado range de tempo, uma maior distinção das palavras utilizadas em relação ao seu contexto e não somente ao seu significado puro.</p>



        {/* <div className="pt-3">
          <small><strong>Tabela 1. Resultados da acurácia dos classificadores</strong></small>
          <DynamicTable
            data={classifier}
            width="500px * *"
            variant="table-striped table-hover table-sm"
          />
        </div>

        <div className="pt-3">
          <small><strong>Tabela 2. Resultados da acurácia da classificação das séries</strong></small>
          <DynamicTable
            data={tvshows}
            width="500px * *"
            variant="table-striped table-hover table-sm"
          />
        </div> */}

      </Layout>
    )
  }
}