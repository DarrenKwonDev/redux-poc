const { createStore, applyMiddleware, compose } = require("redux");
const rootReducer = require("./reducers");
const { logIn, logOut } = require("./actions/user");
const { addPost } = require("./actions/post");
const { createLogger } = require("redux-logger");

// middleware
const logger = createLogger();
const customLogger = (store) => (next) => (action) => {
  console.log("====middleware!!====");
  next(action); // next로 넘겨주지 않으면 리듀서로 액션을 진행하지 못합니다.
};

const enhancer = compose(applyMiddleware(logger, customLogger));

const initialState = {
  user: null,
  posts: [],
};

const store = createStore(rootReducer, initialState, enhancer);

// logger를 달았으니 굳이 store state를 출력하진 않겠음
// store.subscribe(() => console.log(store.getState()));

// dispatch! 사용해보자
store.dispatch(logIn({ id: 1, name: "darren", admin: true }));
store.dispatch(addPost({ userId: 1, id: 1, content: "my first post" }));
store.dispatch(addPost({ userId: 1, id: 2, content: "second post" }));
store.dispatch(logOut());
