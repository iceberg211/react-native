import {init} from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import createRematchPersist from '@rematch/persist';
import {combineReducers} from 'redux';
import immerPlugin from '@rematch/immer';
import * as models from '../models';
import {
  routerReducer,
  reactNavigationReduxMiddleware,
} from '../navigators/AppNavigator';

const persistPlugin = createRematchPersist({
  whitelist: [''],
  throttle: 5000,
  version: 1,
});

const loadingPlugin = createLoadingPlugin({});

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
        combineReducers({
          nav: routerReducer,
          ...reducers
        }),
    },
    plugins: [loadingPlugin, persistPlugin, immerPlugin],
  });
};

export default initializeStore;
