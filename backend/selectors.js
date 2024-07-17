import { createSelector } from 'reselect';

const selectStep1 = (state) => state.step1?.data || {};
const selectStep2 = (state) => state.step2?.data || {};
const selectStep3 = (state) => state.step3?.data || {};
const selectStep4 = (state) => state.step4?.data || {};
const selectStep5 = (state) => state.step5?.data || {};
const selectStep6 = (state) => state.step6?.data || {};

export const makeSelectStep1Data = createSelector(
  [selectStep1],
  (step1Data) => step1Data
);

export const makeSelectStep2Data = createSelector(
  [selectStep2],
  (step2Data) => step2Data
);

export const makeSelectStep3Data = createSelector(
  [selectStep3],
  (step3Data) => step3Data
);

export const makeSelectStep4Data = createSelector(
  [selectStep4],
  (step4Data) => step4Data
);

export const makeSelectStep5Data = createSelector(
  [selectStep5],
  (step5Data) => step5Data
);

export const makeSelectStep6Data = createSelector(
  [selectStep6],
  (step6Data) => step6Data
);
