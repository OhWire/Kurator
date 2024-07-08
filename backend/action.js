import axios from 'axios';

export const saveStep1Data = (formData) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3001/add-stammdaten', formData);
    dispatch({
      type: 'SAVE_STEP1_DATA_SUCCESS',
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: 'SAVE_STEP1_DATA_FAILURE',
      payload: error
    });
  }
};

export const saveStep2Data = (formData) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3001/add-step2-data', formData);
    dispatch({
      type: 'SAVE_STEP2_DATA_SUCCESS',
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: 'SAVE_STEP2_DATA_FAILURE',
      payload: error
    });
  }
};

export const saveStep3Data = (formData) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3001/add-step3-data', formData);
    dispatch({
      type: 'SAVE_STEP3_DATA_SUCCESS',
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: 'SAVE_STEP3_DATA_FAILURE',
      payload: error
    });
  }
};

export const saveStep4Data = (formData) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3001/add-step4-data', formData);
    dispatch({
      type: 'SAVE_STEP4_DATA_SUCCESS',
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: 'SAVE_STEP4_DATA_FAILURE',
      payload: error
    });
  }
};

export const saveStep5Data = (formData) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3001/add-step5-data', formData);
    dispatch({
      type: 'SAVE_STEP5_DATA_SUCCESS',
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: 'SAVE_STEP5_DATA_FAILURE',
      payload: error
    });
  }
};

export const saveStep6Data = (formData) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3001/add-step6-data', formData);
    dispatch({
      type: 'SAVE_STEP6_DATA_SUCCESS',
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: 'SAVE_STEP6_DATA_FAILURE',
      payload: error
    });
  }
};

export const saveStep7Data = (formData) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3001/add-step7-data', formData);
    dispatch({
      type: 'SAVE_STEP7_DATA_SUCCESS',
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: 'SAVE_STEP7_DATA_FAILURE',
      payload: error
    });
  }
};
