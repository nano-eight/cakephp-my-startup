module.exports = function (grunt) {
	grunt.initConfig({
		bower: {
			install: {
				options: {
					targetDir: './webroot/assets',
					layout: 'byComponent',
					install: true,
					verbose: false,
					cleanTargetDir: true,
					cleanBowerDir: true
				}
			}
		},
	});
	grunt.loadNpmTasks('grunt-bower-task');
};
