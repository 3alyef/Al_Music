// eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

// eslint-disable-next-line no-undef
module.exports = mergeConfig(getDefaultConfig(__dirname), config);
