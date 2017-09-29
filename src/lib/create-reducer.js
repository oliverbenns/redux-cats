export default (initialState, reducers) => {
  return (state = initialState, action = {}) => {
    return reducers[action.type] ? reducers[action.type](state, action) : state;
  };
};
