module.exports = function(grunt) {

    'use strict';

    /* Configuration */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Don't track
        sitecfg: grunt.file.readJSON('sitecfg.json'),

        /* Tasks */
        watch: {
            less: {
                files : [
                    'less/themes/<%= sitecfg.theme %>/**/*.less',
                ],
                tasks : ['less:theme', 'shell:create'],
                options : {
                    interrupt: true
                }
            },
            templates: {
                files : [
                    'themes/<%= sitecfg.theme %>/templates/*.html',
                ],
                tasks : ['shell:create'],
                options : {
                    interrupt: true
                }
            },
            content : {
                files: [
                    'pelicanconf.py',
                    '<%= sitecfg.contentdir %>/**/*.rst', '<%= sitecfg.contentdir %>/**/*.md'
                ],
                tasks : ['shell:create'],
                options : {
                    interrupt: true
                }
            }
        },

        less : {
            theme: {
                options: {
                    paths: ['less/themes/<%= sitecfg.theme %>/', 'less/themes/<%= sitecfg.theme %>/bootstrap']
                },
                files : {
                    'themes/<%= sitecfg.theme %>/static/css/gmztheme.min.css': 'less/themes/<%= sitecfg.theme %>/gmztheme.less'
                }
            }
        },

        copy: {

            // Just copy the files
            deploy : {
                files: [{
                    expand: true,
                    flatten: false,
                    cwd: "<%= sitecfg.publishdir %>",
                    src: ['**/*'],
                    dest: "<%= sitecfg.deployPath %>"
                }]
            }
        },

        shell : {

            clean: {
                command: 'rm -r <%= sitecfg.outputdir %>',
                options: {
                    stdout: true
                }
            },

            cleanPublish: {
                command: 'rm -r <%= sitecfg.publishdir %>',
                options: {
                    stdout: true
                }
            },

            create : {
                command: 'pelican <%= sitecfg.contentdir %> -o <%= sitecfg.outputdir %> -s pelicanconf.py',
                options: {
                    stdout: true
                }
            },

            publish : {
                command: 'pelican <%= sitecfg.contentdir %> -o <%= sitecfg.publishdir %> -s publishconf.py',
                options: {
                    stdout: true
                }
            }
        },

        sftp: {

        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('create', [
        'less:theme',
        'shell:create'
    ]);

    grunt.registerTask('publish', [
        'less:theme',
        'shell:publish'
    ]);

    grunt.registerTask('deploy', [
        'less:theme',
        'shell:publish',
        'copy:deploy'
    ]);

    grunt.registerTask('default', ['create']);

}