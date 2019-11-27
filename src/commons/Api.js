const Api = {};

export default Api;

// const url = `http://${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`


Api.getReviews = (idTitle) => (async () => {
    return await fetch(`https://imdb8.p.rapidapi.com/title/get-user-reviews?tconst=${idTitle}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "9732f48dbemsh79132fa716eee6dp168a3bjsn589fe184657e"
        }
    })
    .then(response => {
        // console.log(response);
        return response.json();

    })
    .catch(err => {
        console.log(err);
    });
})()
