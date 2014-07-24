module.exports = function(grunt) {
  grunt.initConfig({
		clean: {
			application: ["build/application.js"],
			maps: ["build/*.map"]
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

    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ['neuter']
      },
      style: {
        files: ['css/**/*.css', 'css/**/*.less'],
        tasks: ['less:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-neuter');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  if (grunt.option('target') === "dev") {
    grunt.registerTask('default', [
      'neuter',
      'less:dev',
      'watch'
    ]);
  } else {
    grunt.registerTask('default', [
			'clean:maps',
      'neuter',
      'uglify',
      'less:prod',
			'clean:application'
    ]);
  }
};
