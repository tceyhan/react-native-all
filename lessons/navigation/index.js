/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './src/Router';
import {name as appName} from './app.json';
// drawer yapısı için import
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Router);
