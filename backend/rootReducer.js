import { combineReducers } from 'redux';
import {
  step1Reducer,
  step2Reducer,
  step3Reducer,
  step4Reducer,
  step5Reducer,
  step6Reducer,
  step7Reducer,
} from './reducers';

const rootReducer = combineReducers({
  step1: step1Reducer,
  step2: step2Reducer,
  step3: step3Reducer,
  step4: step4Reducer,
  step5: step5Reducer,
  step6: step6Reducer,
  step7: step7Reducer,
});

export default rootReducer;
