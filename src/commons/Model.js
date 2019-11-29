
export default class Model {

  constructor(url, modelUrl) {
    this.url = url;
    this.modelUrl = modelUrl
  }

  //TASK show an alert
  insert = (data) => (async () => {
    return await fetch(`${this.url}/${this.modelUrl}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error(`${response.status} - ${response.statusText} `);
      }

    }).catch(error => console.error(error));
  })();

  getAll = () => (async () => {
    return await fetch(`${this.url}/${this.modelUrl}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error(`${response.status} - ${response.statusText} `);
      }
    }).catch(error => console.error(error));
  })();

  get = (id) => (async () => {
    return await fetch(`${this.url}/${this.modelUrl}/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error(`${response.status} - ${response.statusText} `);
      }
    }).catch(error => console.error(error));
  })();

  update = (id, data) => (async () => {
    return await fetch(`${this.url}/${this.modelUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error(`${response.status} - ${response.statusText} `);
      }
    }).catch(error => console.error(error));
  })();

  delete = (id) => (async () => {
    return await fetch(`${this.url}/${this.modelUrl}/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': `bearer ${getToken()}`
      },
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error(`${response.status} - ${response.statusText} `);
      }
    }).catch(error => console.error(error));
  })();
}