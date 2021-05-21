const {
  LOG_IN,
  LOG_OUT,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
} = require("./_types");

// async action
const asyncLogin = (data) => {
  return (next, getState) => {
    // 요청 보내기
    next(loginRequest(data)); // 패스워드, 인증 등 정보 넘어가겠죠? 여기선 일단 생략

    try {
      // 로그인 과정 2초
      setTimeout(() => {
        next(loginSuccess({ id: 1, name: "darren", admin: true }));
      }, 2000);
    } catch (error) {
      next(loginFailure(error));
    }
  };
};

const loginRequest = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

const loginSuccess = (data) => {
  return {
    type: LOG_IN_SUCCESS,
    data,
  };
};

const loginFailure = (error) => {
  return {
    type: LOG_IN_FAILURE,
    error,
  };
};

const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

module.exports = {
  logOut,
  asyncLogin,
};
