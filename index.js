/**
 * @format
 */

const { AppRegistry } = require("react-native");
const App = require("./src/App").default; // Adicione .default se App for uma exportação padrão
const { name: appName } = require("./app.json");

AppRegistry.registerComponent(appName, () => App);
