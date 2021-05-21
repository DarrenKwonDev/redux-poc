const { LOG_IN, LOG_OUT, LOG_IN_SUCCESS } = require("../_actions/_types");

// Store의 user 부분만 담당함
const initialState = {};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
      return {
        ...action.data,
      };
    case LOG_OUT:
      return null;
    default:
      return prevState;
  }
};

module.exports = userReducer;
