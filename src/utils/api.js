const axios = require('axios');

const fetchTopics = () => {
  return axios
    .get('https://nc-news-review.herokuapp.com/api/topics')
    .then(({ data }) => {
      return data.topics;
    });
};

const fetchArticles = ({ topic_slug }) => {
  return axios
    .get('https://nc-news-review.herokuapp.com/api/articles', {
      params: { topic: topic_slug }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

const fetchSingleArticle = ({ article_id }) => {
  return axios

    .get(`https://nc-news-review.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    });
};

const fetchComments = ({ article_id }) => {
  return axios
    .get(
      `https://nc-news-review.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data.comments;
    });
};

module.exports = {
  fetchTopics,
  fetchArticles,
  fetchSingleArticle,
  fetchComments
};
