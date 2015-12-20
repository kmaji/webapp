module.exports = function(config) {
    config.set({
        basePath: 'src',
        frameworks: ['jasmine'],
        files: [
            'main/webapp/**/*.js',
            'test/**/*.specs.js'
        ],
        port: 9876,
        singleRun: true,
        autoWatch: false,
        browsers: ['PhantomJS'],//, 'Chrome_without_security'],
        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine'
        ],
        customLaunchers: {
            Chrome_without_security: {
                base: 'Chrome',
                flags: ['--disable-web-security']
            }
        }
    });
};