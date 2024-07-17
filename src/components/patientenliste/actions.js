import axios from 'axios';

const saveData = (url, formData, step) => async dispatch => {
  try {
    const response = await axios.post(url, formData);
    dispatch({
      type: `SAVE_${step}_DATA_SUCCESS`,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: `SAVE_${step}_DATA_FAILURE`,
      payload: error
    });
  }
};

export const saveStep1Data = formData => saveData('http://localhost:3001/add-stammdaten', formData, 'STEP1');
export const saveStep2Data = formData => saveData('http://localhost:3001/add-step2-data', formData, 'STEP2');
export const saveStep3Data = formData => saveData('http://localhost:3001/add-step3-data', formData, 'STEP3');
export const saveStep4Data = formData => saveData('http://localhost:3001/add-step4-data', formData, 'STEP4');
export const saveStep5Data = formData => saveData('http://localhost:3001/add-step5-data', formData, 'STEP5');
export const saveStep6Data = formData => saveData('http://localhost:3001/add-step6-data', formData, 'STEP6');
export const saveStep7Data = formData => saveData('http://localhost:3001/add-step7-data', formData, 'STEP7');
