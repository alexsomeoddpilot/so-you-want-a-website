module.exports = function (grunt) {
  var stylusOptions = {
    'paths':  ['stylus'],
    'import': ['variables']
  };

  grunt.config.set('stylus', {
    critical: {
      options: stylusOptions,
      files: {
        'assets/css/critical.css': [
          'bower_components/normalize.styl/normalize.styl',
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

  grunt.config.set('bower', {
    install: {
      options: {
        targetDir: 'bower_components'
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
};
