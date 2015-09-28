module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'tinysequence.js',
      'spec/**/*.spec.js'
    ],
    singleRun: true,
    browsers: ['PhantomJS'],
    reporters: ['spec']
  });
}
