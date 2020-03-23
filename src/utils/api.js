const axios = require('axios');

const fetchTopics = () => {
  return axios
    .get('https://nc-news-review.herokuapp.com/api/topics')
    .then(({ data }) => {
      return data.topics;
    });
};

const fetchArticles = ({ topic_slug }) => {
  console.log(topic_slug);
  return axios
    .get('https://nc-news-review.herokuapp.com/api/articles', {
      params: { topic: topic_slug }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

module.exports = { fetchTopics, fetchArticles };
