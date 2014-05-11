var config = require('./package.json');

module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        bump: {
            options: {
                files: ['package.json','component.json','bower.json'],
                commitFiles: ['-a'],
                commitMessage: 'Release v%VERSION%',
                pushTo: 'origin',
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true
            }
        },
        uglify: {
            dist: {
                options: {
                    compress: {
                        drop_console:true
                    },
                    beautify:false,
                    mangle:true,
                    sourceMap:false
                },
                files: {
                    'backbone-helper.min.js':'backbone-helper.js'
                }
            }
        },
        clean: ['backbone-helper.min.js']
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-git');
    grunt.loadNpmTasks('grunt-bump');

    // By default, lint and run all tests.
    grunt.registerTask('default', [
        'clean',
        'uglify',
        'bump'
    ]);
};