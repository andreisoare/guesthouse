module.exports = function(grunt) {
  grunt.initConfig({
    handlebars: {
      all: {
        options: {
          namespace: "Templates"
        },
        files: {
          "build/templates.js": ["templates/**/*.hbs"]
        }
      }
    },

    neuter: {
      application: {
        options: {
          includeSourceMap: true
        },
        dest: 'build/application.min.js',
        src: 'js/app.js'
      }
    },

    cssmin: {
      combine: {
        files: {
          'build/style.min.css': ['css/base.css']
        }
      }
    },

    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ['neuter']
      },
      css: {
        files: ['css/**/*.js'],
        tasks: ['cssmin']
      },
      templates: {
        files: ['templates/**/*.hbs'],
        tasks: ['handlebars', 'neuter']
      }
    }
  });

  grunt.loadNpmTasks('grunt-neuter');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', [
    'handlebars',
    'neuter',
    'cssmin',
    'watch'
  ]);
};
