'use strict';

module.exports = {

  dist: {
    options: {
      processors: [
        require('autoprefixer')(),
      ],
    },
    src: '<%= paths.temp %>/main.css',
    dest: '<%= paths.dist %>/css/main.css',
  },
  'dist-min': {
    options: {
      processors: [
        require('cssnano')({
          autoprefixer: false,
          mergeRules: false,
          zindex: false,
        }),
      ],
    },
    src: '<%= paths.dist %>/css/main.css',
    dest: '<%= paths.dist %>/css/main.min.css',
  },

};
