module.exports = function (grunt) {
  grunt.config.set('bower', {
    install: {
      options: {
        targetDir: 'bower_components'
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
};
