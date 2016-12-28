import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
const covers = (state=[], action) => {
  return state;
};
const rootReducer = combineReducers({
  covers,
  routing: routerReducer
});
export default rootReducer;
