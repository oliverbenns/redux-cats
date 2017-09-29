import { LOAD_CATS_REQUEST, LOAD_CATS_SUCCESS, LOAD_CATS_FAIL } from '../actions/types';
import createReducer from '../lib/create-reducer';

const initialState = {
  error: null,
  images: [],
  loading: false,
};

const reducers = {
  [LOAD_CATS_REQUEST]: (state, action) => ({
    ...state,
    error: null,
    loading: true,
  }),
  [LOAD_CATS_SUCCESS]: (state, action) => ({
    ...state,
    loading: false,
    // Because the response we get is gross xml.
    images: action.data.children.map(c => c.children.find(d => d.name === "url").content),
  }),
  [LOAD_CATS_FAIL]: (state, action) => ({
    ...state,
    loading: false,
    error: action.error.message,
  }),
};

export default createReducer(initialState, reducers);
