var options = {
  'paths':  ['stylus'],
  'import': ['variables']
};

module.exports = function (grunt) {
  grunt.config.set('stylus', {
    critical: {
      options: options,
      files: {
        'assets/css/critical.css': [
          'stylus/critical/critical.styl'
        ]
      }
    },
    secondary: {
      options: options,
      files: {
        'assets/css/secondary.css': [
          'stylus/secondary/secondary.styl'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.config.set('watch', {
    critical: {
      files: [
        'stylus/critical/*.styl',
        'stylus/variables.styl',
      ],
      tasks: ['stylus:critical']
    },
    secondary: {
      files: [
        'stylus/secondary/*.styl',
        'stylus/variables.styl'
      ],
      tasks: ['stylus:secondary']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
