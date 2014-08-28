module.exports = function (grunt) {
  var stylusOptions = {
    'paths':  ['stylus'],
    'import': []
  };

  grunt.config.set('stylus', {
    critical: {
      options: stylusOptions,
      files: {
        'assets/css/critical.css': [
          'stylus/critical/critical.styl'
        ]
      }
    },
    secondary: {
      options: stylusOptions,
      files: {
        'assets/css/secondary.css': [
          'stylus/secondary/secondary.styl'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
};
