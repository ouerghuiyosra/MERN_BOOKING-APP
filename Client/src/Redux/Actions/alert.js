import { REMOVE_ALERT, SET_ALERT } from './ActioType';

export const setAlert = ({ msg, alertType }) => async (dispatch) => {
  const id = Math.random();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });
};

export const deleteAlert = ({ id }) => async (dispatch) => {
  dispatch({ type: REMOVE_ALERT, payload: id });
};
