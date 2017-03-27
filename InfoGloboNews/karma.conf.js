module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    client: {
      //captureConsole: false
    },

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'angular-cli'],

    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-remap-istanbul'),
      require('karma-mocha-reporter'),
      require('karma-junit-reporter'),
      require('karma-htmlfile-reporter'),
      require('angular-cli/plugins/karma'),
    ],


    // list of files / patterns to load in the browser
    files: [
      { pattern: './src/test.ts', watched: false },
    ],

    preprocessors: {
      './src/test.ts': ['angular-cli',]
    },

    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },

    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },

    reporters: [
      'mocha', 'junit', 'html', 'karma-remap-istanbul'
    ],

    junitReporter: {
      outputDir: './test/unit/results/',
      useBrowserName: false,
      outputFile: 'TecnicoVirtual-frontend-TEST.xml'
    },

    htmlReporter: {
      outputFile: './test/unit/results/TecnicoVirtual-frontend-TEST.html'
    },

    // web server port
    port: 9876,
    //https://github.com/karma-runner/karma-phantomjs-launcher/issues/126#issuecomment-275627458
    browserNoActivityTimeout: 1000000,
    //https://github.com/karma-runner/karma-phantomjs-launcher/issues/126#issuecomment-275627458
    captureTimeout: 1000000,


    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
