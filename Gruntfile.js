module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				separator: ';\n'
			},
			all: {
				src: ['src/js/app.js','src/js/controllers/*.js'],
				dest: 'src/js/<%= pkg.name %>.min.js'
			}
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			dist: {
				src: 'src/js/<%= pkg.name %>.min.js',
				dest: 'dist/js/<%= pkg.name %>.min.js'
			}
		},
		
		sass: {
			all: {
				options: {
					style: 'expanded'
				},
				files: {
					'src/style/mainStyle.css': 'src/style/mainStyle.scss'
				}
			}
		},
		
		copy: {
			all: {
				files: [
					{expand: true, cwd:'src/js/', src: ['**/*.js'], dest: 'dist/js/'},
					{expand: true, cwd:'src/style/', src: ['**'], dest: 'dist/style/'},
					{expand: true, cwd:'src/img/', src: ['**'], dest: 'dist/img/'},
					{expand: true, cwd:'src/template/', src: ['**'], dest: 'dist/template/'},
					{expand: true, cwd:'src/', src: ['index.html'], dest: 'dist/'}
				]
			},
			dev: {
				files: [
					{expand: true, cwd:'src/js/', src: ['**/*.js'], dest: 'dist/js/'},
					{expand: true, cwd:'src/style/', src: ['**'], dest: 'dist/style/'},
					{expand: true, cwd:'src/img/', src: ['**'], dest: 'dist/img/'},
					{expand: true, cwd:'src/template/', src: ['**'], dest: 'dist/template/'},
					{expand: true, cwd:'src/', src: ['index.html'], dest: 'dist/'}
				]
			}
		},
		
		clean: {
			all: ['dist/*'],
			dev: ['dist/js/*','dist/style/*','dist/template/*','dist/index.html'],
			allpost: ['src/style/mainStyle.css', 'src/js/<%= pkg.name %>.min.js'],
			commitpre: ['src/js/<%= pkg.name %>.min.js', 'src/style/mainStyle.css.map']
		},
		
		'http-server': {
			dev: {
				root: 'dist',
				port: 8081,
				host: '0.0.0.0',
				ext: 'html',
				runInBackground: false,
				openBrowser : true
			}
		},

		watch: {
		    files: [
		    	'src/**/*.html',
		    	'src/style/*.scss',
		    	'src/js/app.js',
		    	'src/js/controllers/**/*.js'
		    ],
		    tasks: ['dev']
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-http-server');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('dev', ['clean:dev', 'concat:all', 'sass', 'copy:dev', 'clean:allpost']);
	grunt.registerTask('dist', ['clean:all', 'concat:all', 'uglify', 'sass', 'copy:all', 'clean:allpost']);

	// TODO Implement scripts for testing

	grunt.registerTask('start-server', ['http-server']);

	grunt.registerTask('prepare-commit', ['clean']);

	grunt.registerTask('default', ['dist']);
};