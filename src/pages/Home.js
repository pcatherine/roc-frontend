import React from "react";
import Layout from "../components/Layout/Layout";
import API from "../commons/Api";
import Form from "../components/Form/Form";
import DynamicTable from "../components/Table/DynamicTable";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      tvshow: {},
    }
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e, { titulo }) {

    API.getIdTitle(titulo).then((resultsTitle, err) => {
      if (err) {
        console.log(`cannot connect to database: ${err}`);
        throw err;
      };

      if (resultsTitle) {
        console.log(resultsTitle.results[0].id.split("/")[2]);
        API.getReviews(resultsTitle.results[0].id.split("/")[2]).then((results, err) => {
          if (err) {
            console.log(`cannot connect to database: ${err}`);
            throw err;
          };

          if (results) {
            console.log(resultsTitle.results[0]);
            this.setState({
              tvshow: resultsTitle.results[0],
              reviews: results.reviews
            })
          }
        });
      }

    });
  }


  render() {

    let listReviews = [];
    this.state.reviews.map(review =>
      listReviews.push(review.reviewText)
    )

    console.log(listReviews);
    let dataTable = [];


    return (
      <Layout>


        <div className="row pb-5">
          <div className="col-md-6">
            <h4>Bem-vindo ao projeto final de <b>Computação Afetiva</b>: </h4>
            <h1><b>Renew or Cancel</b></h1>
          </div>

          <div className="col-md-6 text-right">
            <b>Profa. Paula Dornhofer Paro Costa</b>
            <div>Caroline Santos Pereira</div>
            <div>Jessyca Nobre</div>
            <div>Leandro Carvalho</div>
            <div>Paolla Catherine Agard</div>
          </div>
        </div>


        <Form submitHandler={this.handleSubmit} title="Quer saber se sua série favorita vai ser renovada ou cancelada?" id={0} >
          <input id="titulo" type="text" required value={this.state.titulo} />
        </Form >


        <div className="row pt-5">
          <div className="col-md-2">
            {this.state.tvshow.image &&
              <>
                <img src={this.state.tvshow.image.url} alt="tvshow img" style={{ width: "100%" }} />
                <div>Ano: <b>{this.state.tvshow.year}</b></div>
              </>
            }
          </div>
          <div className="col-md-10">
            {listReviews.forEach((review, index) => {
              dataTable.push({
                "#": <b>{index + 1}</b>,
                "COMENTÁRIO": review,
                "VALÊNCIA": "--",
              })
            }
            )}

            <DynamicTable
              data={dataTable}
              width={"5px * *"}
            />
          </div>

        </div>



      </Layout>
    )
  }
}