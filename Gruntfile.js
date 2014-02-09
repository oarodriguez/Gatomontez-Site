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
                    'build/themes/<%= sitecfg.theme %>/static/css/gmztheme.css': 'less/themes/<%= sitecfg.theme %>/gmztheme.less'
                }
            }
        },

        cssmin: {
            theme : {
                files : {
                    'themes/<%= sitecfg.theme %>/static/css/gmztheme.min.css': [
                        'build/themes/<%= sitecfg.theme %>/static/css/gmztheme.css'
                    ]
                },
                options: {
                    report: 'min'
                }
            }
        },

        uglify: {
            theme : {
                files : {
                    'themes/<%= sitecfg.theme %>/static/js/main.min.js': [
                        'js/themes/<%= sitecfg.theme %>/**/*.js'
                    ]
                },
                options : {
                    report: 'min'
                }
            }
        },

        copy: {

            /* Copy files not minified to development directory, as these are
            not copied to the current theme static directory, hence pelican
            does not copy them. */
            devel : {
                files : [{
                    expand: true,
                    flatten: false,
                    cwd: "build/themes/<%= sitecfg.theme %>/static",
                    src: ['**/*'],
                    dest: "<%= sitecfg.outputdir %>/theme"
                }, {
                    expand: true,
                    flatten: false,
                    cwd: "js/themes/<%= sitecfg.theme %>",
                    src: ['**/*'],
                    dest: "<%= sitecfg.outputdir %>/theme/js"
                }]
            },

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
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('create', [
        'less:theme',
        'copy:devel',
        'shell:create'
    ]);

    grunt.registerTask('publish', [
        'less:theme',
        'cssmin:theme',
        'uglify:theme',
        'shell:publish'
    ]);

    grunt.registerTask('deploy', [
        'publish',
        'copy:deploy'
    ]);

    grunt.registerTask('default', ['create']);

}