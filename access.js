const fetch = require("node-fetch");

const get = () => {
  return fetch("http://localhost:3000")
    .then(rawResponse => {
      console.log(rawResponse.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};

get();
