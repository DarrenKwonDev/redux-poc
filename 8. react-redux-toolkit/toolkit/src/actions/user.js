const { createAsyncThunk } = require("@reduxjs/toolkit");

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

// try/catch 감싸지 마라!!! extraReducers의의 rejected가 핸들링할 수 있도록 만들어야 한다.
// 그리고 이름은 꼭! 꼭! sliceName/asyncFuncName 꼴로 만들어줍시다. 동기 reducer와의 네이밍 컨벤션을 맞춰주기 위함입니다.
exports.logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
  console.log("login in createAsyncThunk", data); // dispatch(login(...)) 꼴로 들어온 정보들

  // 반환된 정보는 slice의 extraReducers의 함수의 두번째 인자인 action의 내부의 프로퍼티인 action.payload에 담기게 됨
  return await delay(500, {
    userId: 11235,
    nickname: "darrenss",
  });
});
