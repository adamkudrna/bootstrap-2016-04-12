'use strict';

module.exports = {

  'build-css': [
    'less',
    'postcss',
  ],

  build: [
    'build-css',
  ],

  default: [
    'build',
  ],

};
