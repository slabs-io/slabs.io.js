'use strict';

module.exports = function(grunt) {

	// Unified Watch Object
	var watchFiles = {
		slabsLib:['src/slabs.io.js', 'lib/qwest/qwest.min.js', 'lib/q/q.js']
	};

	// Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			production: {
				options: {
					mangle: false
				},
				files: {
					'dist/slabs.io.js': watchFiles.slabsLib
				}
			}
		}
	});

	// Load NPM tasks
	require('load-grunt-tasks')(grunt);

	// Default task(s).
	grunt.registerTask('default', ['uglify']);

};
