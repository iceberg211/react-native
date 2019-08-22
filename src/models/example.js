// This is an example model

export default {
  name: 'example',

  /**
   *  Initial state
   */
  state: {
    count: 0,
  },

  /**
   * Reducers
   */
  reducers: {
    increment(state, payload) {
      return state.count + payload;
    },
  },

  /**
   * Effects/Actions
   */
  effects: dispatch => ({
    async incrementAsync(payload) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch.example.increment(payload);
    },
  }),
};
