'use strict';

module.exports = {

  dist: {
    options: {
      paths: '<%= paths.bower %>',
    },
    files: {
      '<%= paths.temp %>/main.css': '<%= paths.src %>/less/main.less',
    },
  },

};
