import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./_actions/post";
import { asyncLogin, logOut } from "./_actions/user";

function App() {
  // global state. 굳이 다시 state로 담을 필요 없음
  const user = useSelector((state) => state.user);

  // dispatch
  const dispatch = useDispatch();
  const LoginClick = useCallback(() => {
    dispatch(asyncLogin({ id: "darren", password: "1234" }));
  }, []);
  const LogoutClick = useCallback(() => {
    dispatch(logOut());
  }, []);
  const postUpload = useCallback(() => {
    dispatch(addPost({ userId: 1, id: 1, content: "my first post" }));
  }, []);

  return (
    <>
      <div>hello</div>
      <button onClick={LoginClick}>login</button>
      <button onClick={LogoutClick}>logout</button>
      <button onClick={postUpload}>postupload</button>
    </>
  );
}

export default App;
