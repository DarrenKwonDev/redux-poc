const { ADD_POST } = require("./_types");

const addPost = (data) => {
  return {
    type: ADD_POST,
    data,
  };
};

module.exports = {
  addPost,
};
