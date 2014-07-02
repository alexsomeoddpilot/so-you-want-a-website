module.exports = function (grunt) {
  var watchOptions = {
    spawn: false,
  };

  grunt.config.set('watch', {
    critical: {
      files: [
        'stylus/critical/*.styl',
        'stylus/variables.styl',
      ],
      tasks:   ['stylus:critical'],
      options: watchOptions
    },
    secondary: {
      files: [
        'stylus/secondary/*.styl',
        'stylus/variables.styl'
      ],
      tasks: ['stylus:secondary'],
      options: watchOptions
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
