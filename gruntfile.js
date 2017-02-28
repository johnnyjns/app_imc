module.exports = function(grunt){

  grunt.initConfig({

    clean:{

      dist:{
        src: 'bin'
      }
    },

    copy: {

      all: {
        expand: true,
        cwd: 'src',
        src: ['**', '!teste*.*'],
        dest: 'bin'
      }
    }

  });

  grunt.registerTask('dist', ['clean', 'copy']);

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
};
