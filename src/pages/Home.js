import React from "react";
import Layout from "../components/Layout/Layout";
import API from "../commons/Api";
import Form from "../components/Form/Form";



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


    return (
      <Layout>


        <div className="row">
          <div className="col-6">
            <h4>Bem-vindo ao projeto final de <b>Computação Afetiva</b>: </h4>
            <h1><b>Renew or Cancel</b></h1>
          </div>
          
          <div className="col-6 text-right">
            <b>Profa. Paula Dornhofer Paro Costa</b>
            <div>Caroline Santos Pereira</div>
            <div>Jessyca Nobre</div>
            <div>Leandro Carvalho</div>
            <div>Paolla Agard</div>
          </div>
        </div>


        <Form submitHandler={this.handleSubmit} title="Quer saber se sua série favorita vai ser renovada ou cancelada?" id={0} >
          <input id="titulo" type="text" required value={this.state.titulo} />
        </Form >
        <ol className=" m-0 p-0 mt-4 ml-3">
          {listReviews.map((review, index) =>
            <li className="pb-3" key={index}>{review}</li>
          )}
        </ol>
      </Layout>
    )
  }
}