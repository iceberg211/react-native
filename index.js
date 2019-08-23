/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {YellowBox} from 'react-native';
import App from './src/app';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings(['Warning: ...']);
AppRegistry.registerComponent(appName, () => App);
