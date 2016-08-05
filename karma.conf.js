// Karma configuration
// Generated on Tue Aug 02 2016 10:16:15 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
		'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular.min.js',
		'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.1/angular-ui-router.min.js',
		'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-animate.min.js',
		'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-aria.min.js',
		'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.3/angular-messages.min.js',

		'https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc2/angular-material.min.js',

		'public/dist/angular-scroll-glue/src/scrollglue.js',
		'public/dist/angular-mocks/angular-mocks.js',

		'public/src/js/*.js',
		'tests/unit/*.test.js'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};