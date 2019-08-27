import {fetchPopularService} from '../services';

export default {
  name: 'github',
  state: {
    react: [],
    popular: null,
  },
  reducers: {
    fetchIndexDataSuc(state, payload) {
      return {...state, ...payload};
    },
    fetchPopularSuc(state, {items, name}) {
      return {
        ...state,
        react: items,
      };
    },
  },
  effects: {
    async fetchPopular(payload = {name: 'react'}) {
      const {name} = payload;
      try {
        const data = await fetchPopularService(payload);
        if (data.items) {
          this.fetchPopularSuc({items: data.items, name});
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
