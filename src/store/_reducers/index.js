import { combineReducers } from 'redux';
import store_result from './reducer';
// 여기서 짓는 이름이 redux 트리구조 최상단 이름으로 display

const rootReducer = combineReducers({
  store_result,
  /* reduer 추가는 아래에 추가 가능 */

});

export default rootReducer;