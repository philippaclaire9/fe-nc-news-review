const axios = require('axios');

const fetchTopics = () => {
  axios
    .get('https://nc-news-review.herokuapp.com/api/topics')
    .then(({ data }) => {
      console.log(data);
    });
};

module.exports = { fetchTopics };
