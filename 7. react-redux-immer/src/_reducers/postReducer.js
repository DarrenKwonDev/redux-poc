const { ADD_POST } = require("../_actions/_types");
const { produce } = require("immer");

// Store의 posts 부분만 담당함
const initialState = [];

const postReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return produce(prevState, (draft) => {
        draft.push(action.data);
      });
    default:
      return prevState;
  }
};

module.exports = postReducer;
