const initialState = {
    step1Data: {},
    step2Data: {},
    step3Data: {},
    step4Data: {},
    step5Data: {},
    step6Data: {},
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVE_STEP1_DATA':
        return {
          ...state,
          step1Data: action.payload,
        };
      case 'SAVE_STEP2_DATA':
        return {
          ...state,
          step2Data: action.payload,
        };
      case 'SAVE_STEP3_DATA':
        return {
          ...state,
          step3Data: action.payload,
        };
      case 'SAVE_STEP4_DATA':
        return {
          ...state,
          step4Data: action.payload,
        };
      case 'SAVE_STEP5_DATA':
        return {
          ...state,
          step5Data: action.payload,
        };
      case 'SAVE_STEP6_DATA':
        return {
          ...state,
          step6Data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  