const { createStore } = require("redux");
const rootReducer = require("./reducers");
const { logIn, logOut } = require("./actions/user");
const { addPost } = require("./actions/post");

const initialState = {
  user: null,
  posts: [],
};

const store = createStore(rootReducer, initialState);
store.subscribe(() => console.log(store.getState()));

// dispatch! 사용해보자
store.dispatch(logIn({ id: 1, name: "darren", admin: true }));
store.dispatch(addPost({ userId: 1, id: 1, content: "my first post" }));
store.dispatch(addPost({ userId: 1, id: 2, content: "second post" }));
store.dispatch(logOut());
