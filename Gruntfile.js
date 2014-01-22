module.exports = function(grunt) {

    'use strict';

    /* Configuration */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        theme: 'gmzblue',
        contentdir: 'content',
        outputdir: 'output',
        publishdir: 'publish',

        /* Tasks */
        watch: {
            less: {
                files : [
                    'less/themes/<%= theme %>/**/*.less',
                ],
                tasks : ['less:theme', 'shell:create'],
                options : {
                    interrupt: true
                }
            },
            templates: {
                files : [
                    'themes/<%= theme %>/templates/*.html',
                ],
                tasks : ['shell:create'],
                options : {
                    interrupt: true
                }
            },
            content : {
                files: [
                    'pelicanconf.py',
                    '<%= contentdir %>/**/*.rst', '<%= contentdir %>/**/*.md'
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
                    paths: ['less/themes/<%= theme %>/', 'less/themes/<%= theme %>/bootstrap']
                },
                files : {
                    'themes/<%= theme %>/static/css/gmztheme.min.css': 'less/themes/<%= theme %>/gmztheme.less'
                }
            }
        },

        shell : {

            clean: {
                command: 'rm -r <%= outputdir %>',
                options: {
                    stdout: true
                }
            },

            cleanPublish: {
                command: 'rm -r <%= publishdir %>',
                options: {
                    stdout: true
                }
            },

            create : {
                command: 'pelican <%= contentdir %> -o <%= outputdir %> -s pelicanconf.py',
                options: {
                    stdout: true
                }
            },

            publish : {
                command: 'pelican <%= contentdir %> -o <%= publishdir %> -s publishconf.py',
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
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-ssh');

    grunt.registerTask('create', [
        'less:theme',
        'shell:create'
    ]);

    grunt.registerTask('publish', [
        'less:theme',
        'shell:publish'
    ]);

    grunt.registerTask('default', ['create']);

}