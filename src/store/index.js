/* global */
import {init} from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import * as models from '../models';

const loadingPlugin = createLoadingPlugin({});

const configureStore = () => {
  const store = init({
    models,
    redux: {
      middlewares: [],
    },
    plugins: [loadingPlugin],
  });

  const {dispatch} = store;

  return {store, dispatch};
};

export default configureStore;
