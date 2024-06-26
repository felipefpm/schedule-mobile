module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset', '@babel/preset-typescript'],
    plugins: [
    ['babel-plugin-styled-components', { 'displayName': true, 'preprocess': false }],
    'react-native-reanimated/plugin'
  ],
  };
};
