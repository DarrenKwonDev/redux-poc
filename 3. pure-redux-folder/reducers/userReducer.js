const { LOG_IN, LOG_OUT } = require("../actions/_types");

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
