import {init} from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import * as models from '../models';
import {combineReducers} from 'redux';
const loadingPlugin = createLoadingPlugin({});
import {
  routerReducer,
  reactNavigationReduxMiddleware,
} from '../navigators/AppNavigator';

const initializeStore = (initialState = {}) => {
  return init({
    models,
    redux: {
      initialState,
      devtoolOptions: {
        name: 'react-native',
      },
      middlewares: [reactNavigationReduxMiddleware],
      combineReducers: reducers =>
        combineReducers({nav: routerReducer, ...reducers}),
    },
    plugins: [loadingPlugin],
  });
};

export default initializeStore;
