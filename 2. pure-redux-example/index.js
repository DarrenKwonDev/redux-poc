const { createStore } = require("redux");

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const ADD_POST = "ADD_POST";

const reducer = (prevState, action) => {
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
    case ADD_POST:
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

const initialState = {
  user: null,
  posts: [],
};

const store = createStore(reducer, initialState);
store.subscribe(() => console.log(store.getState()));

// action, action func
const logIn = (data) => {
  return {
    type: LOG_IN,
    data,
  };
};

const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

const addPost = (data) => {
  return {
    type: ADD_POST,
    data,
  };
};

// dispatch! 사용해보자
store.dispatch(logIn({ id: 1, name: "darren", admin: true }));
store.dispatch(addPost({ userId: 1, id: 1, content: "my first post" }));
store.dispatch(addPost({ userId: 1, id: 2, content: "second post" }));
store.dispatch(logOut());
