import Model from "./Model";

const url = "http://roc-backend.herokuapp.com";

const Api = {
  Genre: new Model(url, "genres"),
  Prediction: new Model(url, "predictions"),
  TVShow: new Model(url, "tvshows"),
};

export default Api;


Api.getIdTitle = (title) => (async () => {
    return await fetch(`https://imdb8.p.rapidapi.com/title/find?q=${title}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "9732f48dbemsh79132fa716eee6dp168a3bjsn589fe184657e"
        }
    })
    .then(response => {
        return response.json();

    })
    .catch(err => {
        console.log(err);
    });
})()

Api.getReviews = (idTitle) => (async () => {
    return await fetch(`https://imdb8.p.rapidapi.com/title/get-user-reviews?tconst=${idTitle}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "9732f48dbemsh79132fa716eee6dp168a3bjsn589fe184657e"
        }
    })
    .then(response => {
        return response.json();

    })
    .catch(err => {
        console.log(err);
    });
})()