import React from "react";
import Layout from "../components/Layout/Layout";
import API from "../commons/Api"



export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
    }
  }
  //GoT - tt0944947
  // tt8001788
  // tt4922804
  getAll = (idTitle) => {

    API.getReviews(idTitle).then((results, err) => {
      if (err) {
        console.log(`cannot connect to database: ${err}`);
        throw err;
      };

      console.log(results)
    });
  };

  componentDidMount() {
    // this.getAll();
  }

  render() {
    return (
      <Layout>
        <h2>Bem-vindo ao projeto: <strong>Renew or Cancel</strong></h2>
        <h5> Quer saber se sua série favorita vai ser renovada ou cancelada?</h5>
        <h5>Digite e descubra:</h5>
      </Layout>
    )
  }
}