const initialState = {
  data: {},
  error: null,
};

const createStepReducer = (step) => (state = initialState, action) => {
  switch (action.type) {
    case `SAVE_${step}_DATA_SUCCESS`:
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case `SAVE_${step}_DATA_FAILURE`:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const step1Reducer = createStepReducer('STEP1');
const step2Reducer = createStepReducer('STEP2');
const step3Reducer = createStepReducer('STEP3');
const step4Reducer = createStepReducer('STEP4');
const step5Reducer = createStepReducer('STEP5');
const step6Reducer = createStepReducer('STEP6');
const step7Reducer = createStepReducer('STEP7');

export {
  step1Reducer,
  step2Reducer,
  step3Reducer,
  step4Reducer,
  step5Reducer,
  step6Reducer,
  step7Reducer,
};
