const { LOG_IN, LOG_OUT } = require("../actions/_types");

// Store의 user 부분만 담당함
const initialState = {};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...prevState,
        user: action.data,
      };
    case LOG_OUT:
      return {
        ...prevState,
        user: null,
      };
    default:
      return prevState;
  }
};

module.exports = userReducer;
