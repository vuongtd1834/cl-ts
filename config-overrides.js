const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@Interfaces': path.resolve(__dirname, 'src/Interfaces'),
      '@Interfaces/*': path.resolve(__dirname, 'src/Interfaces/*'),
      '@Reducers': path.resolve(__dirname, 'src/Redux/Reducers'),
      '@Reducers/*': path.resolve(__dirname, 'src/Redux/Reducers/*'),
      '@Redux': path.resolve(__dirname, 'src/Redux'),
      '@Redux/*': path.resolve(__dirname, 'src/Redux/*'),
    },
  };
return config;
};