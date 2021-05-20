const { createStore } = require("redux");

const reducer = (prevState, action) => {
    switch (action.type) {
      case 'CHANGE_COMP_A':
        // return값이 state가 됨
        return {
          ...prevState,
          compA: action.data,
        };
      case 'CHANGE_COMP_B':
        return {
          ...prevState,
          compB: action.data,
        };
      case 'CHANGE_COMP_C':
        return {
          ...prevState,
          compC: action.data,
        };
      default:
        return prevState;
    }
  };

// initialState와 store
const initialState = {
    compA: 'a',
    compB: 12,
    compC: null,
};

const store = createStore(reducer, initialState)

// store의 state 변경시 자동으로 트리거 됨. pub/sub 모델 구현이라 보면 됨
store.subscribe(() => console.log(store.getState()))

// 사용할 action. type과 data를 지닌 객체일 뿐임. 물론 type, data말고 원하는 key 값을 써도 되긴 함. 관습일 뿐
const CHANGE_COMP_A = 'CHANGE_COMP_A'
const CHANGE_COMP_B = 'CHANGE_COMP_B'
const CHANGE_COMP_C = 'CHANGE_COMP_C'

const changeComp = (type, data) => {
    return {
      type,
      data,
    };
};


// action 사용해볼까? dispatch하면 됨
store.dispatch(changeComp(CHANGE_COMP_A, "b"))
store.dispatch(changeComp(CHANGE_COMP_A, "c"))
store.dispatch(changeComp(CHANGE_COMP_B, 35))
store.dispatch(changeComp(CHANGE_COMP_C, {name: "darren"}))

