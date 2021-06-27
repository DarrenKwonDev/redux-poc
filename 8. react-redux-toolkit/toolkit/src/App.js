import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostList from "./PostList";

const { logIn } = require("./actions/user");
const userSlice = require("./reducers/userSlice");

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(
      // 여기서 넘긴 정보는 asyncReducer를 정의한 user.js의 data에 들어오게 됨
      logIn({
        id: "darren@yahoo.com",
        password: "password",
      })
    );
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userSlice.actions.logOut());
  }, []);

  return (
    <div>
      {user.isLoggingIn ? (
        <div>로그인 중</div>
      ) : user.data ? (
        <>
          <div>{user.data.nickname}</div>
          <PostList />
        </>
      ) : (
        "로그인 해주세요."
      )}

      {!user.data ? (
        <button onClick={onClick}>로그인</button>
      ) : (
        <button onClick={onLogout}>로그아웃</button>
      )}
    </div>
  );
};

export default App;
