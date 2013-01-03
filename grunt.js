/*global module:false*/
module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-less');

  // Project configuration.
  grunt.initConfig({
    less: {
      compressed: {
        options: {
          compress: true,
          yuicompress: true
        },
        files: {
          'assets/css/lessthanbang.css': 'assets/less/lessthanbang.less'
        }
      }
    },
    watch: {
      files: ['assets/**/*.*'],
      tasks: 'less'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true
      },
      globals: {}
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'less');

};
