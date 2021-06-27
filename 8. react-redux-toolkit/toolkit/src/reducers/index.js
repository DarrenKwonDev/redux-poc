const { combineReducers } = require("@reduxjs/toolkit");
const userSlice = require("./userSlice");
const postSlice = require("./postSlice");

module.exports = combineReducers({
  user: userSlice.reducer,
  post: postSlice.reducer,
});
