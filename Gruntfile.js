module.exports = function (grunt) {

	grunt.initConfig({

		neuter: {
			options: {
				basePath: 'src/js/',
				includeSourceMap: true
			},
			'public/js/squaft.js': 'src/js/**/*.js'
		},

		copy: {
			scripts: {
				files: [
					{src:['src/js/**/*.js'], dest: 'public/js/'}
				]
			},
			css: {
				files: [
					{src:['src/less/**/*.less'], dest: 'public/css/'}
				]
			}
		},

		less: {
			main: {
				options: {
					sourceMap: true
				},
				files: {
					'public/css/squaft.css': 'src/less/app.less'
				}
			}
		},

		emberTemplates: {
			main: {
				options: {
				},
				files: {
					'src/js/templates.js': 'src/hbs/**/*.hbs'
				}
			}
		},

		jshint: {
			all: ['Gruntfile.js', 'src/js/**/*.js']
		},

		watch: {
			scripts: {
				files: ['src/js/**/*.js'],
				tasks: ['jshint', 'neuter', 'copy:scripts'],
				options: {
					atBegin: true
				}
			},

			css: {
				files: ['src/less/**/*.less'],
				tasks: ['less', 'copy:css'],
				options: {
					atBegin: true
				}
			},

			hbs: {
				files: ['src/hbs/**/*.hbs'],
				tasks: ['emberTemplates'],
				options: {
					atBegin: true
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-neuter');
	grunt.loadNpmTasks('grunt-ember-templates');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['emberTemplates', 'jshint', 'neuter', 'less', 'copy']);
};