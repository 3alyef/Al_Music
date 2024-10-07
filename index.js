/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App'; // ou o caminho correto para o seu componente App
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
