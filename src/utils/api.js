const axios = require('axios');

const fetchTopics = () => {
  return axios
    .get('https://nc-news-review.herokuapp.com/api/topics')
    .then(({ data }) => {
      return data.topics;
    });
};

const fetchArticles = ({ topic_slug }, sort_by, order) => {
  console.log(order);
  return axios
    .get('https://nc-news-review.herokuapp.com/api/articles', {
      params: { topic: topic_slug, sort_by, order }
    })
    .then(({ data }) => {
      console.log(data.articles);
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

const patchVotes = (inc_votes, article_id, comment_id) => {
  if (article_id) {
    return axios.patch(
      `https://nc-news-review.herokuapp.com/api/articles/${article_id}`,
      {
        inc_votes
      }
    );
  }
  if (comment_id) {
    return axios.patch(
      `https://nc-news-review.herokuapp.com/api/comments/${comment_id}`,
      {
        inc_votes
      }
    );
  }
};

module.exports = {
  fetchTopics,
  fetchArticles,
  fetchSingleArticle,
  fetchComments,
  patchVotes
};
