module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      application: ["build/application.js"],
      maps: ["build/*.map"],
      templates: ["build/templates.js"],
      img: ["build/img"],
      index: ["build/index.html"]
    },

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
          includeSourceMap: grunt.option('target') === "dev"
        },
        dest: grunt.option('target') === "dev" ? 'build/application.min.js' : 'build/application.js',
        src: 'js/app.js'
      }
    },

    replace: {
      sourceMap: {
        src: 'build/application.min.js.map',
        dest: 'build/application.min.js.map',
        replacements: [{
          from: '"js/',
          to: '"/js/'
        }, {
          from: '"build/',
          to: '"/build/'
        }]
      }
    },

    uglify: {
      prod: {
        files: {
          'build/application.min.js': 'build/application.js'
        }
      }
    },

    less: {
      dev: {
        files: {
          "build/style.min.css": "css/base.less"
        }
      },
      prod: {
        options: {
          yuicompress: true
        },
        files: {
          "build/style.min.css": "css/base.less"
        }
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, src: ['img/**'], dest: 'build'},
          {expand: true, src: ['index.html'], dest: 'build'}
        ]
      }
    },

    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ['handlebars', 'neuter', 'replace', 'clean:templates']
      },
      style: {
        files: ['css/**/*.css', 'css/**/*.less'],
        tasks: ['less:dev']
      },
      templates: {
        files: ['templates/**/*.hbs'],
        tasks: ['handlebars', 'neuter', 'replace', 'clean:templates']
      }
    }
  });

  grunt.loadNpmTasks('grunt-neuter');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-text-replace');

  if (grunt.option('target') === "dev") {
    grunt.registerTask('default', [
      'handlebars',
      'neuter',
      'replace',
      'clean:templates',
      'less:dev',
      'copy',
      'watch'
    ]);
  } else {
    grunt.registerTask('default', [
      'handlebars',
      'neuter',
      'uglify',
      'less:prod',
      'copy',
      'clean'
    ]);
  }
};
