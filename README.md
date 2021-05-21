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
