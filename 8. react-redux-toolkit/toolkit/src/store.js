const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");

const reducer = require("./reducers");

const firstMiddleware = () => (next) => (action) => {
  console.log("logging", action);
  next(action);
};

const store = configureStore({
  reducer,
  middleware: [firstMiddleware, ...getDefaultMiddleware()],
  devTools: true,
});

module.exports = store;
