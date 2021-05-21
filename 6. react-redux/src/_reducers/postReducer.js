const { ADD_POST } = require("../_actions/_types");
// Store의 posts 부분만 담당함
const initialState = [];

const postReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return [...prevState, action.data];
    default:
      return prevState;
  }
};

module.exports = postReducer;
