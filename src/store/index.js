import {init} from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import * as models from '../models';
const loadingPlugin = createLoadingPlugin({});

const initializeStore = (initialState = {}) => {
  return init({
    models,
    redux: {
      initialState,
      devtoolOptions: {
        name: 'react-native',
      },
      // middlewares: [reactNavigationReduxMiddleware],
      // combineReducers: reducers =>
      //   combineReducers({router: navReducer, ...reducers}),
    },
    plugins: [loadingPlugin],
  });
};

export default initializeStore;
