const { combineReducers } = require("redux");
const postReducer = require("./postReducer");
const userReducer = require("./userReducer");

// Store의 initialState의 키 값에 매칭되게 넣어라
const rootReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
});

module.exports = rootReducer;
