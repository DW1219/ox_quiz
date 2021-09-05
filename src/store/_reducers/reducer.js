import {
  Store_Result
} from '../_actions/types';

export default function (state = {}, action) {
  switch (action.type) {
      case Store_Result:
          //console.log(action.payload)
          return { ...state, storedScore: action.payload }
      default:
          return state;
  }
}