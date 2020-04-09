/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HomePage from './page/HomePage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HomePage);
