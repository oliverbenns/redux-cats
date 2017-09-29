import { LOAD_CATS_REQUEST, LOAD_CATS_SUCCESS, LOAD_CATS_FAIL } from './types';
import api from '../lib/api';

export const getCats = () => {
  return dispatch => {
    dispatch({ type: LOAD_CATS_REQUEST });

    const query = { format: 'xml', results_per_page: 10 };

    return api.request('/images/get', { query })
      .then(data => {
        return dispatch({
          type: LOAD_CATS_SUCCESS,
          data,
        });
      })
      .catch(error => {
        return dispatch({
          type: LOAD_CATS_FAIL,
          error,
        });
      });
  };
};
