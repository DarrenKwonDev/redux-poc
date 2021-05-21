const { createStore, applyMiddleware, compose } = require("redux");
const { asyncLogin } = require("./_actions/user");
const { createLogger } = require("redux-logger");
const rootReducer = require("../../5. pure-redux-thunk/reducers");

// middleware
const logger = createLogger();
const customLogger = (store) => (next) => (action) => {
  console.log("before action", store.getState());
  next(action); // 액션을 넘겨주지 않으면 리듀서로 액션을 진행하지 못합니다.
  console.log("after action", store.getState());
};
const thunkMiddleware = (store) => (next) => (action) => {
  // action이 객체가 아닌 함수인 경우 비동기라 가정하고 처리하자.
  if (typeof action === "function") {
    // action 함수에 next, getState 함수를 넘겨서 활용할 수 있도록 하자
    return action(next, store.getState);
  }
  next(action);
};

const enhancer = compose(applyMiddleware(thunkMiddleware, logger));

// store
const initialState = {
  user: null,
  posts: [],
};

const store = createStore(rootReducer, initialState, enhancer);

// store 꺼낸 후 react와의 연결
export default store;

// dispatch! 사용해보자
// store.dispatch(asyncLogin({ id: 1, name: "darren", admin: true }));
// store.dispatch(addPost({ userId: 1, id: 1, content: "my first post" }));
// store.dispatch(addPost({ userId: 1, id: 2, content: "second post" }));
// store.dispatch(logOut());
