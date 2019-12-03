import React from "react";
import Layout from "../components/Layout/Layout";

export default class References extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Referências utilizadas </h2>
        <div className="pt-3">Klaus R. Scherer and Marcel R. Zentner. Emotional effects of music: productions rules. Oxford University Press, Oxford; New York, 2001. 5</div>

        <div className="pt-3">Liu,  B. (2010). Sentiment Analysis and Subjectivity. Handbook of Natural Language Processing, Second Edition. CRC Press, Taylor and Francis Group</div>

        <div className="pt-3">Michael J. Berry and Gordon Linoff. Data Mining Techniques: For Marketing, Sales, and Customer Support. John Wiley & Sons, Inc., New York, NY, USA, 1997. 20</div>

        <div className="pt-3">Oliveira, E., Martins, P., and Chambel, T. (2011).  Ifelt:  Accessing movies through our emotions.  In Proceedings of the 9th International Interactive Conference on Interactive Television , EuroITV ’11, pages 105–114, New York, NY, USA. ACM.</div>

        <div className="pt-3">Picard, R.W.(1997). Affective Computing. MIT Press, Cambridge, MA, USA</div>

      </Layout>
    )
  }
}