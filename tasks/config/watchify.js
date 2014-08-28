module.exports = function (grunt) {
  grunt.config.set('watchify', {
    main: {
      src: './main.js',
      dest: 'assets/js/bundle.js'
    }
  });

  grunt.loadNpmTasks('grunt-watchify');
}
