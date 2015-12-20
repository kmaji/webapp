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
        browsers: ['Chrome', 'Chrome_without_security'],

        // custom stuff
        customLaunchers: {
            Chrome_without_security: {
                base: 'Chrome',
                flags: ['--disable-web-security']
            }
        }
    });
};