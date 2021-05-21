import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogin } from "./_actions/user";

function App() {
  // global state. 굳이 다시 state로 담을 필요 없음
  const user = useSelector((state) => state.user);

  // dispatch
  const dispatch = useDispatch();
  const LoginClick = useCallback(() => {
    dispatch(asyncLogin({ id: "darren", password: "1234" }));
  }, []);

  return (
    <>
      <div>hello</div>
      <button onClick={LoginClick}>login</button>
      <div>user state</div>
      <div>
        {user && Object.keys(user).map((el) => <div key={el}>{user[el]}</div>)}
      </div>
    </>
  );
}

export default App;
