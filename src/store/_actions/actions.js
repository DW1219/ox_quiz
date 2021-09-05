import {
  Store_Result
} from './types';

export function storeResult(score) {
  //    const request = axios.post(`${USER_SERVER}/register`, dataToSubmit)
  //        .then(response => response.data);

  const request = score

  // 원래 여기서 뭔가 외부 서버로 보냈다가 서버로부터 데이터를 다시 받아 처리해야함
  // const request = axios.post(`${USER_SERVER}/login`, dataToSubmit).then(response => response.data);

  // 이후 receiveEnergy() 를 dispatch 한 Page쪽에서 아래와 같이 받는 부분을 처리해주어야 함
  // .then(response => {
  // if (response.payload.success) {props.history.push("/login");
  // 이런식으로 
  // 이후 reducer 쪽으로 request를 전달하는 구조
  // return { ...state, register: action.payload }     (reducer.js)   -> redux 트리구조에 root 아래 register 트리가 생기는 것!


  return {
      type: Store_Result,
      payload: request
  }
}