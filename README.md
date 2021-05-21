# Redux-poc

안 쓰다보니 잊어버려서...  
https://redux.js.org/introduction/getting-started

1. 아주 간단한 형태의 redux입니다.
2. login, logout, post 올리기 action으로 예시
3. foldering을 하였습니다. action type을 분리하고, action, reducer를 분리합니다. combineReducer로 reducer를 종합합니다.
   1. https://redux.js.org/recipes/structuring-reducers/using-combinereducers
4. 단순 로깅용 middleware를 장착합니다.(redux-logger, custom middleware). applyMiddleware와 compose를 사용합니다.
   1. https://redux.js.org/understanding/history-and-design/middleware
5. custom async thunk middleware. 비동기 처리. action을 함수로 넘길것.
6. react-redux. react와의 접합. useSelector, useDispatch
   1. https://react-redux.js.org/
7. immer로 immutable 유지.
   1. https://github.com/immerjs/immer
   2. https://react.vlpt.us/basic/23-immer.html

## 추가적으로 참고해보면 좋을 자료들

github.com/acdlite/redux-router#differences-with-react-router-redux  
github.com/reduxjs/redux/tree/master/examples/real-world  
github.com/joshgeller/react-redux-jwt-auth-example
