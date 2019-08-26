import {fetchIndexData} from '../services';

export default {
  name: 'home',
  state: {
    banner: [],
    brandList: [],
    categoryList: [],
    channel: [],
    hotGoodsList: [],
    newGoodsList: [],
  },
  reducers: {
    fetchIndexDataSuc(state, payload) {
      return {...state, ...payload};
    },
  },
  effects: {
    async fetchIndex(payload) {
      const data = await fetchIndexData();
      this.fetchIndexDataSuc(data.data);
    },
  },
};
