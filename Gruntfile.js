module.exports = function (grunt) {

	grunt.initConfig({

		neuter: {
			options: {
				includeSourceMap: true,
				basePath: 'src/js/',
				// Handlebars doesn't export to global scope wrapped in an IIFE, so fix that
				process: function (src, path) {
					if (path.match(/handlebars/)) {
						src += "\n\nthis.Handlebars = Handlebars;";
					}
					return src;
				}
			},
			'public/js/squaft.js': 'src/js/app.js'
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
					templateBasePath: "src/hbs/"
				},
				files: {
					'src/js/templates.js': 'src/hbs/**/*.hbs'
				}
			}
		},

		jshint: {
			files: ['Gruntfile.js', 'src/js/**/*.js'],
			options: {
				debug: true,
				ignores: [
					'src/js/vendor/**/*',
					'src/js/templates.js'
				]
			}
		},

		watch: {
			options: {
				livereload: true
			},
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